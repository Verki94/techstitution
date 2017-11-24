$(document).ready(function(){
	
	//var datetimeNow = mew Date();



	$('#border-wait-form').submit(function(event){
		event.preventDefault();
		//hyrja/dalja ne minuta
	    var pikaKufitare = $('#pika-kufitare').val();
	    var hyrjeMinMinuta = $ ('#hyrje-min-minuta').val();
	    var hyrjeMaxMinuta =$ ('#hyrje-max-minuta').val();
	    var daljeMinMinuta =$ ('#dalje-min-minuta').val();
	    var daljeMaxMinuta =$ ('#dalje-max-minuta').val();
	    //hyrja/dalje ne metra 
	    var hyrjeMinMetra = $ ('#hyrje-min-metra').val();
	    var hyrjeMaxMetra =$ ('#hyrje-max-metra').val();
	    var daljeMinMetra =$ ('#dalje-min-metra').val();
	    var daljeMaxMetra =$ ('#dalje-max-metra').val();


	    // console.log(hyrjeMinMinuta)
	    // console.log(hyrjeMaxMinuta)
	    // console.log(daljeMinMinuta)
	    // console.log(daljeMaxMinuta)
	    // console.log(hyrjeMinMetra)
	    // console.log(hyrjeMaxMetra)
	    // console.log(daljeMinMetra)
	    // console.log(daljeMaxMetra)

	    var dataJson ={};
	    dataJson["pikaKufitare"] =  pikaKufitare;
	    dataJson["hyrjeMinMinuta"] = parseInt hyrjeMinMinuta;
	    dataJson["hyrjeMaxMinuta"] = parseInt hyrjeMaxMinuta;
	    dataJson["daljeMinMinuta"] = parseInt daljeMinMetra;
	    dataJson["daljeMaxMinuta"] = parseInt daljeMaxMinuta;
	    dataJson["hyrjeMinMetra"] =  parseInt hyrjeMinMetra;
	    dataJson["hyrjeMaxMetra"] =  parseInt hyrjeMaxMetra;
	    dataJson["daljeMinMetra"] =  parseInt daljeMinMetra;
	    dataJson["daljeMaxMetra"] =  parseInt daljeMaxMetra;
	    dataJson["datetimeNow"] = new Date();

	    console.log(dataJson);
 

	});
});