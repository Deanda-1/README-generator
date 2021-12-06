const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const team = []
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your team manager\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your team manager\'s id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'WHat is your team manager\'s email address',
      name: 'email',
    },
    {
      type: 'input',
      message: 'WHat is your team manager\'s office number',
      name: 'officeNumber',
    },
    {
      type: 'list',
      message: 'What would you like to do next',
      name: 'doNext',
      choices: ['Add an engineer',
        'Add an intern',
        'finish building my team',
      ],
    }
  ])
  .then((response) => {
    const { doNext, name, id, email, officeNumber } = response
    const manager = new Manager(name, id, email, officeNumber)
    team.push(manager)
    if (response.doNext === 'Add an intern') {
      buildIntern();
    } else if (response.doNext === 'Add an engineer') {
      buildEngineer();
    } else {
      finish();
    }

  })
function finish() {
  fs.writeFileSync('index.html', generateHTML(team))
  console.log(team)
}
function buildEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your team engineer\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your team engineer\'s id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'WHat is your team engineer\'s email address',
      name: 'email',
    },
    {
      type: 'input',
      message: 'WHat is your team engineer\'s github',
      name: 'github',
    },
    {
      type: 'list',
      message: 'What would you like to do next',
      name: 'doNext',
      choices: [
        'Add an engineer',
        'Add an intern',
        'Finish buidling my team',
      ]
    }
  ]).then((response) => {
    const { doNext, name, id, email, github } = response
    console.log(response)
    const engineer = new Engineer(name, id, email, github)
    team.push(engineer)
    if (response.doNext === 'Add an intern') {
      buildIntern();
    } else if (response.doNext === 'Add an engineer') {
      buildEngineer();
    } else {
      finish();
    }
  })
}
function buildIntern() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is your team intern\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your team intern\'s id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'WHat is your team intern\'s email address',
      name: 'email',
    },
    {
      type: 'input',
      message: 'WHat is your team intern\'s school',
      name: 'school',
    },
    {
      type: 'list',
      message: 'What would you like to do next',
      name: 'doNext',
      choices: ['Add an engineer',
        'Add an intern',
        'finish building my team',
      ]
    }
  ]).then((response) => {
    const { doNext, name, id, email, school } = response
    const intern = new Intern(name, id, email, school)
    team.push(intern)
    if (response.doNext === 'Add an intern') {
      buildIntern();
    } else if (response.doNext === 'Add an engineer') {
      buildEngineer();
    } else {
      finish();
    }
  })
}

//go through engineer question and make sure they're correct
//go through Intern question and make sure they're correct
//generate the html file
const generateHTML = (team) => {
  const cards = team.map(employee => `
  <div>
    <h1 class="display-4">${employee.getRole()}</h1>
    <p class="lead">I am from ${employee.getName()}.</p>
    <p class="lead">I am from ${employee.getId()}.</p>
    <a href="mailTo:${employee.getEmail()}">${employee.getEmail()}.</a>
    ${employee.officeNumber ? `<p>${employee.officeNumber}</p>` :''}
    ${employee.getSchool ? `<p>${employee.getSchool()}</p>` :''}
    ${employee.getGithub ? `<a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a>` :''}
  </div>
  `)
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    ${cards}
  </div>
</div>
</body>
</html>`;
}
//09-01-28
//do the video
