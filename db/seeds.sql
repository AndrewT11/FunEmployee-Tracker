INSERT INTO department(department_name)
VALUES
('Finance'),
('Accounting'),
('Sales'),
('Warehouse'),
('The Throne');

INSERT INTO role(title, salary, department_id)
VALUES
('King', 10000000, 5),
('Accountant', 80000, 2),
('Financial Consultant', 75000, 1),
('Sales Person', 50000, 3),
('Warehouse stalker', 35000, 4),
('Accounting assistant', 15000, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Aragorn', 'Elessar', 1, NULL),
('Gandalf', 'The Grey', 2, NULL),
('Frodo', 'Baggins', 3, NULL),
('Bilbo', 'Baggins', 4, NULL),
('Samwise', 'Gamgee', 5, NULL),
('Pippin', 'Took', 4, 4),
('Smeagol', 'Trahald', 5, 5),
('Mr.', 'Smaug', 5, 5),
('Thorin', 'Oakenshield', 4, 4),
('Orc', 'McRiley', 5, 5),
('Witch', 'King', 6, 2);