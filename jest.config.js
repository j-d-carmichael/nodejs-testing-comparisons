const ignore = [
  '/node_modules/',
];

// eslint-disable-next-line no-undef
module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.jest.ts'],
  transformIgnorePatterns: ignore,
  testPathIgnorePatterns: ignore,
  modulePathIgnorePatterns: ignore,
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [
    './jest.setup.js',
  ]
};
