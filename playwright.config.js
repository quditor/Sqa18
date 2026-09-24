// @ts-check
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 50 * 1000, // Total test timeout
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
    navigationTimeout: 60 * 1000, // Explicitly give page.goto extra breathing room
  }
  
});

module.exports = config;