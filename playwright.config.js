// @ts-check
import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();


/**
  * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
   timeout: 60 * 1000,
   expect: {
    timeout: 5000
  },

  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true,
  }
 
});

module.exports = config;
