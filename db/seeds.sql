INSERT INTO department(department_name)
VALUES
('Finance'),
('Accounting'),
('Sales'),
('Warehouse');
('')

INSERT INTO role(title, salary, department_id)
VALUES
('King', 1000000, 5)
('Accountant', 80000, 1),
('Financial Consultant', 75000, 1),
('Sales Person', 50000, 3),
('Warehouse stalker', 35000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Gandalf', 'The Grey', 2, NULL),
('Frodo', 'Baggins', 3, NULL),
('Bilbo', 'Baggins', 3, NULL),
('Samwise', 'Gamgee', 4, NULL),
('Pippin', 'Took', 4, 3),
('Smeagol', 'Trahald', 5, 3),
('Mr.', 'Smaug', 5, 4),
('Thorin', 'Oakenshield', 3, ),
('Taters', 'My', 3, 2),
('Taters', 'My', 3, 4),