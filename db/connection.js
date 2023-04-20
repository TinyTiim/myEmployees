
// This is from the sql2 package
const mysql = require('mysql2');
//This is how my sql connects
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'egghead7',
  database: 'employees'
});

// Test the connection
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;

