module.exports = {
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
  coverageThreshold: {
    global: {
      statements: 56,
      branches: 32,
      functions: 59,
      lines: 30,
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
