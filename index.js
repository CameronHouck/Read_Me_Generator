const inquirer = require("inquirer");
const fs = require("fs");
const questionBank = require("./utils/questionBank.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeToFile = (userInput) => {
  fs.writeFile("README.md", userInput, (error) =>
    error ? console.log("Error!") : console.log("Success!")
  );
};

const promptUser = () => {
  return inquirer.prompt(questionBank.questionBank);
};

const init = () => {
  promptUser().then((userInput) => {
    const markdown = generateMarkdown.generateMarkdown(userInput);
    writeToFile(markdown);
  });
};

init();
