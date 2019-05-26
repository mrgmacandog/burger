// Import MySQL dependency
const mysql = require("mysql");

// Import keys dependency
const keys = require("../keys");

// Instantiate a DB connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys.rootPassword,
  database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
