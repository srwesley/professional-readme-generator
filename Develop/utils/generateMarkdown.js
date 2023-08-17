 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub License](https://img.shields.io/badge/License-_${license}-yellow.svg)`;
  }
  return "";
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

      Licensed under the ${license} license.`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [Contributors](#contributors)
* [Tests](#tests)
${renderLicenseLink(data.license)}
## Installation
${data.installation}
## Usage
${data.usage}
## Questions - Contact
* Name - ${data.name}
* Email - ${data.email}
* GitHub - [${data.username}](https://github.com/${data.username}/)
## Contributors
${data.contributors}
## Tests
\*\*\*
${data.tests}
\*\*\*

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
