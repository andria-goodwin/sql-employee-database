const db = require('../db/connection.js');

const allEmployees = `
SELECT a.id, a.first_name, a.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, b.last_name AS manager
FROM employees a
LEFT JOIN employees b ON a.manager_id = b.id
LEFT JOIN roles ON a.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id`;

const addEmployeePrompt = [
    {
        type: 'input',
        name: 'first',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?"
    },
    {
        type: 'confirm',
        name: 'confirmManager',
        message: 'Does this employee have a manager?',
        default: true
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: ['Jon Donkowski', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Malia Brown', 'Sarah Lourd', 'Tom Allen', 'Jackie Meyer', 'Tyson Mack', 'Rebecca Flounder'],
        when: ({ confirmManager }) => {
            if (confirmManager) {
                return true;
            } else {
                return false;
            }
        }
    }
];

const getId = (employeeX) => {
    let employeeId;

    if (employeeX === 'Jon Donkowski') {employeeId = 1}
    if (employeeX === 'Mike Chan') {employeeId = 2}
    if (employeeX === 'Ashley Rodriguez') {employeeId = 3}
    if (employeeX === 'Kevin Tupik') {employeeId = 4}
    if (employeeX === 'Malia Brown') {employeeId = 5}
    if (employeeX === 'Sarah Lourd') {employeeId = 6}
    if (employeeX === 'Tom Allen') {employeeId = 7}
    if (employeeX === 'Jackie Meyer') {employeeId = 8}
    if (employeeX === 'Tyson Mack') {employeeId = 9}
    if (employeeX === 'Rebecca Flounder') {employeeId = 10}

    return employeeId;
}

const addEmployee = (({ first, last, role, manager, confirmManager }) => {
    let managerId;

    if (confirmManager === false) {
        managerId = null;
    } else {
        managerId = getId(manager);
    }
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, (SELECT id FROM roles WHERE title = ?), ?)`;
    const params = [first, last, role, managerId];
    db.query(sql, params, (err, res) => {});
});


module.exports = { allEmployees, addEmployeePrompt, addEmployee };