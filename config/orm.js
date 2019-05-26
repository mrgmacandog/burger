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

    insertOne: function (table, cols, vals, cb) {
        let questionMarks = "";
        for (let i = 0; i < vals.length; i++) {
            if (i < vals.length - 1) {
                questionMarks += "?, ";
            } else {
                questionMarks += "?";
            }
        }

        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questionMarks});`;

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition) {
        /*
        UPDATE table_name
        SET devoured = FALSE
        WHERE id = ?;
        */
    }
}

// Export the orm object
module.exports = orm;