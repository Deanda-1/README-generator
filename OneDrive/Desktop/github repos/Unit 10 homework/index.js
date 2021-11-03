const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your team manager\'s name?',
      name: 'managerName',
    },
    {
      type: 'input',
      message: 'What is your team manager\'s id?',
      name: 'managerId',
    },
    {
      type: 'input',
      message: 'WHat is your team manager\'s email address',
      name: 'managerEmailAddress',
    },
    {
        type: 'input',
        message: 'WHat is your team manager\'s office number',
        name: 'managerOfficeNumber',
    },
    {
        type: 'list',
        message:'What would you like to do next',    
        name:'doNext',
        choices:['Add an enigineer',
                 'Add an intern',
                 'finish building my team',
    ],          
    }
  .then((response) =>{

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team intern\'s name?',
            name: 'internName',
          },
          {
            type: 'input',
            message: 'What is your team intern\'s id?',
            name: 'internId',
          },
          {
            type: 'input',
            message: 'WHat is your team intern\'s email address',
            name: 'internEmailAddress',
          },
          {
              type: 'input',
              message: 'WHat is your team intern\'s office number',
              name: 'internOfficeNumber',
            },
              {
              type: 'list',
              message:'What would you like to do next',    
              name:'doNext',
              choices:['Add an enigineer',
                       'Add an intern',
                       'Add an employee',
                       'finish building my team', 
    ]}
   .then((response) =>{

    inquirer.prompt([
      {
          type: 'input',
          message: 'What is your team employee\'s name?',
          name: 'employeeName',
        },
        {
          type: 'input',
          message: 'What is your team employee\'s id?',
          name: 'employeeId',
        },
        {
          type: 'input',
          message: 'WHat is your team employee\'s email address',
          name: 'employeeEmailAddress',
        },
        {
            type: 'input',
            message: 'WHat is your team employee\'s office number',
            name: 'employeeOfficeNumber',
          },
            {
            type: 'list',
            message:'What would you like to do next',    
            name:'doNext',
            choices:['Add an enigineer',
                     'Add an intern',
                     'Add an employee',
                     'Add an manager',
                     'Finish buidling my team', 
  ]}

.then((response) => {
  response.confirm === response;
  console.log('Success!');
})