#! /usr/bin/env node
const utils = require("./utils.js");
const usage = "\nUsage: vsp <parameter> to use vue starter pack";

const yargs = require("yargs");

const options = yargs
  .usage(usage)
  .options({
    r: {
      alias: "repository",
      describe: "Clone a repository",
      type: "boolean",
      demandOption: false,
    },
    s: {
      alias: "start",
      describe: "Start a new project",
      type: "boolean",
      demandOption: false,
    },
  })
  .help(true).argv;

// console.log(yargs.argv);
if (yargs.argv.l == true || yargs.argv.languages == true) {
  utils.showAll();
  return;
}

if (yargs.argv.s == true || yargs.argv.start == true) {
  if(yargs.argv._[0] == undefined){
    console.error("Please specify a project name");
    return;
  };
  return utils.startProject(yargs.argv._[0]);
}

if (yargs.argv.r == true || yargs.argv.repository == true) {
  utils.showRepo();
  return;
}

if (yargs.argv._[0] == null) {
  utils.showHelp();
  return;
}

var sentence = "";

//parsing parameter entered.
sentence = utils.parseSentence(yargs.argv._);

if (sentence == "") {
  console.error("vsp error :\n");
  console.log("Kindly use the -h option to get all commands accepted.\n");
  return;
}
