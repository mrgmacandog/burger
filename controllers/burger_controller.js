// Import Express dependency
const express = require("express");

// Initialize a router
const router = express.Router();

// Import burger model dependecy
// const burger = require("../models/burger");

// At the root, display index.handlebars using main.handlebars
router.get("/", function(req, res) {
    res.render("index", {});
});

// Export routes for server.js to use
module.exports = router;