const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

/**  array of questions for user input to generate readme */
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Add a description of your project",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this application?",
  },

  {
    type: "input",
    name: "installation",
    message: "How do you install this application?",
  },

  {
    type: "input",
    name: "contributors",
    message: "Please list your contributors",
  },
  // licenses with badges
  {
    type: "list",
    name: "license",
    message: "license",
    choices: ["MIT", "ISC", "GNUPLv3"],
    filter(val) {
      return val.toLowerCase()
    },
  },
  {
    type: "input",
    name: "tests",
    message: "add tests",
  },
  {
    type: "input",
    name: "github",
    message: "enter you github username",
    filter(val) {
      return val.toLowerCase()
    },
  },

  {
    type: "input",
    name: "email",
    message: "enter your email",
    filter(val) {
      return val.toLowerCase()
    },
  },
]
/** Writes README file to output folder */
function writeToFile(fileName, data) {
  if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
  }
  fs.writeFileSync(`./output/${fileName}`, data, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log("Commit logged!")
  )
}
/** async function to ask questions, generate markdown, and save to output folder for readme */
async function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      const results = generateMarkdown(answers)
      writeToFile("README.md", results)
    })
    .catch((error) => {
      console.log(error)
    })
}

// Function call to initate application

init()
