const inquirer = require('inquirer');
const sql = require('./db/connect.js');

// Start server after DB connection
sql.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

    // call inquirer function here
});