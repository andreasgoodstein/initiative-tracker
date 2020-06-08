module.exports = {
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
