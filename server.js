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
        "Remove Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Remove Department",
        "View Total Utilized Budget By Department",
        "View All Employees by Department",
        "View All Employees by Manager",
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
        case "Add Role":
          addRole();
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
        case "View All Employees by Department":
          allEmployeesByDept();
          break;
        case "View All Employees by Manager":
          allEmployeesByManager();
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
  let sql = 'select department_name from department';
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

//bonus

function allEmployeesByManager() {

}

function allEmployeesByDept() {

}

function removeDept() {
  db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
}

function viewBudget() {

}
function removeEmployee () {
  db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
}

function quit() {
    connection.end()
};

mainMenuQuestions();