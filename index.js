// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
  .prompt ([
   
       {
         type: 'input',
         message: 'what is the title?',
         name: 'title',
       },
       {
         type: 'Github',
         message: 'what is your GitHub Username?',
         name: 'Github',
       },
       {
         type: 'description',
         message: 'Can you give a description of yourself?',
         name: 'description',
       },
       {
         type: 'installation instructions',
         message: 'How do you preform your installation instructions?',
         name: 'installation',
       },
       {
         type: 'usage information',
         message: 'what is your usage information?',
         name: 'usage',
       },
       {
         type: 'contribution guidelines',
         message: 'what is your contribution guidelines?',
         name: 'contribution',
       },
       {
         type: 'test instructions',
         message: 'what is your test instructions?',
         name: 'test',
       },
       {
        type: 'email',
        message: 'what is your email?',
        name: 'email',
      },
       {
         name: 'license',
        type: 'license',
        message: 'what licenes do you use?',
         choices:['Apache 2.0 License [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                 'Boost [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
                 'Open Data Commons [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)']
       },
])
.then((answers) => {
  console.log(answers)
  var markdownTemplate = generateMarkdown(answers);
  console.log(markdownTemplate);
  fs.writeFile(`README.md`, markdownTemplate, function (err) {
      if(err){
          console.log(err);
      }else {
          console.log('successful');
      }
  })
});
