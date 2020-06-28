
const fs = require("fs");
const inquirer = require("inquirer");
const util= require("util");
const generateMarkdown=require("./utils/generateMarkdown.js")

    
const writeFileAsync=util.promisify(fs.writeFile);

function promptQuestions(){
return inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username ?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address ?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your repository name ?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions ?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this repo ?"
    },
    {
        type: "input",
        name: "contributors",
        message: "What does the user need to know about contributing to the repo  ?"
    },
    {
        type: "input",
        name: "tests",
        message: "what command should be run to run the tests ?"
    },
    {
      type: "checkbox",
      message: "License type ?",
      name: "license",
      choices: [
        'Apache License 2.0', 'GNU LGPLv3', 'GNU AGPLv3', 'MIT License'
      ]
    }
    

 
]);
}



promptQuestions()
  .then(answers=> {
    const readMe = generateMarkdown(answers);

    return writeFileAsync("./utils/README.md", readMe);
  })
  .then(function() {
    console.log("Successfully wrote to readMe.md");
  })
  .catch(err=> {
    console.log(err);
  });
