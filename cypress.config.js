const { defineConfig } = require("cypress");
require('dotenv').config(); // Use dotenv to load environment variables

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  env: { ...process.env }, // Spread process.env to include all environment variables
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      config.viewportWidth = 1920;
      config.viewportHeight = 1080;

      // Initialize Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      
      return config; // Return the modified config object
    },
  },
});