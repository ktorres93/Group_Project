$( document ).ready(function() {
    console.log( "ready!" );

//do this on click

$("#add-food").on("click", function() {

	    event.preventDefault();
      console.clear()

	var value = $('#foody_input').val();
	console.log(value);


	   var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=601&entity_type=city&apikey=c3268e89927f3e51654afc5f7b0c4f4b&count=5&q=" +value;        // =================================================================
        $.ajax({
          url: queryURL
        }).done(function  (response){
           console.log(response); 
        for (var i = 0; i < response.restaurants.length; i++) {
          var latitude = response.restaurants[i].restaurant.location.latitude;
          var longitude = response.restaurants[i].restaurant.location.longitude;
          var name = response.restaurants[i].restaurant.name;
          var address = response.restaurants[i].restaurant.location.address;
          var cost = response.restaurants[i].restaurant.average_cost_for_two;




          console.log('name:', name);
          console.log('address:', address);
          console.log('cost for two:', cost);
          console.log('latitude:', latitude);
          console.log('longitude:', longitude);
    //      console.log('url:', response.restaurants[i].restaurant.url);
          

        if (response.restaurants[i].restaurant.has_online_delivery == 0){
          console.log("no delivery");
        }
        else if (response.restaurants[i].restaurant.has_online_delivery == 1)
        { console.log("has delivery");

          }
          };
        });


        
        // Do this after click 

});


});