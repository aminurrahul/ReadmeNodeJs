// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
      
        {type: 'input',
        message: 'What is the name of the file?',
        name: 'fileName'},
        
        
        {type: 'input',
        message: 'What is the title of the project?',
        name: 'title'},

        {type: 'input',
        message: 'Describe your project:',
        name: 'description'
        },

        {type: 'input',
        message: 'How do you install your project?',
        name: 'install'
        },

        {type: 'input',
        message: 'How is your project used?',
        name: 'usage'
        },


        {type: 'input',
        message: 'How can people contribute to your project?',
        name: 'contribute'
        },

        {type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github'
        },

        {type: 'input',
        message: 'What is your email address?',
        name: 'email'
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `
      # ${data.title}
      ## Description
      ${data.description}
      ## Table of Contents
      * [Installation](#installation)
      * [Usage](#usage)
      * [Questions](#questions)
      ## Installation
      ${data.install}
      ## Usage
      ${data.usage}
      ## Questions
      * GitHub: [${data.github}](https://github.com/${data.github})
      * Email: 
      [${data.email}](mailto:${data.email})
        `
      
}

// TODO: Create a function to initialize app
function init() {
    questions()
      .then((answers) => writeToFile(fileName(answers), data(answers)))
      fs.writeFile('${filename}', writeToFile, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!'));
  };

// Function call to initialize app
init();
