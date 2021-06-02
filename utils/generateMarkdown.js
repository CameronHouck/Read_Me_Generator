//lists the badge images created for matching user choice.
const renderLicenseBadge = (license) => {
  let licenseMarkdownWord;
  switch (license) {
    case "GNU General Public License v3.0":
      licenseMarkdownWord =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT License":
      licenseMarkdownWord =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache License 2.0":
      licenseMarkdownWord =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "None":
      licenseMarkdown = "";
      break;
  }
  return licenseMarkdownWord;
};
//license urls to redirect user to licenses webpages and about info.
const renderLicenseLink = (license) => {
  let licenseLinkToURL;
  switch (license) {
    case "GNU General Public License v3.0":
      licenseLinkToURL = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT License":
      licenseLinkToURL = "https://opensource.org/licenses/MIT";
      break;
    case "Apache License 2.0":
      licenseLinkToURL = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "None":
      licenseLinkToURL = "";
      break;
  }
  return licenseLinkToURL;
};
//Asks questions in the order presented.
const generateMarkdown = (data) => {
  const {
    name,
    license,
    description,
    installation,
    contributions,
    usage,
    tests,
    email,
    questions,
  } = data;
//displays licenses name and redirection link according to user input.
  const licenseBadge = renderLicenseBadge(license);
  const licenseLinkToURL = renderLicenseLink(license);
  //Writes down the README including user inputed variables in appropiate locations.
  return `
# Project Name:
  
${name}
  
## License
  
${licenseBadge} : [View License](${licenseLinkToURL})
  
## Table of Contents
  
- [Title](#Project-Name)
- [License](#License)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)
  
## Description
  
${description}
  
## Installation
  
Navigate to the root directory of this repository and run the following commands to install necessary dependencies:
  
${installation}
  
## Usage
  
${usage}
  
## Contributions 
  
${contributions}
  
## Tests 
  
${tests}
  
## Questions 
  
If you have any questions comments or issus please contact: ${email} or visit: [https://github.com/${questions}](https://github.com/${questions})`;
};

module.exports = {
  generateMarkdown: generateMarkdown,
};
