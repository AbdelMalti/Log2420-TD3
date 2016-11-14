var map;
var ville;

$(document).ready(function(){

	$.getJSON("villes.json", function(obj) {
		ville = obj;
	});

	initMap();

	cacherPartieAnglaise();

	$( "#boutonFrancais" ).click(cacherPartieAnglaise);

	$( "#boutonAnglais" ).click(cacherPartieFrancaise);

	$( "#frenchButton" ).click(cacherPartieAnglaise);

	$( "#englishButton" ).click(cacherPartieFrancaise);

	$( "#inputNomVille" ).autocomplete({
		  source: ville
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
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
