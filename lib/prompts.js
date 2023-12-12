// using inquirer and importing database, department functionality, employee functionality, and role functionality
const inquirer = require('inquirer');
const db = require('../db/connection.js');
const { allDepts, addDeptPrompt, addDept, deleteDeptPrompt, deleteDept } = require('./departments.js');
const { allEmps, addEmpPrompt, addEmp, updatePrompt, updateEmp, deleteEmpPrompt, deleteEmp } = require('./employees.js');
const { allRoles, addRolePrompt, addRole, deleteRolePrompt, deleteRole } = require('./roles.js');

// function to view tables
const viewAll = (viewSql) => {
    db.query(viewSql, (err, result) => console.table(result));
    setTimeout(startMenu, 1000);
}

// function to add to database
const add = (promptQuestions, addSql) => {
    return inquirer.prompt(promptQuestions)
    .then(addSql)
    .then(startMenu)
};

// function to update database
const update = (promptQuestions, updateSql) => {
    return inquirer.prompt(promptQuestions)
    .then(updateSql)
    .then(startMenu)
};

// function to remove from database
const remove = (promptQuestions, deleteSql) => {
    return inquirer.prompt(promptQuestions)
    .then(deleteSql)
    .then(startMenu)
};

// main function which shows the start menu
const startMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                new inquirer.Separator('-----VIEW TABLES-----'),
                'View all departments',
                'View all roles',
                'View all employees',
                new inquirer.Separator('-----ADD TO TABLES-----'),
                'Add a department',
                'Add a role',
                'Add an employee',
                new inquirer.Separator('-----UPDATE TABLES-----'),
                'Update an employee role',
                new inquirer.Separator('-----REMOVE FROM TABLES-----'),
                'Remove a department',
                'Remove a role',
                'Remove an employee'
            ]
        }
    ])

    // takes information from inquirer above and checks it against a switch case to determine which functions to run
    .then(({menu}) => {
        switch (menu) {
            case 'View all departments':
                viewAll(allDepts);
                break;
            case 'View all roles':
                viewAll(allRoles);
                break;
            case 'Add a department':
                add(addDeptPrompt, addDept);
                break;
            case 'Add a role':
                add(addRolePrompt, addRole);
                break;
            case 'Add an employee':
                add(addEmpPrompt, addEmp);
                break;
            case 'Update an employee role':
                update(updatePrompt, updateEmp);
                break;
            case 'Remove a department':
                remove(deleteDeptPrompt, deleteDept);
                break;
            case 'Remove a role':
                remove(deleteRolePrompt, deleteRole);
                break;
            case 'Remove an employee':
                remove(deleteEmpPrompt, deleteEmp);
                break;
            default: // 'View all employees'
                viewAll(allEmps);
        }
    })
}

module.exports = startMenu;
