const db = require('../db/connection.js');

const allRoles = `SELECT roles.id, roles.title, roles.salary, departments.name
AS department
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id`;

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

const addRole = (({ roleName, salary, department }) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, (SELECT id FROM departments WHERE name = ?))`;
    const params = [roleName, salary, department];
    db.query(sql, params);
});

const deleteRolePrompt = [
    {
        type: 'input',
        name: 'destroyRole',
        message: 'Which role would you like to remove?'
    }
];

const deleteRole = (({ destroyRole }) => {
    const sql = `DELETE FROM roles WHERE title = ?`;
    const params = [destroyRole];
    db.query(sql, params, (err, res) => {});
});

module.exports = { allRoles, addRolePrompt, addRole, deleteRolePrompt, deleteRole };