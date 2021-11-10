const inquirer = require('inquirer');
const mysql = require('mysql2');
const { type } = require('os');

var db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'poop',
    database: 'employer_db'
  },
  console.log(`Connected to the employer_db database.`)
);

function main () {

inquirer
.prompt([
     {
       type:'list',
       message:'Choose from the options below',
       name:'action',
       choices: [
        'view all departments', 
        {
          type: 'department',
          message: 'what department are you looking for?',
          name: 'department',
          choices: [
            ('Human Resources', {HR}),
            ('Research Development', {RD})
          ] 
        },
         'view all roles', 
         {
          type: 'roles',
          message: 'what role do you want to know about',
          name: 'roles',
          choices: [
            ('title'),
            ('salary'),
            ('id')
          ], 
         },
          'view all employees',
          {
            type: 'employees',
            message: 'what employee are you looking for?',
            name: 'employees',
            choices: [
              ('HR employee', {Bob, Bigfeet}),
              ('HR manager', {Mike, Goatnose}),
              ('RD employee', {George, Badbreath}),
              ('RD manager', {Fred, Forhead})
            ],
          },
           'add a department',
            'add a role',
             'add an employee',
               'update an employee role'
       ]
     },
     
  ])
  .then((answers) => {
    console.log(answers);
    // Use user feedback for... whatever!!
    switch(answers.action) {
      case '':
        break;
      case '':
        break;
      case '':
        break;
      case '':
        break;
      case '':
        break;
      case '':
        break;
      case '':
        break;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });}

  main();