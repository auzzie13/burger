$(function() {
$(".burgerForm").on('submit', function(event) {
    event.preventDefault();
    var burgerId = $(this).children(".burger_id").val();
    console.log("burger ID: ", burgerId);
    var id = $(this).data('id');
    var newDevour = $(this).data('newdevour');
    
    var newDevourState = {
        devour: newDevour
    };

    $.ajax({
        method: "PUT",
        url: 'api/burgers/' + burgerId
    }).then(
        function(data){
            console.log('changed devour to ', data);
            location.reload();
        });
});

$('.create-form').on('submit', function(event) {
    event.preventDefault();
    var eaten = $(this).data('newdevour');

    var newBurger = {
        burger_name: $('#burg').val().trim(),
        devour: eaten
    };
    console.log(newBurger);

    $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
    }).then(
        function() {
            console.log('created new burger');
            location.reload();
        });
});

$('.delete_form').on('click', function(event) {
    event.preventDefault();
    var id = $(this).children(".delete_burger").val();

    $.ajax({
        method: 'DELETE',
        url: '/api/burgers/' + id
    }).then(
        function(data) {
            console.log('DATA: ', data);
            location.reload();
        }
    );
});


});