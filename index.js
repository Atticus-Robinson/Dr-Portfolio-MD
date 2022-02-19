// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown.js");
const contactObject = {};

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project called?",
      default: "Untitiled Project",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installtion instuctions: ",
    },
    {
      type: "list",
      name: "license",
      message: "What license will your project use?",
      choices: [
        "MIT",
        "Apache-2.0",
        "GPL-3.0",
        "BSD-2-Clause",
        "BSD-3-Clause",
      ],
      default: "MIT",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage guidelines: ",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions: ",
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contributors: ",
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username: ",
    },
    {
      type: "checkbox",
      name: "contact",
      message: " What contact methods would you like displayed?",
      choices: ["Email", "Phone", "Twitter"],
    },
  ]);
};

function contactFill(someData) {
  return inquirer.prompt([
    {
      type: "input",
      name: "fill",
      message: `Enter your ${someData}`,
    },
  ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fileName = fileName.trim();
  fs.writeFile(fileName, data, (err) => {
    if (err) console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  questions().then(async (data) => {
    //console.log(data);
    if (data.contact[0]) {
      let keyA = data.contact[0];
      let a = await contactFill(keyA);
      contactObject[keyA] = a.fill;
      
      if (data.contact[1]) {
        let keyB = data.contact[1];
        let b = await contactFill(keyB);
        contactObject[keyB] = b.fill;

        if (data.contact[2]) {
          let keyC = data.contact[2];
          let c = await contactFill(keyC);
          contactObject[keyC] = c.fill;
        }
      }
    }
    const templateReturn = generateMd(data, contactObject);
    writeToFile("README.md", templateReturn);
  });
}

// Function call to initialize app
init();
