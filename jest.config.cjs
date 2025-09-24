module.exports = {
  testEnvironment: "node",   // Node is fine for these tests
  transform: {},             // don't use Babel; ESM tests are fine
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
