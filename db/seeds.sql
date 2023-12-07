INSERT INTO departments (name)
VALUES
('Human Resources'),
('Legal'),
('Finance'),
('Engineering'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('HR Director', 80000, 1),
('HR Assistant', 40000, 1),
('Legal Team Lead', 200000, 2),
('Lawyer', 150000, 2),
('Chief Financial Officer', 300000, 3),
('Accountant', 120000, 3),
('Lead Engineer', 150000, 4),
('Software Engineer', 80000, 4),
('Sales Lead', 80000, 5),
('Salesperson', 60000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jon', 'Donkowski', 1, null),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, null),
('Kevin', 'Tupik', 4, 3),
('Malia', 'Brown', 5, null),
('Sarah', 'Lourd', 6, 5),
('Tom', 'Allen', 7, null),
('Jackie', 'Meyer', 8, 7),
('Tyson', 'Mack', 9, null),
('Rebecca', 'Flounder', 10, 9);