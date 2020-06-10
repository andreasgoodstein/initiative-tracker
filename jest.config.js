module.exports = {
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
  coverageThreshold: {
    global: {
      statements: 99,
      branches: 88,
      functions: 100,
      lines: 98,
    },
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
  },
};
