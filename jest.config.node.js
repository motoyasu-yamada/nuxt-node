module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/main/node/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  testMatch: ['**/test/node/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'test/node/tsconfig.json',
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/main/node/**/*.ts'],
}
