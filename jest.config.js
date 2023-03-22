// jest.config.js
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    moduleNameMapper: {
      '@organism/(.*)': '<rootDir>/src/app/components/organism/$1',
      '@molecules/(.*)': '<rootDir>/src/app/components/molecules/$1',
      '@atoms/(.*)': '<rootDir>/src/app/components/atoms/$1',
      '@services/(.*)': '<rootDir>/src/app/shared/services/$1',
      '@models/(.*)': '<rootDir>/src/app/shared/models/$1',
      '@environment/(.*)': '<rootDir>/src/environments/$1'
 }
  };