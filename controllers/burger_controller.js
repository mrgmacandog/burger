// Import Express dependency
const express = require("express");

// Initialize a router
const router = express.Router();

// Import burger model dependecy
const burger = require("../models/burger");

// At the root, display index.handlebars using main.handlebars with all the burgers data
router.get("/", function (req, res) {
    // Get all burgers
    burger.all(function (data) {
        res.render("index", { burgers: data });
    });
});

// Route for adding a burger to the database
router.post("/api/burgers", function (req, res) {
    // Add a wnew burger with the given burger name
    burger.create(
        req.body.burger_name,
        function (result) {
            // Return the id of the newly added burger
            res.json({ id: result.insertId });
        }
    );
});

// Route for updating the devoured status of a burger
router.put("/api/burgers/:id", function (req, res) {
    // Change the devour status of the given burger id from FALSE to TRUE
    burger.devour(req.params.id, function (result) {
        // If the there is no burger with the given id
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {  // Success
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use
module.exports = router;