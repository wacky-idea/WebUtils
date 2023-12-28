/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  reporters: [
    "default",
    ["jest-junit", { outputName: '/dist/junit.xml' }]
  ]
};
