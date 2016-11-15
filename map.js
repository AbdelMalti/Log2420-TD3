var map;
var tabVille = [];
var tabNomVilles = [];

var longitude;
var lagitude;

var marker;

$(document).ready(function(){

  lookingIntoJSON();

	initMap();

	cacherPartieAnglaise();

	$( "#boutonFrancais" ).click(cacherPartieAnglaise);

	$( "#boutonAnglais" ).click(cacherPartieFrancaise);

	$( "#frenchButton" ).click(cacherPartieAnglaise);

	$( "#englishButton" ).click(cacherPartieFrancaise);

	$( "#inputNomVille" ).autocomplete({
		  source: tabNomVilles
		});

  $("#inputNomVille").on('change keyup paste', function() {
    settingLatLong();
  });
});


function cacherPartieAnglaise(){
        $("#english").hide();
        $( "#français" ).show();
        $("#boutonFrancais").attr("disabled", true);
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

  marker = new google.maps.Marker({
    position: {lat: 45.5, lng: -73.550003},
    map: map,
    title: 'Hello World!'
  });
}

function lookingIntoJSON(){
  $.getJSON("villes.json", function(data) {
    tabVille = data;
    $.map(data,function(villes, nom){
      tabNomVilles.push(nom);
    })
  });
  settingLatLong();
}

function settingLatLong(){

      console.log("input : " +$( "#inputNomVille" ).val());

    $.getJSON("villes.json", function(data) {
    $.map(data,function(villes, nom){
      if($( "#inputNomVille" ).val() == nom){
        console.log(tabVille[nom].lat);
        console.log(tabVille[nom].lon);
        longitude = tabVille[nom].lon;
        lagitude = tabVille[nom].lat
      
        map.setCenter({lat: lagitude, lng: longitude}); 
        marker.setPosition({lat: lagitude, lng: longitude});
      }
    })
  });
}