$(function () {

  $("#search-input").on("click", function () {
    var pokemon = $("#input").val().toLowerCase().trim();
    pokemonApp(pokemon);
    $('div').removeClass('hide');


  })

  function pokemonApp(pokemon) {

    var pokeGame = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    //var pokeDescription = "https://pokeapi.co/api/v2/characteristic/" + pokeid;
    var pokeGif = "https://api.giphy.com/v1/gifs/search?api_key=I4lc5z5Pjva79mvZq3suogFUfDYu5RbM&q=" + pokemon; "&limit=1&offset=0&rating=g&lang=en";

    console.log(pokeGame);
    console.log(pokemon);


    if (!(history.includes(pokemon))) {
      history.push(pokemon);
      localStorage.setItem("history", JSON.stringify(history));
      historyRow(pokemon);
    }


    $.ajax({
      url: pokeGame,
      method: "GET"
    })

      .then(function (response) {

        console.log(response);

        var pokeName = response.species.name;
        var pokeHeader = $("<h1>");
        pokeHeader.text(pokeName);
        $(".pokemon-name").append(pokeHeader);


        // pokemon height and weight          

        var pokemonHeight = $("<p>").text("Height: " + response.height + "ft ");
        console.log(response.height);
        $(".pokemon-height").append(pokemonHeight);

        var pokemonWeight = $("<p>").text("Weight: " + response.weight + "lb");
        console.log(response.weight);
        $(".pokemon-height").append(pokemonWeight);


        // then i want to appened abilities of pokemon
        var titleAbilities = $("<h5>").text("Abilities");
        $(".pokemon-abilities").append(titleAbilities);
        for (var i = 0; i < response.abilities.length; i++) {
          var pokeAbilities = $("<p>").text(' ' + response.abilities[i].ability.name + ',');
          console.log(pokeAbilities);
          $(".pokemon-abilities").append(pokeAbilities);
        }


        // then i want to append top 5 moves to page
        var titleMoves = $("<h5>").text("Moves");
        $(".pokemon-moves").append(titleMoves)
        for (var i = 0; i < 5; i++) {
          var pokemoves = $("<p>").text(response.moves[i].move.name + ", ");
          console.log(pokemoves);
          $(".pokemon-moves").append(pokemoves);
        }

        //pokemon sprite code:
        var statTitle = $("<h5>").text("Physical Stats");
        $(".pokemon-stats").append(statTitle);
        $(".poke-sprite").addClass("card");
        var frontURL = response.sprites.front_default;
        var pokeSpriteFront = $("<img>");
        pokeSpriteFront.attr("src", frontURL);
        pokeSpriteFront.attr("alt", "pokemon sprite");
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
        pokeStatHpLi.text('HP: ' + pokeStatHP);
        $(".pokemon-stats").append(pokeStatHpLi);

        var pokeStatAttack = response.stats[1].base_stat;
        console.log(pokeStatAttack)
        var pokeStatAttackLi = $('<li>');
        pokeStatAttackLi.text('Attack: ' + pokeStatAttack);
        $(".pokemon-stats").append(pokeStatAttackLi);

        var pokeStatDefense = response.stats[2].base_stat;
        console.log(pokeStatDefense)
        var pokeStatDefenseLi = $('<li>');
        pokeStatDefenseLi.text('Defense: ' + pokeStatDefense);
        $(".pokemon-stats").append(pokeStatDefenseLi);

        var pokeStatSpecialAttack = response.stats[3].base_stat;
        console.log(pokeStatSpecialAttack)
        var pokeStatSpecialAttackLi = $('<li>');
        pokeStatSpecialAttackLi.text('Special Attack: ' + pokeStatSpecialAttack);
        $(".pokemon-stats").append(pokeStatSpecialAttackLi)

        var pokeStatSpecialDefense = response.stats[4].base_stat;
        console.log(pokeStatSpecialDefense)
        var pokeStatSpecialDefenseLi = $('<li>');
        pokeStatSpecialDefenseLi.text('Attack: ' + pokeStatSpecialDefense);
        $(".pokemon-stats").append(pokeStatSpecialDefenseLi)

        var pokeStatSpeed = response.stats[5].base_stat;
        console.log(pokeStatSpeed)
        var pokeStatSpeedLi = $('<li>');
        pokeStatSpeedLi.text('Speed: ' + pokeStatSpeed);
        $(".pokemon-stats").append(pokeStatSpeedLi)

        //then i want to append pokemon type
        var pokemonType = response.types[0].type.name;
        var pokeStatTypeLi = $('<li>');
        pokeStatTypeLi.text('Type: ' + pokemonType);
        $(".pokemon-types").append(pokeStatTypeLi)

        console.log(pokemonType)


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
        $(".poke-gif").append(pokeImage);
        console.log(response)
        console.log(response.data)
      });

    pokemonGo(pokemon);

  };

  var history = JSON.parse(localStorage.getItem("history")) || [];
  console.log(history);
  if (history.length >= 0) {
    pokemonApp(history[history.length - 1]);
  }
  for (var i = 0; i < history.length; i++) {
    historyRow(history[i]);
  }
  $("#history").on("click", "button", function () {
    var pokemonSaved = $(this).text().trim();
    pokemonApp(pokemonSaved);
    $('div').removeClass('hide');
  })
  function historyRow(text) {
    var listitem = $("<button>").text(text);
    listitem.addClass("button is-warning");
    $("#history").append(listitem);
  }

  function pokemonGo(pokemon) {
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
      console.log("working");
      console.log(pokemon);
      console.log(response[0].pokemon_name);
      console.log(response[0].form);
      for (var i = 0; i < 1122; i++) {
        if (response[i].form === "Normal" && response[i].pokemon_name.toLowerCase() === pokemon) {
          var pokeGoNormal = $("<h2>").text("Pokemon Go Normal Stats");
          $(".pokemonGo-Normal").append(pokeGoNormal);
          var pokemonGoAttacks = $("<p>").text("Base Attack: " + response[i].base_attack);
          console.log(pokemonGoAttacks);
          $(".pokemonGo-Normal").append(pokemonGoAttacks);
          var pokemonGoDefense = $("<p>").text("Base Defense: " + response[i].base_defense);
          console.log(pokemonGoDefense);
          $(".pokemonGo-Normal").append(pokemonGoDefense);
          var pokemonGoStamina = $("<p>").text("Base Stamina: " + response[i].base_stamina);
          console.log(pokemonGoStamina);
          $(".pokemonGo-Normal").append(pokemonGoStamina);
        }
        else if (response[i].form === "Purified" && response[i].pokemon_name.toLowerCase() === pokemon) {
          var pokeGoPurified = $("<h2>").text("Pokemon Go Purified Stats");
          $(".pokemonGo-Purified").append(pokeGoPurified);
          var pokemonGoPurified_Attacks = $("<p>").text("Base Attack: " + response[i].base_attack);
          $(".pokemonGo-Purified").append(pokemonGoPurified_Attacks);
          var pokemonGoPurified_Defense = $("<p>").text("Base Defense: " + response[i].base_defense);
          $(".pokemonGo-Purified").append(pokemonGoPurified_Defense);
          var pokemonGoPurified_Stamina = $("<p>").text("Base Stamina: " + response[i].base_stamina);
          $(".pokemonGo-Purified").append(pokemonGoPurified_Stamina);
        }
        else if (response[i].form === "Shadow" && response[i].pokemon_name.toLowerCase() === pokemon) {
          var pokeGoShadow = $("<h2>").text("Pokemon Go Shadow Stats");
          $(".pokemonGo-Shadow").append(pokeGoShadow);
          var pokemonGoShadow_Attacks = $("<p>").text("Base Attack: " + response[i].base_attack);
          $(".pokemonGo-Shadow").append(pokemonGoShadow_Attacks);
          var pokemonGoShadow_Defense = $("<p>").text("Base Defense: " + response[i].base_defense);
          $(".pokemonGo-Shadow").append(pokemonGoShadow_Defense);
          var pokemonGoShadow_Stamina = $("<p>").text("Base Stamina: " + response[i].base_stamina);
          $(".pokemonGo-Shadow").append(pokemonGoShadow_Stamina);
        }
        else { };
      }

    });


  }

});