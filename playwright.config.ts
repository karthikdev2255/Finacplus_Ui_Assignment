import { defineConfig, devices } from '@playwright/test';

const config = ({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000
  },
  reporter: 'html',
  use: {
    browserName : 'chromium'
  },

});

module.exports = config;