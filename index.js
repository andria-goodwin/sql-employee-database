const db = require('./db/connection.js');
const startMenu = require('./lib/prompts.js');

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    
    console.log('Database connected.');

    startMenu();
});