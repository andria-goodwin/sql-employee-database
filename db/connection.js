const mysql = require('mysql2');

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mySQLpassword',
    database: 'employee_db'
});

module.exports = db;