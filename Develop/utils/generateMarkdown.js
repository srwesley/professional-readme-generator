 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Mozilla") {
    return `[MPL 2.0 License Badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  } else if (license === "Apache") {
    return `[Apache License Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "Zlib") {
    return `[Zlib License Badge](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`;
  } else {
    return ``;
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Apache") {
    return `[Apache](https://opensource.org/licenses/Apache=2.0)`;
  } else if (license === "Zlib") {
    return `[Zlib](https://opensource.org/licenses/Zlib)`;
  } else {
    return ``;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `;
  } else {
    "None";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
