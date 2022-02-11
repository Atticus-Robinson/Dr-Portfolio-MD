/*
// TODO: Create a function that returns a license badge based on which license is passed in
const generateBadge = (questionsData) => {
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

*/
module.exports = (questionsData) => {
  console.log(questionsData);
  let {title, description, installation, usage, tests, contributing, username} = questionsData;
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  - [Installtion](#installtion)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#lisence)

  ## Installation
  ${installation}
  
  ## Usage
  ${usage}

  ## Tests
  ${tests}

  ## Contributing
  ${contributing}

  ## Questions
  [GitHub](https://github.com/${username})
  `;
};

//module.exports = generateMarkdown;
