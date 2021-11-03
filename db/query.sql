-- WHEN I choose to VIEW ALL EMPLOYEES
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT e.id, e.first_name, e.last_name, r.title, d.department_name, r.salary, e.manager_id
FROM employee e
JOIN role r ON e.role_id = r.id
JOIN department d ON d.id = r.department_id


 
--  allEmployeesByDept
SELECT d.department_name AS Department, e.first_name, e.last_name,
FROM employee e
JOIN role r ON e.role_id = r.id
JOIN department d ON d.id = r.department_id



-- WHEN I choose to VIEW ALL ROLES
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
SELECT r.title, e.role_id, d.department_name AS Department, r.salary
FROM employee e JOIN role r ON e.role_id = r.id
JOIN department d ON d.id = r.department_id 
GROUP BY d.department_name

-- WHEN I choose to ADD DEPARTMENT
-- THEN I am prompted to enter the name of the department and that department is added to the database
let sql = `INSERT INTO department (department_name) VALUES ('${answer.department}')`;



-- WHEN I choose to ADD ROLE
-- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

-- WHEN I choose to ADD EMPLOYEE
-- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

INSERT INTO employee (firstName, lastName, role, manager_id) VALUES (?,?,?,?);


(`'${firstName}', '${lastName}', '${role}', '${managerId}'`)


-- WHEN I choose to Update Employee Role
-- THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
UPDATE role 
SET title = `'${newRole}'` 
WHERE id = `'${id}'`;


--  Update employee managers.

-- * View employees by manager.
SELECT 
 e.id, 
 e.first_name, 
 e.last_name, 
 r.title, 
 d.department_name, 
 r.salary, 
 m.manager_id,
 m.first_name,
 m.last_name
 
FROM employee e
JOIN role r
    ON e.role_id = r.id
JOIN department d 
    ON d.id = r.department_id
LEFT JOIN employee m
    ON e.manager_id = m.id; 

-- * View employees by department.

-- * Delete departments, roles, and employees.