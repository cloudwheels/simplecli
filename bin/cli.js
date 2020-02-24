#!/usr/bin/env node

var commander = require("commander");

commander
    .version("1.0.0", "-v, --version")
    .description("simple CLI https://github.com/cloudwheels/simplecli");
commander
    .command("load")
    .alias("l")
    .description("")
    .action(function () {
    console.log("CLI will load something now...");
});
commander.parse(process.argv);
