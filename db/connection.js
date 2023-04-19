const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "egg",
  database: "employees"
});

connection.query('SELECT * FROM my_table', function (err, results, fields) {
  if (err) throw err;
  console.log(results);
});

module.exports = connection;
