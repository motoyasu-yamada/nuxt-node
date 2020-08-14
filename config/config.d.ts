/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    env: string
    mysql: Mysql
  }
  interface Mysql {
    typeCast: boolean
    timezone: string
    charset: string
    connectTimeout: number
    aquireTimeout: number
    timeout: number
    host: string
    user: string
    database: string
    port: number
  }
  export const config: Config
  export type Config = IConfig
}
