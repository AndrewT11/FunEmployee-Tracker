INSERT INTO departments(department_names)
VALUES
('Finance & Accouting'),
('Management'),
('Sales'),
('Warehouse');

INSERT INTO roles(title, salary, department_id)
VALUES
('Accountant', 80000, 1),
('Financial Consultant', 750000, 1),
('Manager', 65000, 2),
('Sales Person', 50000, 3),
('Warehouse stalker', 35000, 4);

INSERT INTO employees(first_name, last_name, role_id)
VALUES
('Gandalf', 'The Grey', 1),
('Frodo', 'Baggins', 2),
('Samwise', 'Gamgee', 4),
('Bilbo', 'Baggins', 3),
('Pippin', 'Took', 4),
('Gollum', ' My Precious', 4),
('Taters', 'My', 3);