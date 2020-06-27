// function to generate markdown or README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents:
  *[Description](#Description)
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Contributing](#Contributing)
  *[Tests](#Tests)
  *[Questions](#Questions)

  
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
  ##Questions:
  GitHub Username:${answers.username}
  User Email:${answers.email}



`;
}

module.exports = generateMarkdown;
