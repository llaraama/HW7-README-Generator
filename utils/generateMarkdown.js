// function to generate markdown or README
function generateMarkdown(answers) {
  return `
  
  # ${answers.title.toUpperCase()}
  ![badmath](https://img.shields.io/github/languages/top/llaraama/HW7-README-Generator)


  ## Table of Contents:
  * [Description](#Description)

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)

  
  ## Description: 
      ${answers.description}

  ## Installation:
      ${answers.installation}

  ## Usage:
      ${answers.description}

  ## License:
      ${answers.license}

  ## Contributing:
      ${answers.contributors}

  ## Tests:
      ${answers.tests}

  ## Questions:
  User Email:${answers.email}

  GitHub Username:[${answers.username}](https://github.com/${answers.username})



`;
}

module.exports = generateMarkdown;
