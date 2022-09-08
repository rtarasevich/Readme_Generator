//Creates Badge with link for license
const renderLicenseBadge = (license) => {
  const badges = {
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    isc: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    gnuplv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  }
  return badges[license]
}

//returns badge for license
function renderLicenseSection(license) {
  if (license === "mit" || license === "isc" || license === "gnuplv3") {
    let badge = renderLicenseBadge(license)
    return ` ${badge} `
  } else return

  ;("")
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  const {title, license, description, usage, installation,contributors, tests,email, github} = answers
  let renderedLicense = renderLicenseSection(license)
  return `

  # ${title}
  
  ${renderedLicense}

  ## Table of Contents
  - [Project description](#Description)
  - [Useage](#Usage)
  - [Installation](#Installation)
  - [Contributors](#Contributors)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${description}

  ## Usage
  ${usage}

  ## Installation
  ${installation}

  ## Contributors
  ${contributors}

  ## Tests
  ${tests}

  ## Questions
  If you have questions about this project, please contact developer at:
  - ${email} 
  - [GitHub](https://github.com/${github})

  ## License
  ${renderedLicense}


`
}

module.exports = generateMarkdown
