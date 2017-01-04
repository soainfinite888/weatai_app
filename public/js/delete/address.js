//address.js
//轉換文字地址為經緯度
function initMap() {
  var geocoder = new google.maps.Geocoder();
  document.getElementById('check').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      //alert('位置是：' + results[0].geometry.location);
      document.getElementById("address").innerHTML='2';
      //lablecheck = results[0].geometry.location; 
    } 
    else {
      document.getElementById("address").innerHTML='找不到這個地點喔！';
      //return 
      //lablecheck = "找不到這個地點喔！"
      //alert('找不到這個地點喔！');
    }
  });
}