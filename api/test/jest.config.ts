import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const BaseConfig: InitialOptionsTsJest = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'test/coverage/',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.module.ts',
    'main.ts',
    '.interface.ts',
    '/swagger/',
    '.repository.ts',
    '.config.ts',
    '.enum.ts',
    '.dto.ts',
    '/entity/',
    '.input.ts',
    '.output.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  globalSetup: '<rootDir>/test/e2e/setup.ts',
  setupFiles: ['reflect-metadata'],
  setupFilesAfterEnv: [],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1'
  },
  preset: 'ts-jest',
  rootDir: '../',
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testEnvironment: 'node',
  testRegex: '.(spec|e2e).ts$',
  verbose: true
}

export default BaseConfig
