// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What do you want name your README file?",
        name: "fileName"

    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your project about?",
        name: "description"
    },
    {
        type: "input",
        message: "What is the instructions to install?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is this for?",
        name: "usage"
    },
    {
        type: "list",
        message: "What is this project licensed under?",
        name: "license",
        choices: ['MIT', 'ISC', 'ODC'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: "input",
        message: "Any contribution?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Any tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(response => {
           const md = markdown.generateMarkdown(response);
           writeToFile(`${response.fileName}.md`, md, function(err) {
            if (err){
                console.log('Could not save file', err)
            } else {
                console.log('Success: new README file generated')
            }
           })
        }) 
    .catch((error) => {
        console.error(error)
    })
}

// Function call to initialize app
init();
