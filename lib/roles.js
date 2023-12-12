// import database
const db = require('../db/connection.js');

// show roles table including id, title, salary, and department
const allRoles = `SELECT roles.id, roles.title, roles.salary, departments.name
AS department
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id`;

// prompt to add a role
const addRolePrompt = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the role name?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary? (Enter a NUMBER)'
    },
    {
        type: 'list',
        name: 'department',
        message: 'In which department is this role?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'Human Resources']
    }
];

// function to add a role
const addRole = (({ roleName, salary, department }) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, (SELECT id FROM departments WHERE name = ?))`;
    const params = [roleName, salary, department];
    db.query(sql, params);
});

// prompt to delete a role
const deleteRolePrompt = [
    {
        type: 'input',
        name: 'destroyRole',
        message: 'Which role would you like to remove?'
    }
];

// function to delete a role
const deleteRole = (({ destroyRole }) => {
    const sql = `DELETE FROM roles WHERE title = ?`;
    const params = [destroyRole];
    db.query(sql, params, (err, res) => {});
});

module.exports = { allRoles, addRolePrompt, addRole, deleteRolePrompt, deleteRole };