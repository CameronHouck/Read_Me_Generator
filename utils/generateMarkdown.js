const renderLicenseBadge = (license) => {
  let licenseMarkdownText;
  switch (license) {
    case "MIT License":
      licenseMarkdownText =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GNU General Public License v3.0":
      licenseMarkdownText =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Apache License 2.0":
      licenseMarkdownText =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "None":
      licenseMarkdownText = "";
      break;
  }
  return licenseMarkdownText;
};

const renderLicenseLink = (license) => {
  let licenseLinkURL;
  switch (license) {
    case "MIT License":
      licenseLinkURL = "https://opensource.org/licenses/MIT";
      break;
    case "GNU General Public License v3.0":
      licenseLinkURL = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "Apache License 2.0":
      licenseLinkURL = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "None":
      licenseLinkURL = "";
      break;
  }
  return licenseLinkURL;
};
