import { config } from 'node-config-ts'

export default {
  name: 'default',
  type: 'mysql',
  username: config.mysql.user,
  ...config.mysql,
  synchronize: false,
  logging: true,
  entities: ['main/node/entities/**/*.ts'],
  migrations: ['main/node/migrations/**/*.ts'],
  subscribers: ['main/node/subscribers/**/*.ts'],
  migrationsRun: true,
  cli: {
    entitiesDir: 'main/node/entities',
    migrationsDir: 'main/node/migrations',
    subscribersDir: 'main/node/subscribers',
  },
}
