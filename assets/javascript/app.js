$( document ).ready(function() {
    console.log( "ready!" );


$("#add-food").on("click", function() {

	    event.preventDefault();

	var value = $('#foody_input').val();
	console.log(value);


	   var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=601&entity_type=city&apikey=c3268e89927f3e51654afc5f7b0c4f4b&count=5&q=" +value;        // =================================================================
        $.ajax({
          url: queryURL
        }).done(function  (response){
          console.log('response', response);
        });
        
        // Do this after click 

});


});