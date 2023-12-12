const db = require('../db/connection.js');

const allDepts = 'SELECT * FROM departments';

const addDeptPrompt = [
    {
        type: 'input',
        name: 'dept',
        message: 'What is the department name?'
    }
];

const addDept = (({ dept }) => {
    const sql = 'INSERT INTO departments (name) VALUES (?)';
    const params = dept;
    db.query(sql, params, (err, res) => {});
    console.log('Department added');
});

// const deptsList = db.query('SELECT name FROM departments', (err,res) => {
//             return res.map(el => el.name);
// });
// console.log(depts);

// const deleteDeptPrompt = () => {
//     db.query('SELECT name FROM departments', (err,res) => {
//         return  [
//             {
//                 type: 'list',
//                 name: 'deptToDelete',
//                 message: 'Which department would you like to remove?',
//                 choices: res.map(el => el.name)
//             }
//         ];
//     })
// }

const deleteDeptPrompt = [
    {
        type: 'input',
        name: 'deptToDelete',
        message: 'Which department would you like to remove?',
        // choices: db.query('SELECT name FROM departments', (err,res) => {
        //     return res.map(el => el.name);
        // })
    }
];

const deleteDept = (({ deptToDelete }) => {
    const sql = 'DELETE FROM departments WHERE name = ?';
    const params = [deptToDelete];
    db.query(sql, params, (err, res) => {});
    console.log('Department removed');
});

module.exports = { allDepts, addDeptPrompt, addDept, deleteDeptPrompt, deleteDept };