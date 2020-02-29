$(function() {
$(".change-devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    
    var newDevourState = {
        devour: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
    }).then(
        function() {
            console.log("changed devour to ", newDevour);
            location.reload();
        });
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    // var eaten = $(this).data("newdevour");

    var newBurger = {
        burger_name: $("#burg").val().trim(),
        devour: false
    };
    console.log(newBurger);

//Send the POST request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new burger");
            location.reload();
        });
});

$(".delete-burger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    //Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function() {
            console.log("deleted burger", id);
            location.reload();
        }
    );
});


});