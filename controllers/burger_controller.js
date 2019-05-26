// Import Express dependency
const express = require("express");

// Initialize a router
const router = express.Router();

// Import burger model dependecy
const burger = require("../models/burger");

// At the root, display index.handlebars using main.handlebars
router.get("/", function(req, res) {
    burger.all(function (data) {
        // console.log(data);
        res.render("index", {burgers: data});
    });
});

// Export routes for server.js to use
module.exports = router;