var map;

$(document).ready(function(){

$( "#boutonFrancais" ).click(cacherPartieAnglaise);

});


function cacherPartieAnglaise(){
        $("#english").hide();
        //$( "#français" ).toggleClass( "cacher" ); //permet d'alterner si un hide est la il l'enleve
    }



function LangueAnglaise(){
  //$( "#english" ).hide();
  $("titlePage").hide();

}


