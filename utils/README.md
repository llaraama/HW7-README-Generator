function generateMarkdown(answers) {
  return `# ${answers.title}

  ## User Info
  Username:${answers.username}
  User Email:${answers.email}


  ## Table of Contents:
  *[User Info](#UserInfo)
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


`;
}