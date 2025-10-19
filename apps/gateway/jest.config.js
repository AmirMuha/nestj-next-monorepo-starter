const { pathsToModuleNameMapper } = require('ts-jest');
const { getTsconfig } = require('get-tsconfig');
const tsconfig = getTsconfig('./tsconfig.json');
const { compilerOptions } = tsconfig.config;
compilerOptions.paths = {
  ...compilerOptions.paths,
  '@repo/typescript-config/*': ['../../packages/typescript-config/*'],
};

module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  collectCoverageFrom: [
    "**/*.(t|j)s"
  ],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
};
