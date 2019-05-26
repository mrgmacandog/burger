// Import MySQL connection
const connection = require("./connection");

// ORM object
const orm = {
    selectAll: function (table, cb) {
        let queryString = `SELECT * FROM + ${table};`;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },

    insertOne: function () {

    },

    updateOne: function () {

    }
}

// Export the orm object
module.exports = orm;