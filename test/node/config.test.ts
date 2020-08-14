import { config, Config } from 'node-config-ts'

describe('config', () => {
  test('基本的な動作', () => {
    const c: Config = config
    const mysql = c.mysql
    expect(mysql.typeCast).toEqual(true)
  })
})
