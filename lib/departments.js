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

// const depts = db.query('SELECT name FROM {{formatDataAsArray(departments.data)}}', function (err, res) {
//     return res;
// });
// console.log(depts);

const deleteDeptPrompt = [
    {
        type: 'input',
        name: 'deptToDelete',
        message: 'Which department would you like to remove?',
        // choices: depts
    }
];

const deleteDept = (({ deptToDelete }) => {
    const sql = 'DELETE FROM departments WHERE name = ?';
    const params = [deptToDelete];
    db.query(sql, params, (err, res) => {});
    console.log('Department removed');
});

module.exports = { allDepts, addDeptPrompt, addDept, deleteDeptPrompt, deleteDept };