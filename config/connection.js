//Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'pze9lqmpukuec755',
    password: 'np556i10r6f9kf44',
    database: 'iyoh0ytn84hb6sbb'
});

//Make connection.
connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//Export for ORM
module.exports = connection;