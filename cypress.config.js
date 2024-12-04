const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      config.viewportWidth = 1920;
      config.viewportHeight = 1080;
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});
