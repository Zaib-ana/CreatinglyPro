const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://stg.platform.creatingly.com',
    chromeWebSecurity: false,
    pageLoadTimeout: 180000,
    defaultCommandTimeout: 60000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // Optional: implement node events if needed
    },
    retries: {
      runMode: 2,
      openMode: 1
    }
  },
});