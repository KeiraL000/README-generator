// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
        },
        {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'How do you use your program?',
        },
        {
        type: 'input',
        name: 'license',
        message: 'Enter your GitHub Username',
        },
        {
        type: 'input',
        name: 'contributes',
        message: 'Who contributed to this project?',
        },
        {
        type: 'input',
        name: 'tests',
        message: 'Anything to know for testing?'
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        },

        
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
