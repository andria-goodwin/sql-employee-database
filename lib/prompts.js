const inquirer = require('inquirer');

const db = require('../db/connection.js');

// const viewAll = (viewSql) => {
//     db.query(viewSql, (err, result) => console.table(result));
//     setTimeout(startMenu, 1000);
// }

// const add = (promptQuestions, insertSql) => {
//     return inquirer.prompt(promptQuestions)
//     .then(insertSql)
//     .then(startMenu)
// };

// const update = (promptQuestions, updateSql) => {
//     return inquirer.prompt(promptQuestions)
//     .then(updateSql)
//     .then(startMenu)
// };

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
                'Update an employee role'
            ]
        }
    ])

    // .then(({menu}) => {
    //     switch (menu) {
    //         case 'View all roles':
    //             viewAll(); // add arguments
    //             break;
    //         case 'View all employees':
    //             viewAll(); // add arguments
    //             break;
    //         case 'Add a department':
    //             add(); // add arguments
    //             break;
    //         case 'Add a role':
    //             add(); // add arguments
    //             break;
    //         case 'Add an employee':
    //             add(); // add arguments
    //             break;
    //         case 'Update an employee role':
    //             update(); // add arguments
    //             break;
    //         default: // 'View all departments'
    //             viewAll(); // add arguments
    //     }
    // })
}

module.exports = startMenu;
