const promgram = require("commander");
const figlet = require("figlet");
module.exports = async (name) => {
  console.log(figlet.textSync("Test Cli... => " + name));
};
