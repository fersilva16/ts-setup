/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  rootDir: './',
  testPathIgnorePatterns: ['/node_modules/', './dist', './scripts'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)?$',
  moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],
  cacheDirectory: '.jest-cache',
};

module.exports = config;

