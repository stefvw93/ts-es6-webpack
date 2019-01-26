const { execSync } = require("child_process");
const colors = require("colors/safe");
const projectConfig = require("../project.config");
const { keys, paths } = projectConfig;

const webpackCommand = [
  // clean output dir
  `rm -rf ${paths.compiled};`,
  // start webpack dev server with config and show error details
  "webpack-dev-server",
  `--config ${paths.webpack}/webpack.development`,
  "--display-error-details"
].join(" ");

// remind to start tsc -w
console.log(
  `${colors.green.bold("Reminder!")} Remember to run \`${colors.bold(
    "tsc -w"
  )}\`.`
);

// webpack dev server
execSync(webpackCommand, { stdio: "inherit" });
