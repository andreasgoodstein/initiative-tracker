const { defaults: tsJestConfig } = require('ts-jest/presets');

module.exports = {
  ...tsJestConfig,
  preset: 'jest-expo',
  transform: {
    ...tsJestConfig.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      tsConfig: './test/tsconfig.jest.json',
    },
  },
  modulePaths: ['<rootDir>/src'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/test/',
    '/assets/'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/test/setupEnzyme.js',
  snapshotSerializers: ["enzyme-to-json/serializer"]
};