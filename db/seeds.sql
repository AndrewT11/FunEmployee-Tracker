INSERT INTO department(department_name)
VALUES
('Finance/Accounting'),
('Management'),
('Sales'),
('Warehouse');

INSERT INTO role(title, salary, department_id)
VALUES
('Accountant', 80000, 1),
('Financial Consultant', 750000, 1),
('Sales Person', 50000, 3),
('Warehouse stalker', 35000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Gandalf', 'The Grey', 1, NULL),
('Frodo', 'Baggins', 2, NULL),
('Samwise', 'Gamgee', 4, NULL),
('Bilbo', 'Baggins', 3, NULL),
('Pippin', 'Took', 4, 3),
('Gollum', 'My Precious', 4, 3),
('Taters', 'My', 3, 4);