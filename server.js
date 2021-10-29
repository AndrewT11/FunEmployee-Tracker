const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Create connection to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// Function calling inquirer prompt for main menu questions
const mainMenuPrompt = function() {
    inquirer.prompt([
        {
            name: "mainMenu",
            type: 'list',
            message: 'Please select from the following:',
            choices: [
                
                'View All Employees',
                'View All Employees by Department',
                'View All Employees by Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'View All Roles',
                'Add Role',
                'Remove Role',
                'View All Departments',
                'Add Department',
                'Remove Department',
                'View Total Utilized Budget By Department',
                'Quit',
            ]
        }
        .then(function(answers) {
// case 'name of quest', function to call what to do with information given, and break if that question is called
            switch(answers) {
                case 'View All Employees':
                    //function;
                    break;
                case 'View All Employees by Department':
                    //function;
                    break;
                case 'View All Employees by Manager':
                    //function;
                    break;
                case 'Add Employee':
                    //function;
                    break;
                case 'Remove Employee':
                    //function;
                    break;
                case 'Update Employee Role':
                    //function;
                    break;
                case 'Update Employee Manager':
                    //function;
                    break;
                case 'View All Roles':
                    //function;
                    break;
                case 'View All Departments':
                    //function;
                    break;
                case 'Add Department':
                    //function;
                    break;
                case 'Remove Department':
                    //function;
                    break;
                case 'View Total Utilized Budget By Department':
                    //function
                    break;
                 case 'Quit':
                    //function
                    break;
            }
        })
    ])
}

//Create Functions