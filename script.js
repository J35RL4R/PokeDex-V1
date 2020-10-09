alert('connected!')
$(function () {

  $("#search-input").on("click", function () {

    var pokemon = $("#input").val().toLowerCase().trim();
    
    var pokeGame = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    //var pokeDescription = "https://pokeapi.co/api/v2/characteristic/" + pokeid;
    var pokeGif = "https://api.giphy.com/v1/gifs/search?api_key=I4lc5z5Pjva79mvZq3suogFUfDYu5RbM&q=" + pokemon; "&limit=1&offset=0&rating=g&lang=en";

    function pokemonApp() {

      console.log(pokeGame);
      console.log(pokemon);

      $.ajax({
        url: pokeGame,
        method: "GET"
      })

        .then(function (response) {

          console.log(response)

          if (!(history.includes(pokemon))) {
            history.push(pokemon);
            localStorage.setItem("history", JSON.stringify(history));
            historyRow(pokemon);
          }


          var pokeName = response.species.name;
          var pokeHeader = $("<h1>");
          pokeHeader.text(pokeName);
          $(".pokemon-name").append(pokeHeader);
          
          "https://pokeapi.co/api/v2/type/" + pokeid;
          var pokeType = response.species.type;
          var pType = $("<p>");
          pType.text(pokeType)
          $(".pokemon-type").append(pType);
      
          // then i want to appened description of pokemon
          // then i want to append top 5 moves to page
          // then i want to append stat names
          // then i want to appened stat values
          //then i want to append pokemon type
          
          
      
          console.log(response)
          console.log(response.species.name)
        });
      $.ajax({
        url: pokeGif,
        method: "GET"
      })

        .then(function (response) {
          var imageUrl = response.data[1].images.original.url;
          var pokeImage = $("<img>");
          pokeImage.attr("src", imageUrl);
          pokeImage.attr("alt", "pokemon image")
          $(".poke-img").append(pokeImage);
          console.log(response)
          console.log(response.data)
        });

    }

    var history = JSON.parse(localStorage.getItem("history")) || [];
    console.log(history);

    if (history.length >= 0) {
      pokemonApp(history[history.length - 1]);
    }

    for (var i = 0; i < history.length; i++) {
      historyRow(history[i]);

    }

    $("#local-storage").on("click", "button", function () {
      var pokemon1 = $(this).text().trim();
      pokemonApp(pokemon1);
    })

    function historyRow(text) {
      var listitem = $("<button>").text(text);
      listitem.addClass("button is-warning");
      $("#local-storage").append(listitem);
    }


  });
});

