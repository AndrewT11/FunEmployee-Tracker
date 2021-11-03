//bonus

// function allEmployeesByManager() {

// }

// function allEmployeesByDept() {
//   let sql = 'SELECT d.department_name AS Department, e.first_name, e.last_name FROM employee e JOIN role r ON e.role_id = r.id JOIN department d ON d.id = r.department_id';
//   db.query(sql, function(err, res) {
//     if (err) {
//       console.log(err);
//       return err;
//     }
//     console.table(res);
//     mainMenuQuestions();
//   });

// }

// function removeDept() {
//   db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });
// }

// function viewBudget() {

// }
// function removeEmployee () {
//   db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });
// }

function updateManager() {
    inquirer.prompt ([
      
    ])
  };

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
case "Remove Employee":
    removeEmployee();
    break;
    case "Update Employee Manager":
        updateManager();
        break;


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