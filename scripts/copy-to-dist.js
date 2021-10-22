const chalk = require("chalk");
const shell = require("shelljs");

const DIST_PATH = "dist";
const FONTS_PATH = "src/fonts";

shell.cp("-f", "package.json", "README.md", DIST_PATH);

console.log(chalk.green("success"), " files copied to dist folder.");
