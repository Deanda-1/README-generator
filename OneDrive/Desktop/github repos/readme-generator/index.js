// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba');
// TODO: Create an array of questions for user input
const questions = [
    {
        title: 'name',
        message: 'What name do you prefer?',
        name: 'name',
      },
      {
        title: 'location',
        message: 'What is your current location',
        name: 'location',
      },
      {
        title: 'fun',
        message: 'What do you like to do for fun?',
        name: 'fun',
      },
      {
        title: 'food',
        message: 'What kind of foods you like to eat?',
        name: 'food',
      },
      {
        title: 'input',
        message: 'what is your GitHub Username',
        name: 'Github',
      },
      {
        title: 'input',
        message: 'what is your LinkedIn URL',
        name: 'URL',
      },
      {
        title: 'description',
        message: 'Can you give a description of yourself?',
        name: 'description',
      },
      {
        title: 'installation instructions',
        message: 'How do you preform your installation instructions',
        name: 'installation instructions',
      },
      {
        title: 'usage information',
        message: 'what is your usage information',
        name: 'usage information',
      },
      {
        title: 'contribution guidelines',
        message: 'what is your contribution guidelines',
        name: 'contribution guidelines',
      },
      {
        title: 'test instructions',
        message: 'what is your test instructions',
        name: 'test',
      },
      {
        title: 'checkbox',
        message: 'what is the best way to contact you',
        choices: ['email',
                 'phone',
                 'text',
                 'facebook',
                 'LinkedIn',
                 'twitter']          
      },
      {
        title: 'checkbox',
        message: 'what licenes do you use?',
        choices:['Apache 2.0 License [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                 'Boost [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
                 'Open Data Commons [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
