import path from 'path';
import { InitialOptions } from '@jest/types/build/Config';

export const config: Partial<InitialOptions> = (module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  setupFiles: [],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)',
    '<rootDir>/tests/**/?(*.)(spec|test).(j|t)s?(x)',
    '<rootDir>/__tests__/**/?(*.)(spec|test).(j|t)s?(x)'
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost:4444',
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/$1',
    'src(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: [
    'h5.ts',
    'web.ts',
    'ts',
    'h5.tsx',
    'web.tsx',
    'tsx',
    'web.js',
    'js',
    'web.jsx',
    'jsx',
    'json',
    'node',
    'mjs'
  ],
  globals: {
    'ts-jest': {
      tsConfig: path.join(process.cwd(), 'tsconfig.test.json')
    }
  }
});
