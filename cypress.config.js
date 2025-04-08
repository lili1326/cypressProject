const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '58ohqy',
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});