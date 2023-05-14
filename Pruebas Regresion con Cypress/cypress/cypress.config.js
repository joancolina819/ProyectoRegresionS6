const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-visual-regression-resemble-js/dist/plugin');

module.exports = {
  env: {
    screenshotsFolder: './cypress/snapshots/actual',
    trashAssetsBeforeRuns: true,
    video: false,
    failSilently: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      getCompareSnapshotsPlugin(on, config);
    },
  },
};

module.exports = (on, config) => {
  config.env.email = 'j.gonzalezg2@uniandes';
  return config;
};
