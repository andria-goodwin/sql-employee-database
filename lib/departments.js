// import database
const db = require('../db/connection.js');

// show departments table
const allDepts = 'SELECT * FROM departments';

// prompt to add a department
const addDeptPrompt = [
    {
        type: 'input',
        name: 'dept',
        message: 'What is the department name?'
    }
];

// function to add a department
const addDept = (({ dept }) => {
    const sql = 'INSERT INTO departments (name) VALUES (?)';
    const params = dept;
    db.query(sql, params, (err, res) => {});
    console.log('Department added');
});

// prompt to delete a department
const deleteDeptPrompt = [
    {
        type: 'input',
        name: 'deptToDelete',
        message: 'Which department would you like to remove?'
    }
];

// function to delete a department
const deleteDept = (({ deptToDelete }) => {
    const sql = 'DELETE FROM departments WHERE name = ?';
    const params = [deptToDelete];
    db.query(sql, params, (err, res) => {});
    console.log('Department removed');
});

module.exports = { allDepts, addDeptPrompt, addDept, deleteDeptPrompt, deleteDept };