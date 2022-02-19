// TODO: Create a function that returns a license badge based on which license is passed in
const generateBadgePrefix = (licenseString) => {
  switch (licenseString) {
    case "MIT":
      return "License: MIT";
    case "Apache-2.0":
      return "License";
    case "GPL-3.0":
      return "License: GPL v3";
    case "BSD-2-Clause":
      return "License";
    case "BSD-3-Clause":
      return "License";
    default:
      return '';
  }
};

const generateBadgeLink = (licenseString) => {
  switch (licenseString) {
    case "MIT":
      return "License-MIT-yellow";
    case "Apache-2.0":
      return "License-Apache_2.0-blue";
    case "GPL-3.0":
      return "License-GPLv3-blue";
    case "BSD-2-Clause":
      return "License-BSD_2--Clause-orange";
    case "BSD-3-Clause":
      return "License-BSD_3--Clause-blue";
    default:
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache-2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL-3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD-2-Clause":
      return "https://opensource.org/licenses/BSD-2-Clause";
    case "BSD-3-Clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `
  ## Licensing 
  Licensed under
  [${license}](${renderLicenseLink(license)})
  `
}

function generateContact (object) {
  let string = `##### Contact Me\n`;
  let {Email, Phone, Twitter} = object;
  console.log(Email, Phone, Twitter);
  if (Email) {
    string += `- Email [${Email}](mailto:${Email})\n`;
  }
  if (Phone) {
    string += `- Phone [${Phone}](tel:${Phone})\n`
  }
  if (Twitter) {
    string += `- Twitter [${Twitter}](twitter.com/${Twitter})\n`
  }
  return string;
}

module.exports = (questionsData, socialObject) => {
  let {
    title,
    license,
    description,
    installation,
    usage,
    tests,
    contributing,
    username,
  } = questionsData;
  return `
  # ${title}

  ![${generateBadgePrefix(
    license
  )}](https://img.shields.io/badge/${generateBadgeLink(license)}.svg)

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#licensing)

  ## Installation
  ${installation}
  
  ## Usage
  ${usage}

  ## Tests
  ${tests}

  ## Contributing
  ${contributing}

  ${renderLicenseSection(license)}

  ## Questions
  Please find me through a method below for any questions or comments
  [GitHub](https://github.com/${username})
  ${generateContact(socialObject)}
  `;
};
