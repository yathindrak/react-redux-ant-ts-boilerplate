module.exports = {
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.test.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^src(.*)': '<rootDir>/src$1'
  },
  setupTestFrameworkScriptFile: '<rootDir>/scripts/setupTest.ts',
  testRegex: 'test\\.(ts|tsx)?$',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  }
}
