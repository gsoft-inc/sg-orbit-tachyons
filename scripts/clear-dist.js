const chalk = require("chalk");
const shell = require("shelljs");

const DIST_PATH = "dist";

shell.rm("-rf", `${DIST_PATH}/*`);
console.log(chalk.green("success"), " tachyons dist folders cleared.");

shell.rm("-rf", `docs/${DIST_PATH}/*`);
console.log(chalk.green("success"), " tachyons docs/dist folder cleared.");
