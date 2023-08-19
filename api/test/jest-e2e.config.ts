import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

import BaseConfig from './jest.config'

const E2eConfig: InitialOptionsTsJest = {
  ...BaseConfig,
  collectCoverageFrom: ['src/**/*.action.ts'],
  testRegex: '.e2e.ts$'
}
export default E2eConfig
