// Code is executed in strict mode
"use strict";

// Wrap all code in an anonymous function so functions cannot be called externally
(function () {
    // Run JavaScript once the document is ready
    $(document).ready(function () {

        // When a devour button is clicked
        $(".burger-button").on("click", function () {
            // Save the id of the burger selected
            let id = $(this).attr("burger");

            // Make a PUT request to the API to update the devoured status of the burger
            $.ajax(`/api/burgers/${id}`, {
                type: "PUT",
            }).then(function () {
                // Reload the page to update display
                location.reload();
            });
        });

        // When the submit button is clicked
        $(".create-form").on("submit", function () {
            
            // Create object for POST method to use
            let newBurger = {
                burger_name: $("#new-burger").val().trim()  // Text typed inside the text box
            }

            // POST to the API with the given new burger information
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            });
        });
    });
})();