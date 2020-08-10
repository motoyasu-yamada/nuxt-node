module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/main/nuxt/$1',
    '^~/(.*)$': '<rootDir>/main/nuxt/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  testMatch: ['**/test/nuxt/**/*.test.ts', '**/test/nuxt/**/*.test.vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'test/nuxt/tsconfig.json',
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/main/nuxt/components/**/*.vue',
    '<rootDir>/main/nuxt/pages/**/*.vue',
  ],
}
