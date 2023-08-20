import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

import BaseConfig from './jest.config'

const UnitConfig: InitialOptionsTsJest = {
  ...BaseConfig,
  coveragePathIgnorePatterns: [...BaseConfig.coveragePathIgnorePatterns, '.action.ts'],
  globalSetup: '<rootDir>/test/jest-global.setup.ts',
  globalTeardown: '',
  testRegex: '.spec.ts$'
}
export default UnitConfig
