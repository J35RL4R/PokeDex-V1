$(function () {

  $("#search-input").on("click", function () {
    var pokemon = $("#input").val().toLowerCase().trim();
    pokemonApp(pokemon);
    
    
  })  

  function pokemonApp(pokemon) {

    var pokeGame = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    //var pokeDescription = "https://pokeapi.co/api/v2/characteristic/" + pokeid;
    var pokeGif = "https://api.giphy.com/v1/gifs/search?api_key=I4lc5z5Pjva79mvZq3suogFUfDYu5RbM&q=" + pokemon; "&limit=1&offset=0&rating=g&lang=en";

<<<<<<< HEAD
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
=======
    console.log(pokeGame);
    console.log(pokemon);
>>>>>>> d9fd6e413965937c57ecb90892ef3e49c15c6c26

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


        // pokemon height and weight          

        var pokemonHeight = $("<p>").text("Height: " + response.height + "in");
        console.log(response.height);
        $(".poke-img").append(pokemonHeight);

        var pokemonWeight = $("<p>").text("Weight: " + response.weight + "lb");
        console.log(response.weight);
        $(".poke-img").append(pokemonWeight);


        // then i want to appened abilities of pokemon
        var titleAbilities = $("<h2>").text("Abilities");
        $(".pokemon-abilities").append(titleAbilities);
        for (var i = 0; i < response.abilities.length; i++) {
          var pokeAbilities = $("<li>").text(response.abilities[i].ability.name);
          console.log(pokeAbilities);
          $(".pokemon-abilities").append(pokeAbilities);
        }


        // then i want to append top 5 moves to page
        var titleMoves = $("<h2>").text("Moves");
        $(".pokemon-moves").append(titleMoves)
        for (var i = 0; i < 5; i++) {
          var pokemoves = $("<li>").text(response.moves[i].move.name);
          console.log(pokemoves);
          $(".pokemon-moves").append(pokemoves);
        }

       //pokemon sprite code:
        var frontURL = response.sprites.front_default;
        var pokeSpriteFront = $("<img>");
        pokeSpriteFront.attr("src", frontURL);
        pokeSpriteFront.attr("alt", "pokemon sprite")
        $(".poke-sprite").append(pokeSpriteFront);
        
        var frontURL = response.sprites.back_default;
        var pokeSpriteBack = $("<img>");
        pokeSpriteBack.attr("src", frontURL);
        pokeSpriteBack.attr("alt", "pokemon sprite")
        $(".poke-sprite").append(pokeSpriteBack);

        //pokemon stat code:
        var pokeStatHP = response.stats[0].base_stat;
        console.log(pokeStatHP)
        var pokeStatHpLi = $('<li>');
        pokeStatHpLi.text('HP: ' +pokeStatHP);
        $(".pokemon-stats").append(pokeStatHpLi);

        var pokeStatAttack = response.stats[1].base_stat;
        console.log(pokeStatAttack)
        var pokeStatAttackLi = $('<li>');
        pokeStatAttackLi.text( 'Attack: ' +pokeStatAttack);
        $(".pokemon-stats").append(pokeStatAttackLi);

        var pokeStatDefense = response.stats[2].base_stat;
        console.log(pokeStatDefense)
        var pokeStatDefenseLi = $('<li>');
        pokeStatDefenseLi.text( 'Defense: ' +pokeStatDefense);
        $(".pokemon-stats").append(pokeStatDefenseLi);
        
        var pokeStatSpecialAttack = response.stats[3].base_stat;
        console.log(pokeStatSpecialAttack)
        var pokeStatSpecialAttackLi = $('<li>');
        pokeStatSpecialAttackLi.text( 'Special Attack: ' +pokeStatSpecialAttack);
        $(".pokemon-stats").append(pokeStatSpecialAttackLi)
        
        var pokeStatSpecialDefense = response.stats[4].base_stat;
        console.log(pokeStatSpecialDefense)
        var pokeStatSpecialDefenseLi = $('<li>');
        pokeStatSpecialDefenseLi.text( 'Attack: ' +pokeStatSpecialDefense);
        $(".pokemon-stats").append(pokeStatSpecialDefenseLi)

        var pokeStatSpeed = response.stats[5].base_stat;
        console.log(pokeStatSpeed)
        var pokeStatSpeedLi = $('<li>');
        pokeStatSpeedLi.text( 'Speed: ' +pokeStatSpeed);
        $(".pokemon-stats").append(pokeStatSpeedLi)

        //then i want to append pokemon type
        console.log(response)
        console.log(response.species.name)

        pokemonGo(pokemon);
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


  };



  function pokemonGo(pokemon){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
        "x-rapidapi-key": "b74f32c4f3msh03893b8e16afef9p102c32jsn1de9b6fcf0a5"
      }
    }
  
    $.ajax(settings).done(function (response) {
      console.log(response);
  
 
  
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

