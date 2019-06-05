// Import ORM dependency
const orm = require("../config/orm");

// Burger object
var burger = {
    /**
     * Get all the burgers from the database
     * @param {Function} cb Callback function
     */
    all: function (cb) {
        // Select all burgers from the burgers table
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    /**
     * Add a new burger to the database with the given burger_name
     * @param {String} burgerName Burger name
     * @param {Function} cb Callback function
     */
    create: function (burgerName, cb) {
        // Insert a record into the burgers table with the given burger name and setting devoured to false
        orm.insertOne("burgers", ["burger_name", "devoured"], [burgerName, 0], function (res) {
            cb(res);
        });
    },

    /**
     * Update the devoured status of the burger with the given id from FALSE to TRUE
     * @param {String} id Burger ID
     * @param {Function} cb Callback function
     */
    devour: function (id, cb) {
        orm.updateOne("burgers", { devoured: 1 }, "id = " + id, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;