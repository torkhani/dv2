      function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 36.7948008, lng: 10.0031931 }
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
	  
      var locations = [
        {lat: 36.7948008, lng: 10.0031931},
        {lat: 36.825384, lng: 10.1538094},
        {lat: 36.825587, lng: 10.151718},
        {lat: 36.8277641, lng: 10.1571468},
        {lat: 36.8435906, lng: 10.1902912},
        {lat: 36.4187378, lng: 10.4737883},
        {lat: 36.3759574, lng: 10.5253314},
      ]
	  


$(".search-map-wrapper, #search-header, .search-criteria").stick_in_parent({recalc_every: 1});