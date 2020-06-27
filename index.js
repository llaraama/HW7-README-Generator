
const fs = require("fs");
const axios =require("axios");
const inquirer = require("inquirer");
const util= require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
// const questions = [
    
const writeFileSync=util.promisify(fs.writeFile);

// ];
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
        "MIT", 
        "CSS", 
        "JavaScript", 
        "MySQL"
      ]
    }
    

 
]);
}
//     // after getting data from User, Make API Call
// })

// var fileName=data.name.toLowerCase()+".md"



// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, data, function(err, data) {
//         if(err) {
//             console.log(err);
//         }
//         console.log(data);
//     });
// });

// function to initialize program
async function init() {
    try{
        const answers= await promptQuestions();

        const { username }=await inquirer.prompt({
            
                type: "input",
                name: "username",
                message: "What is your GitHub username ?"
              
        });
        // const { datas }= await axios.get(
        //     `https://api.github.com/users/${username}` 
        // );
        // console.log(datas)

        // const readmeCreation=generateMarkdown();

        await writeFileSync('./utils/README.md',generateMarkdown);

       

    }catch(err){
        console.log(err);
    }

}

// function call to initialize program
init();
