var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_names.json",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
		"x-rapidapi-key": "b74f32c4f3msh03893b8e16afef9p102c32jsn1de9b6fcf0a5"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

