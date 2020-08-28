/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import express from 'express'
import cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import 'reflect-metadata'
import {
  RoutingControllersOptions,
  useExpressServer,
} from 'routing-controllers'
import { a } from './index-test'
import { config, Config } from 'node-config-ts'

export class Http {
  private port: number
  private application: express.Application

  constructor(port: number) {
    this.port = port

    const a = express()
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

    this.application = useExpressServer(a, this.routingControllerOptions)
  }

  start(): void {
    this.application.listen(this.application.get('port'))
  }

  private get routingControllerOptions(): RoutingControllersOptions {
    return {
      defaultErrorHandler: true,
      controllers: [`${__dirname}/controllers/**/*.ts`],
      middlewares: [`${__dirname}/middlewares/*.ts`],
    }
  }
}

const http = new Http(8080)
http.start()
