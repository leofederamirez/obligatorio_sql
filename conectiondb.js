const mysql = require('mysql2');
require('dotenv').config()

const connection = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

module.exports = connection;