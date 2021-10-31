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
        "View All Employees by Department",
        "View All Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
        "Add Role",
        "Remove Role",
        "View All Departments",
        "Add Department",
        "Remove Department",
        "View Total Utilized Budget By Department",
        "Quit",
      ],
    }
  ])
    .then((answer) => {
      switch (answer) {
        case "View All Employees":
          allEmployees();
          break;
        case "View All Employees by Department":
          allEmployeesByDept();
          break;
        case "View All Employees by Manager":
          allEmployeesByManager();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Remove Employee":
          removeEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Update Employee Manager":
          updateManager();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "View All Departments":
          viewAllDepts();
          break;
        case "Add Department":
          addDept();
          break;
        case "Remove Department":
          removeDept();
          break;
        case "View Total Utilized Budget By Department":
          viewBudget();
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
  createConnection.query(query, function(err, res) {
    if (err) {
      res.status(400)
    }
    console.table(res);
    mainMenuQuestions();
  })

}

const allEmployeesByDept = () => {
  
  const sql = `select * 
              from employee 
              group by department`;
  
    if (err) {
      res.status(500)   
    }
    console.table(res);
    mainMenuQuestions();
}

const allEmployeesByManager = () => {
  const sql = `select * 
              from employee
              where role_id = 2`;
  
    if (err) {
      res.status(500)
    }
    console.table(res);
    mainMenuQuestions();
   
}

const addEmployee = () => {
  const sql = `INSERT INTO movies (movie_name)
  VALUES (?)`;
const params = [body.movie_name];

db.query(sql, params, (err, result) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  });
}



const removeEmployee = () => {
    
}

const updateEmployeeRole = () => {
    
}

const updateManager = () => {
    
}

const viewAllRoles = () => {
    
}

const viewAllDepts = () => {
    
}

const addDept = () => {
  const sql = `INSERT INTO movies (movie_name)
  VALUES (?)`;
const params = [body.movie_name];

db.query(sql, params, (err, result) => {
  if (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  res.json({
    message: 'success',
    data: body
  });
});
}

const removeDept = () => {
    
}

const viewBudget = () => {
    
}

const quit = () => {
    
}