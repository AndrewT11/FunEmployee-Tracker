const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");


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

// Function calling inquirer prompt for main menu questions

function mainMenuQuestions() {
  console.log("mainMenuQuestions")
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
      console.log(answer)
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
          addDept();
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
function allEmployees() {
  console.log("allEmployees")
  let sql = 'select * from employee';
  db.query(sql, function(err, res) {
    if (err) {
      console.log(err);
      return err;
    }
    console.table(res);
    mainMenuQuestions();
  });

};

function addEmployee() {
  inquirer.prompt ([

  ])

  let sql = `INSERT INTO employee(first_name, last_name, role_id)`;
  db.query(sql, function(err, res) {
  if (err) {
    console.log(err);
    return err;
  }
  console.table(res);
  mainMenuQuestions();
  });
};

function updateEmployeeRole() {
     inquirer.prompt ([
    
  ])
};

function updateManager() {
  inquirer.prompt ([
    
  ])
};

function viewAllRoles() {
  let sql = 'select title from role';
  db.query(sql, function(err, res) {
    if (err) {
      console.log(err);
      return err;
    }
    console.table(res);
    mainMenuQuestions();
  });
};

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

function addDept() {
  inquirer.prompt([
    {
        type: 'input',
        name: 'department',
        message: 'What is the department name?'
    }
])
  .then((answer) => {
    let sql = `INSERT INTO department VALUES (?)`;
    db.query(sql, { name: answer.department }, (err, res) => {
      if (err) {
        console.log(err);
        return err;        
      }
      console.table(res);
      mainMenuQuestions();
    })
  });
}

function quit() {
    connection.end()
};

mainMenuQuestions();