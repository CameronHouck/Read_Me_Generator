exports.questionBank = [
  {
    type: "input",
    name: "name",
    message: "Enter your project's name: ",
  },
  {
    type: "list",
    name: "license",
    message: "Choose what type of license you want: ",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "None",
    ],
    default: "None",
  },
  {
    type: "input",
    name: "description",
    message: "Give the project a description: ",
  },
  {
    type: "input",
    name: "demo",
    message: "Put demo link if you have one or type None",
  },
  {
    type: "input",
    name: "installation",
    message: "Instructions of how to install: ",
  },
  {
    type: "input",
    name: "contributions",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter project about info: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter testing project instructions: ",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email adress?: ",
  },
  {
    type: "input",
    name: "questions",
    message: "What is your github username so you can be contacted: ",
  },
];
