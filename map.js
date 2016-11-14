var map;
var tabVille = [];
var tabNomVilles = [];

$(document).ready(function(){
	$.getJSON("villes.json", function(data) {
		tabVille = data;//[];
    $.map(data,function(villes,nom){
      tabNomVilles.push(nom);
    })
    console.log(tabNomVilles);
	});

	initMap();

	cacherPartieAnglaise();

	$( "#boutonFrancais" ).click(cacherPartieAnglaise);

	$( "#boutonAnglais" ).click(cacherPartieFrancaise);

	$( "#frenchButton" ).click(cacherPartieAnglaise);

	$( "#englishButton" ).click(cacherPartieFrancaise);

	$( "#inputNomVille" ).autocomplete({
		  source: tabNomVilles
		});
});


function cacherPartieAnglaise(){
        $("#english").hide();
        $( "#français" ).show();
        $("#boutonFrancais").attr("disabled", true);
        //$( "#français" ).toggleClass( "cacher" ); //permet d'alterner si un hide est la il l'enleve
    }



function cacherPartieFrancaise(){
  $( "#français" ).hide();
  $( "#english" ).show();
  $("#englishButton").attr("disabled", true);
}


function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    center: {lat: 45.5, lng: -73.550003},
    zoom: 8
  });
}
