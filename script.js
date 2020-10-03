
$("#pokemon-button").on("click", function() {
  var queryURL = "https://pokeapi.co/api/v2/pokemon/ditto";

  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function(response) {
        console.log(response)
    });
});
