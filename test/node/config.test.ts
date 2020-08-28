import { config, Config } from 'node-config-ts'
import { a } from './index-test'

describe('config', () => {
  test('基本的な動作', () => {
    const c: Config = config
    const mysql = c.mysql
    expect(mysql.typeCast).toEqual(true)
    a()
  })
})
