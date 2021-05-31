exports.questionBank = [
    {
      type: "input",
      name: "name",
      message: "Enter project name: ",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a licence type: ",
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
      message: "Write project description: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Write installation instructions: ",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter project usage information: ",
    },
    {
      type: "input",
      name: "contributions",
      message: "Enter project contribution guidelines: ",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter project test instructions: ",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address: ",
    },
    {
      type: "input",
      name: "questions",
      message: "Enter your github username as contact information: ",
    },
  ];