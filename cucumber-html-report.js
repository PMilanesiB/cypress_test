const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "107.0.5304.107",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});
