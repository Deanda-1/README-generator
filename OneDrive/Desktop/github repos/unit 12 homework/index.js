const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
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
        'view all roles', 
        'view all employees',
        'add a department',
            'add a role',
             'add an employee',
        'update an employee role'
       ]
     },
     
  ])
  .then((answers) => {
    //console.log(answers);
    // Use user feedback for... whatever!!
    switch(answers.action) {
      case 'view all departments':
        getDepts();
        break;
      case 'view all roles':
        getRoles();
        break;
      case 'view all employees':
        getEmployees();
        break;
      case 'add a department':
        addDept();
        break;
      case 'add a role':
        addRole();
        break;
      case 'add an employee':
        addEmployee();
        break;
      case 'update an employee role':
        updEmployeeRole();
        break;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function getDepts (){
  db.query("SELECT * from dept", 
      function (err, res){
          if (err) throw err;
          dept = res;
          // debug:
          console.table(dept);
          main();
      }
  )
}

function getRoles (){
  // query the role AND dept tables WHERE department id's match
  db.query("SELECT role.*, dept.name AS dept_name FROM role INNER JOIN dept ON role.dept_id = dept.id",
    function(err, res){
      if (err) throw err;
      roles = res; // store results
      console.table(roles);
      main();
    }
  )
}

function getEmployees (){
  db.query("SELECT * FROM employee",
    function(err,res){
      if (err) throw err;
      employees = res; //store results
      console.table(employees);
      main();
    }
  )
}

function addDept(){
  inquirer.prompt({
    type: "input",
    message: "New Department's Name: ",
    name: "dept_name"
  }).then(function(input){
    // First check our input
    //console.log(input.dept_name);
    // Next construct & query
    db.query("INSERT INTO dept SET ?", {name:input.dept_name},
      function(err,res){
        if (err) throw err; 
        getDepts(); // calling this will display table AND return to main menu.
      }
    )
  })
}

function addRole(){
  inquirer.prompt([{
    type: "input",
    message: "New Role Title:",
    name: "role_title"
  },{
    type: "input",
    message: "Salary:",
    name: "salary"
  },
  {
    type: "input",
    message: "Department ID:",
    name: "dept_id"
  }]).then(function(input){
    // First check our input
    //console.log(input.dept_name);
    // Next construct & query
    db.query("INSERT INTO role SET ?", {
      role_title: input.role_title,
      salary: input.salary,
      dept_id: input.dept_id
    },
      function(err,res){
        if (err) throw err; 
        getDepts(); // calling this will display table AND return to main menu.
      }
    )
  })
}

const addEmployee= async() => {
  inquirer.prompt([{
    type: "input",
    message: "Employee's First Name:",
    name: "first_name"
  },
  {
      type: "input",
      message: "Last Name:",
      name: "last_name"
  }]).then(function(answer){
    db.query("SELECT * FROM role",
      function(err,res){
        if (err) throw err;
        roles = res;
        var role_id = [];
        var role_list = [];
        for (j=0;j<res.length;j++) {
          role_list.push ( roles[j].role_title + " ( $" +  roles[j].salary + " )");
          role_id[roles[j].id] = roles[j].role_title + " ( $" +  roles[j].salary + " )";
        }
        inquirer.prompt({
          type: "list",
          message: "Select Role & Salary:",
          name: "rolename",
          choices: role_list
        }).then(function(role_ans){
          role_id = role_id.indexOf(role_ans.rolename);
          db.query("SELECT * FROM employee",
            function(err,res){
              if (err) throw err;
              employees = res; //store results
              let employee_list = []; // employee_list is for the inquirer prompt
              let employee_id = []; // employee_id is for retrieving the employee ID number after prompt
              for (i=0; i< employees.length; i++){  // iterating through the employees to redefine indexes
                // employee_list is for the inquirer prompt
                employee_list.push ( employees[i].first_name + " " +  employees[i].last_name );

                // employee_id is for retrieving the employee ID number after prompt
                employee_id[employees[i].id] = employees[i].first_name + " " +  employees[i].last_name;
              }
              employee_list.push ("NULL"); // allowing a null employee instead of amanager

              inquirer.prompt({
                type: "list",
                name:"employee",
                message: 'Select Manager:',
                choices: employee_list
              }).then(function(emp_ans){
                // console.log(employee_id.indexOf(emp_ans.employee));
                if (emp_ans.employee != "NULL") { // the employee is not equal to manager
                  emp_id = employee_id.indexOf(emp_ans.employee);
                } else {
                  emp_id = null; // 
                }
                

                // data collected - next we form the insert query
                db.query("INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?)",
                  [[answer.first_name, answer.last_name, role_id, emp_id]],
                  function(err,res){
                    if (err) throw err;
                    //console.log(res);
                    getEmployees();
                  }
                );

              })
            }
          );
          
        })
      }
    );
  });
}

function updEmployeeRole(){
  // list employees
  db.query("SELECT * FROM employee",
    function(err,res){
      if (err) throw err;
      employees = res; //store results
      let employee_list = []; // employee_list is for the inquirer prompt
      let employee_id = []; // employee_id is for retrieving the employee ID number after prompt
      for (i=0; i< employees.length; i++){  // iterating through the employees to redefine indexes
        // employee_list is for the inquirer prompt
        employee_list.push ( employees[i].first_name + " " +  employees[i].last_name );

        // employee_id is for retrieving the employee ID number after prompt
        employee_id[employees[i].id] = employees[i].first_name + " " +  employees[i].last_name;
      }

      inquirer.prompt({
        type: "list",
        name:"employee",
        message: 'Select Employee:',
        choices: employee_list
      }).then(function(emp_ans){
        // console.log(employee_id.indexOf(emp_ans.employee));
        emp_id = employee_id.indexOf(emp_ans.employee);

        // NEXT we want to determine the new role for employee
        db.query("SELECT * FROM role",
        function(err,res){
          if (err) throw err;
          roles = res;
          let role_id = [];
          let role_list = [];
          for (j=0;j<res.length;j++) { // what would cause ".length" to be underlined
            role_list.push ( roles[j].role_title + " ( $" +  roles[j].salary + " )");
            role_id[roles[j].id] = roles[j].role_title + " ( $" +  roles[j].salary + " )";
          }
          inquirer.prompt({ // this part of the program is showing how to present the data and the relationship with the role
            type: "list",
            message: "Select Role & Salary:",
            name: "rolename",
            choices: role_list
          }).then(function(role_ans){
             // getting rol_id from the printed text
            role_id = role_id.indexOf(role_ans.rolename);
             
            // now that we have emp_id and role_id, we can query.
            db.query("UPDATE employee SET role_id = ? WHERE id = ?", [role_id, emp_id],
              function(err,res){ // is there an other way to change the underline from showing up
                if (err)throw err;
                console.log ("table updated sucessfully");
                getEmployees();
              }
            );
          })

        });

      })
    }
  );
}

main();