//type:javascript

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

var userLat;
var userLng;


function initAutocomplete() {

  //地圖
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 25.040018,lng:121.560214},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });




  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  //searchbar 的位址
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];

  var userplace = new String;
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));
      
      //user 輸入點之經緯度
      //alert(place.geometry.location.lat());
      //alert(place.geometry.location.lng());


      userLat = place.geometry.location.lat();
      userLng = place.geometry.location.lng();


      document.getElementById("location_lat").value = userLat;
      document.getElementById("location_lng").value = userLng;


      //alert(userLat);
      //alert(userLng);


      


      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);

    //GetLatlong();
  
     //alert(userplace);
  });

  //alert(userplace);

  //GetLatlong();

  

}


function GetLatlong(){
        var geocoder = new google.maps.Geocoder();
        var address = document.getElementById('textboxid').value;

        geocoder.geocode({ 'address': address }, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();

                alert(latitude);
                alert(longitude);


            }
        });

}