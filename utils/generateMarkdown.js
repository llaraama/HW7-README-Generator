// function to generate markdown or README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description: 
      ${answers.description}

  ## Table of Contents:
  *[User Info]
  *[Installation](#Installation)
  *[Usage]
  *[License]
  *[Contributing]
  *[Tests]
  *[Questions]


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


`;
}

module.exports = generateMarkdown;
