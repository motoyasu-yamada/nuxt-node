import express from 'express'
import cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'

export class Http {
  private port: number
  private application: express.Application

  constructor(port: number) {
    this.port = port
    this.application = express()
  }

  start(): void {
    const a = this.application
    a.set('port', this.port)
    a.use(
      bodyParser.json({
        limit: '1mb',
        type: 'application/json',
      })
    )
    a.use(
      bodyParser.urlencoded({
        extended: true,
        limit: '1mb',
        type: 'application/x-www-form-urlencoded',
      })
    )
    a.use(cookieParser())

    this.application = a // useExpressServer(a, options)

    this.application.listen(this.application.get('port'))
  }
}

const http = new Http(8080)
http.start()
