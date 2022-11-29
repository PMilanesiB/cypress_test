const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");




async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );


  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    responseTimeout: 150000,
    baseUrl: "https://virtserver.swaggerhub.com/atlantics/plateFinderQueue/1.0.0",
    chromeWebSecurity: false,
    stepDefinitions: [
      "[filepath]/**/*.{js,ts}",
      "[filepath].{js,ts}",
      "cypress/e2e/step_definitions/*.{js,ts}"
    ],

    env: {
      allureReuseAfterSpec: true,
    },

    db_review_session_user: {
      userName: "review_session_user",
      password: "Abcd1234",
      server: "vulcan.cluster-chnagabi09rw.sa-east-1.rds.amazonaws.com",
      port: "14444",
      //options: {
      //  database: "review_session",
      //encrypt: true,
      //rowCollectionOnRequestCompletion: true
    },
  },

  "db plate_finder_transaction": {
    userName: "plate_finder_user",
    password: "FinderPlateTRX2022!",
    server: "vulcan.cluster-chnagabi09rw.sa-east-1.rds.amazonaws.com",
    port: "14444",

  },
})

