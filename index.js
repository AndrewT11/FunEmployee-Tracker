const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const chalk = require('chalk');


//Create connection to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);

// Welcome
hello();
function hello() {
  console.log(chalk.blue(`          Welcome to the`));
  console.log(chalk.green(`            Super Fun`));
  console.log(chalk.yellowBright(`           FunEmployee`));
  console.log(chalk.magentaBright(`             Tracker`));
  console.log(chalk.greenBright(`               App`));
  console.log(chalk.blueBright(`           !!!!!!!!!!`));
}

// Function calling inquirer prompt for main menu questions
function mainMenuQuestions() {
  inquirer.prompt([
    {
      name: "mainMenu",
      type: "list",
      message: "Please select from the following:",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    }
  ])
    .then((answer) => {
      switch (answer.mainMenu) {
        case "View All Employees":
          allEmployees();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          viewAllDepts();
          break;
        case "Add Department":
          addDept();
          break;
        case "Quit":
          quit();
          break;
        default:
          "Error";
      }
    });
  };    


//Create Functions
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function allEmployees() {
  console.log("allEmployees")
  let sql = 'SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, e.manager_id FROM employee e JOIN role r ON e.role_id = r.id JOIN department d ON d.id = r.department_id'
  db.query(sql, function(err, res) {
    if (err) {
      console.log(err);
      return err;
    }
    console.table(res);
    mainMenuQuestions();
  });

};

const addEmployee = async () => {
  const { firstName, lastName, roleId, managerId } = await inquirer.prompt ([
    {
      name: "firstName",
      type: "input",
      message: "Enter first name"
    },
    {
      name: "lastName",
      type: "input",
      message: "Enter last name"
    },
    {
      name: "roleId",
      type: "list",
      message: "What is the new employee's role id?",
      choices: [
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    {
      name: "managerId",
      type: "list",
      message: "Please select manager id, if any.",
      choices: [
        "2",
        "3",
        "4",
        "5"
      ]
    }
  ])


  let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`;

  parseInt(managerId);
  console.log(managerId);

  let params = [firstName, lastName, roleId, managerId]

  db.query(sql, params, function(err, res) {
  if (err) {
    console.log(err);
    return err;
  }
  console.table(res);
  mainMenuQuestions();
  });
};

const updateEmployeeRole = async () => {
  console.log("updateEmployeeRole")
     const { id, newRoleId } = await inquirer.prompt ([
      {
        name: "id",
        type: "input",
        message: "ID of employee you wish to role update"
      },
      {
        name: 'newRoleId',
        type: 'choices',
        message: "Choose new role ID for employee",
        choices: [
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      }
  ])
 
      let sql = `UPDATE employee SET role_id=(?) WHERE id =(?)`;

      let params = [id, newRoleId]
    
      db.query(sql, function(err, res) {
        if (err) {
          console.log(err);
          return err;
        }
        console.table(res);
        mainMenuQuestions();
      })
    
};

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
  let sql = 'SELECT r.title, e.role_id, d.department_name AS Department, r.salary FROM employee e JOIN role r ON e.role_id = r.id JOIN department d ON d.id = r.department_id GROUP BY d.department_name '
  db.query(sql, function(err, res) {
    if (err) {
      console.log(err);
      return err;
    }
    console.table(res);
    mainMenuQuestions();
  });
};

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewAllDepts() {
  let sql = 'select * from department';
  db.query(sql, function(err, res) {
    if (err) {
      console.log(err);
      return err;
    }
    console.table(res);
    mainMenuQuestions();
  });
};
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addDept() {
  inquirer.prompt([
    {
        type: 'input',
        name: 'department',
        message: 'What is the department name?'
    }
])
  .then((answer) => {
    let sql = `INSERT INTO department (department_name) VALUES ('${answer.department}')`;
    db.query(sql, (err, res) => {
      if (err) {
        console.log(err);
        return err;        
      }
      mainMenuQuestions();
    })
  });
};

function quit() {
    // connection.end()
    process.exit(0)
};

mainMenuQuestions();