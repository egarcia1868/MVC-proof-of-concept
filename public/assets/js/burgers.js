$(function() {
  $(".devourIt").on("click", function (event) {
    let id = $(this).data("id");
    // let nowDevoured = $(this).data("devoured");

    var nowDevouredState = {
      devoured: true   //nowDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: nowDevouredState
    }).then(
      function() {
        console.log("changed devoured to 1");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //  This will add a new burger to the database
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: false  //$("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", (event) => {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
