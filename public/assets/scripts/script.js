$(function () {
    $(document).on("click", ".delete-restaurant", function (event) {
        $.ajax({
            url: "/api/restaurants/" + $(this).data("id"),
            method: "DELETE"
        }).done(function(response) {
            location.reload();
        });
    });

    $(document).on("click", ".rate-restaurant", function (event) {
        var updateObj = {};
        updateObj.visited = true;
        event.preventDefault();
        // this seperates the thumbs up and thumbs down buttons
        updateObj.liked = $(this).data("liked");
        $.ajax({
            url: "/api/restaurants/" + $(this).data("id"),
            data: updateObj,
            method: "PUT"
        }).done(function(response) {
            location.reload();
        });
    });
});