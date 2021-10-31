const mysql = require("mysql2");
const inquirer = require("inquirer");
const { createConnection } = require("net");
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
  inquirer.prompt([
    {
      name: "mainMenu",
      type: "list",
      message: "Please select from the following:",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    }
  ])
    .then((answer) => {
      switch (answer) {
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
    })
  };    


//Create Functions
const allEmployees = () => {
  console.log("allEmployee")
  let sql = 'select * from employee';

  createConnection.query(sql, function(err, res) {
    if (err) {
      res.status(400)
    }
    console.table(res);
    mainMenuQuestions();
  })

}

const allEmployeesByDept = () => {
  
  const sql = `select * from employee group by department`;

    createConnection.query(sql, function(err, res) {
    if (err) {
      res.status(500)   
    }
    console.table(res);
    mainMenuQuestions();
  })
}

const allEmployeesByManager = () => {
  const sql = `select * from employee where role_id = 2`;

  createConnection.query(sql, function(err, res) {
    if (err) {
      res.status(500)
    }
    console.table(res);
    mainMenuQuestions(); 
  })
}

const addEmployee = () => {
  const sql = `INSERT INTO employee VALUES (?)`;

  createConnection.query(sql, function(err, res) {
  if (err) {
    res.status(400)
  }
  console.table(res);
  mainMenuQuestions();
  });
}

const updateEmployeeRole = () => {
    
}

const updateManager = () => {
    
}

const viewAllRoles = () => {
  let sql = 'select title from role';
  createConnection.query(sql, function(err, res) {
    if (err) {
      res.status(400)
    }
    console.table(res);
    mainMenuQuestions();
  })
}

const viewAllDepts = () => {
  let sql = 'select * from department';
  createConnection.query(sql, function(err, res) {
    if (err) {
      res.status(400)
    }
    console.table(res);
    mainMenuQuestions();
  })
}

const addDept = () => {
  const sql = `INSERT INTO department VALUES (?)`;

  if (err) {
    res.status(400);
  }
  console.table(res);
  mainMenuQuestions();
}


const quit = () => {
    
}

mainMenuQuestions();