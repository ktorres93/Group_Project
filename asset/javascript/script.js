

$(document).ready(function(){
	console.log("ready!");
 		$('.carousel').carousel();
// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);


 		
		navigator.geolocation.getCurrentPosition(initialise);



/*
$("#weather").click(function(){
		var myweather = new google.maps.weather.WeatherLayer({
			temperatureUnits: google.maps.weather.temperatureUnit.CELCIUS

		});
		var mycloud = new google.maps.weather.CloudLayer();
		if (myweather.getMap() || mycloud.getMap()){}
			myweather.setMap(map);
			mycloud.setMap(map);
		};
})
*/


});





	var map;
	var service;

	function searchResult(result, status){
		console.log(result);
		for (var i=0; i<result.length; i++){
		  	var marker = new google.maps.Marker({
		  	position: result[i].geometry.location,
		  	map: map
		//  	icon: "result[i].icon"
  });
		}
	};



//----------------------
	function performSearch(){
		var request = {
			bounds : map.getBounds(),
			name: "McDonald's"
		    }
		service.nearbySearch(request, searchResult);
	};





	




	function initialise(location){
		console.log(location);
		var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

/*		  var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 28.6659654, lng: -81.3729372},
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });     */

		var options = {
		//	center: new google.maps.LatLng(28.6659654, -81.3729372),
			center: currentLocation,
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};    
     
  map = new google.maps.Map(document.getElementById("map"), options);
 
  	var marker = new google.maps.Marker({
  	position: currentLocation,
  	map: map,
  	icon: "asset/images/you.jpg"
  });  

// 	service = new google.maps.places.PlacesService(map);
 //	google.maps.event.addListenerOnce(map, "bounds_changed", performSearch);






/*

  	$("refresh").click(performSearch);




  		var circle ={
  			fillcolor: "lightblue",
  			map:map,
  			center: new google.maps.LatLng(location.coords.latitude, location.coords.longitude),
  			radius: 3000
  		};
  		mycircle = new google.maps.Circle(circle);
	
*/

};