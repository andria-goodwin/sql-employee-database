const mysql = require('mysql2');

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mySQLpassword',
    database: 'employee_db'
});

module.exports = sql;