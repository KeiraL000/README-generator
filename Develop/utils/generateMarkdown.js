// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `## License ![Github license](https://img.shields.io/badge/license-${license}-yellow.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributes](#contributes)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributes
  ${data.contributing}
  ## Testing
  ${data.testing}
  ## Questions
  If you have any questions, you can reach me on my github, or email.
  Github: [@${data.github}](www.github.com/${data.github})
  Email: ${data.email}`;
}


module.exports = generateMarkdown;
