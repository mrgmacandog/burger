// Import MySQL connection
const connection = require("./connection");

/**
 * Helper function to convert object key/value pairs to SQL syntax
 * @param {Object} ob Key/value pair object
 */
function objToSql(ob) {
    // Initialize empty array
    var arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + " = " + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ORM object
const orm = {
    /**
     * Selects all record from the given table in the database
     * @param {String} table Table name
     * @param {Function} cb Callback function
     */
    selectAll: function (table, cb) {
        // MySQL query for the database
        let queryString = `SELECT * FROM ${table};`;

        // Search the database with the the given query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            // Callback function with the result of the query
            cb(result);
        });
    },

    /**
     * Inserts a record into the table give with the proper column names and values
     * @param {String} table Table name
     * @param {String array} cols Column names
     * @param {String array} vals Values for each column
     * @param {Function} cb Callback function
     */
    insertOne: function (table, cols, vals, cb) {
        // Get appropriate number of question marks
        let questionMarks = [];
        for (let i = 0; i < vals.length; i++) {
            questionMarks.push("?");
        }

        // MySQL query for the database
        //     .toString() makes it so the values in each array become separated by a comma (",")
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questionMarks.toString()});`;

        // Search the database with the the given query
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            // Callback function with the result of the query
            cb(result);
        });
    },

    /**
     * Update a record given the condition with the column names and update values defined in objColVals
     * Ex: The object {name: "new name", age: 25} with the condition "id = 1" will update id 1's name to
     *     "new name" and its age to 25.
     * @param {String} table Table name
     * @param {Object} objColVals Column names
     * @param {String} condition SQL condition
     * @param {Function} cb Callback function
     */
    updateOne: function (table, objColVals, condition, cb) {
        // MySQL query for the database
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(queryString);

        // Search the database with the the given query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            // Callback function with the result of the query
            cb(result);
        });
    }
}

// Export the ORM object functions for the model (burger.js)
module.exports = orm;