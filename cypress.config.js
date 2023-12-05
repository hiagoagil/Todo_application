const cucumber = require ('cypress-cucumber-preprocessor').default
  const { defineConfig } = require("cypress");

  module.exports = defineConfig({
      e2e: {
      specPattern: "cypress/e2e/step_definitions/*.feature",
      setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber())
      },
      baseUrl: 'https://todomvc.com/'
    },
  });