const mysql = require("mysql2");
const inquirer = require("inquirer");

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
const mainMenuPrompt = function () {
  let mainMenuQuestions = inquirer.prompt([
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
    }])
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

}

const allEmployeesByDept = () => {
    
}

const allEmployeesByManager = () => {
    
}

const addEmployee = () => {
    
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
    
}

const removeDept = () => {
    
}

const viewBudget = () => {
    
}

const quit = () => {
    
}