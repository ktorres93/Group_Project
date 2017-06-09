

    function distanceCalc(){
    start_location = $('select.start option:selected').val();
    target_location = $('select.end option:selected').val();
    $.get('http://maps.googleapis.com/maps/api/distancematrix/json?origins='+start_location+'&destinations='+target_location+'&mode=driving&language=de-DE&sensor=false', function(data) {
    }
    });
   };

   
      function initMap() {
        var myPosition = {lat: 28.602427, lng: -81.200060};
        var endPosition = {lat: 28.4054370000, lng:-81.5852260000 };

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myPosition,
          scrollwheel: false,
          zoom: 7
        });

        var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });


        // Set destination, origin and travel mode.
        var request = {
          destination: endPosition,
          origin: myPosition,
          travelMode: 'DRIVING'
        };

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
          }
        });
      }
    

    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-IcM0mrkbjxEb2g04rQFvnsvZV23YLtU&callback=initMap">
    </script>   