//address.js
//轉換文字地址為經緯度

var geocoder = new google.maps.Geocoder();
 
var addr = $("#address").text();
       

geocoder.geocode({
        'address': addr
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            $('#lat').text(results[0].geometry.location.lat());
            $('#lng').text(results[0].geometry.location.lng());
            

    }
        
});
