// Import ORM dependency
const orm = require("../config/orm");

// Burger object
var burger = {
    /**
     * Get all the burgers from the database
     * @param {Function} cb 
     */
    all: function (cb) {
        // Select all burgers from the burgers table
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    /**
     * Add a new burger to the database with the given burger_name
     * @param {String} burger_name 
     * @param {Function} cb 
     */
    create: function (burger_name, cb) {
        // Insert a record into the burgers table with the given burger name and setting devoured to false
        orm.insertOne("burgers", ["burger_name", "devoured"], [burger_name, 0], function (res) {
            cb(res);
        });
    },

    /**
     * Update the devoured status of the burger with the given id from FALSE to TRUE
     * @param {String} id 
     * @param {Function} cb 
     */
    devour: function (id, cb) {
        orm.updateOne("burgers", { devoured: 1 }, "id = " + id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;