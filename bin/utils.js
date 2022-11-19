const clc = require("cli-color");
const loader = require("loader-in-console");
const chalk = require("chalk");
const log = require("log-beautify");
const repo = "https://github.com/WillElvire/vue-starter-pack.git";
const shell = require("shelljs");
const usage = chalk.hex("#83aaff")(
  "\nUsage: vsp <params> to use vue starter pack"
);

module.exports = {
  showAll,
  showHelp,
  parseSentence,
  showRepo,
  startProject,
};

function showRepo() {
  loader.Loader.startDotLine(200, "Fetching the repository");
  setTimeout(() => {
    console.log("\n");
    console.log("Git repository: " + clc.green.underline(repo));
    loader.Loader.stop();
  }, 3000);
}

function showAll() {
  console.log(chalk.magenta.bold("\nLanguage Name\t\tISO-639-1 Code\n"));
  for (let [key, value] of languages) {
    console.log(key + "\t\t" + value + "\n");
  }
}

function showHelp() {
  console.log(usage);
  console.log("\nOptions:\r");
  console.log(
    "\t--version\t      " + "Show version number." + "\t\t" + "[boolean]\r"
  );
  console.log(
    "    -r, --repository\t" +
      "      " +
      "Clone a repository." +
      "\t\t" +
      "[boolean]\r"
  );
  console.log(
    "    -s, --start\t" +
      "      " +
      "create a project." +
      "\t\t" +
      "[boolean]\r"
  );
  console.log("\t--help\t\t      " + "Show help." + "\t\t\t" + "[boolean]\n");
}

function startProject(projectName) {
  console.log(chalk.black.bgYellow("VUE STARTER PACK : STARTING PROJECT"));
  log.info("command run : vsp -s(--start) " + projectName);
  log.success("Creating  project: " + chalk.green.bold(projectName));

  loader.Loader.startDotLine(200, "Cloning the repository");
  var cloning = shell.exec("git clone " + repo + " " + projectName);

  if (cloning.code == 0) {
    console.log("\n");
    log.ok("Project cloned successfully");
    log.info("vsp project created as : " + chalk.green.bold(projectName));
    console.log("\n");
  }

  if (cloning.code !== 0) {
    log.error("Error: vsp project creation failed");
    shell.exit(1);
  }

  loader.Loader.stop();
}

function parseSentence(words) {
  var sentence = "";
  for (var i = 1; i < words.length; i++) {
    sentence = sentence + words[i] + " ";
  }
  return sentence;
}
