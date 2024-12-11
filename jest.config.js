module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/node_modules/**',
      '!**/.next/**',
      '!**/out/**',
      '!**/coverage/**',
    ],
    coverageDirectory: 'coverage',
  };
  