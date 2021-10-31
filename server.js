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
      console.log("switch")
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
    });
  };    


//Create Functions
const allEmployees = () => {
  console.log("allEmployee")
  let sql = 'select * from employee';

  db.query(sql, function(err, res) {
    if (err) {
      return err;
    }
    console.table(res);
    mainMenuQuestions();
  });

};

const allEmployeesByDept = () => {
  
  const sql = `select * from employee group by department`;

    db.query(sql, function(err, res) {
    if (err) {
      return err;   
    }
    console.table(res);
    mainMenuQuestions();
  });
};

const allEmployeesByManager = () => {
  const sql = `select * from employee where role_id = 2`;

  db.query(sql, function(err, res) {
    if (err) {
      return err;
    }
    console.table(res);
    mainMenuQuestions(); 
  });
};;

const addEmployee = () => {
  const sql = `INSERT INTO employee VALUES (?)`;

  db.query(sql, function(err, res) {
  if (err) {
    return err;
  }
  console.table(res);
  mainMenuQuestions();
  });
};

const updateEmployeeRole = () => {
    
};

const updateManager = () => {
    
};

const viewAllRoles = () => {
  let sql = 'select title from role';
  db.query(sql, function(err, res) {
    if (err) {
      return err;
    }
    console.table(res);
    mainMenuQuestions();
  });
};

const viewAllDepts = () => {
  let sql = 'select * from department';
  db.query(sql, function(err, res) {
    if (err) {
      return err;
    }
    console.table(res);
    mainMenuQuestions();
  });
};

const addDept = () => {
  inquirer.prompt([
    {
        type: 'input',
        name: 'department',
        message: 'What is the department name?'
    }
])
  .then((answer) => {
    const sql = `INSERT INTO department VALUES (?)`;

    db.query(sql, 
      {
        name: `${answer.department}`
      }
    )

  });

  if (err) {
    return err;
  }
  console.table(res);
  mainMenuQuestions();
};


const quit = () => {
    
};

mainMenuQuestions();