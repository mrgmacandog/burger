// Import MySQL connection
const connection = require("./connection");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ORM object
const orm = {
    selectAll: function (table, cb) {
        let queryString = `SELECT * FROM ${table};`;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        // Get appropriate number of question marks
        let questionMarks = [];
        for (let i = 0; i < vals.length; i++) {
            questionMarks.push("?");
        }

        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questionMarks.toString()});`;

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // TODO update
    updateOne: function (table, objColVals, condition, cb) {
        /*
        UPDATE table_name
        SET devoured = FALSE
        WHERE id = ?;
        */
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}

// Export the orm object
module.exports = orm;