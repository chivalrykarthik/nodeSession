const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'users'
});


connection.connect();

module.exports = connection;