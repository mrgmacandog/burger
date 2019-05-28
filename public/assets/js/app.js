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
    })
})();