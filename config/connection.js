// Import MySQL dependency
const mysql = require("mysql");

// Include the dotenv npm package and run the config function
require("dotenv").config();

// Import keys dependency
const keys = require("../keys");

// Initialize the connection
let connection;

// Instantiate a DB connection
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: keys.rootPassword,
		database: "burgers_db"
	});
}

// Make connection
connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
