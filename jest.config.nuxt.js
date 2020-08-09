module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/main/nuxt/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/main/nuxt/components/**/*.vue',
    '<rootDir>/main/nuxt/pages/**/*.vue',
  ],
}
