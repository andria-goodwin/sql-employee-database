const inquirer = require('inquirer');
const db = require('../db/connection.js');
const { allDepts, addDeptPrompt, addDept, deleteDeptPrompt, deleteDept } = require('./departments.js');

const viewAll = (viewSql) => {
    db.query(viewSql, (err, result) => console.table(result));
    setTimeout(startMenu, 1000);
}

const add = (promptQuestions, insertSql) => {
    return inquirer.prompt(promptQuestions)
    .then(insertSql)
    .then(startMenu)
};

// const update = (promptQuestions, updateSql) => {
//     return inquirer.prompt(promptQuestions)
//     .then(updateSql)
//     .then(startMenu)
// };

const remove = (promptQuestions, deleteSql) => {
    return inquirer.prompt(promptQuestions)
    .then(deleteSql)
    .then(startMenu)
};

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

    .then(({menu}) => {
        switch (menu) {
            // case 'View all roles':
            //     viewAll(); // add arguments
            //     break;
            // case 'View all employees':
            //     viewAll(); // add arguments
            //     break;
            case 'Add a department':
                add(addDeptPrompt, addDept);
                break;
            // case 'Add a role':
            //     add(); // add arguments
            //     break;
            // case 'Add an employee':
            //     add(); // add arguments
            //     break;
            // case 'Update an employee role':
            //     update(); // add arguments
            //     break;
            case 'Remove a department':
                remove(deleteDeptPrompt, deleteDept);
                break;
            // case 'Remove a role':
            //     remove(); // add arguments
            //     break;
            // case 'Remove an employee':
            //     remove(); // add arguments
            default: // 'View all departments'
                viewAll(allDepts);
        }
    })
}

module.exports = startMenu;
