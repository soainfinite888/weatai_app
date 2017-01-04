//type:javascript


var iconBase = '/img/icon/'
var icons = {
    activity_aircondition: { icon: iconBase + 'activity_aircondition.png' },
    activity_hotchocolate: { icon: iconBase + 'activity_hotchocolate.png' },
    activity_icecream:     { icon: iconBase + 'activity_icecream.png' },
    activity_picnic:       { icon: iconBase + 'activity_picnic.png' },
    activity_sunbath:      { icon: iconBase + 'activity_sunbath.png' },
    activity_swim:         { icon: iconBase + 'activity_swim.png' },
    activity_watermelon:   { icon: iconBase + 'activity_watermelon.png' },

    emotion_angry:         { icon: iconBase + 'emotion_angry.png' },
    emotion_boring:        { icon: iconBase + 'emotion_boring.png' },
    emotion_cold:          { icon: iconBase + 'emotion_cold.png' },
    emotion_cool:          { icon: iconBase + 'emotion_cool.png' },
    emotion_laughing:      { icon: iconBase + 'emotion_laughing.png' },
    emotion_sad:           { icon: iconBase + 'emotion_sad.png' },
          
    festival_christmas:    { icon: iconBase + 'festival_christmas.png' },
    festival_dragonboat:   { icon: iconBase + 'festival_dragonboat.png' },
    festival_halloween:    { icon: iconBase + 'festival_halloween.png' },
    festival_newyear:      { icon: iconBase + 'festival_newyear.png' },

    side_rainboot:         { icon: iconBase + 'side_rainboot.png'},
    side_raincoat:         { icon: iconBase + 'side_raincoat.png'},
    side_snowman:          { icon: iconBase + 'side_snowman.png'},
    side_sunlotion:        { icon: iconBase + 'side_sunlotion.png'}, 
    side_umbrella:         { icon: iconBase + 'side_umbrella.png'},

    situation_flood:       { icon: iconBase + 'situation_flood.png'},     
    situation_strongwind:  { icon: iconBase + 'situation_strongwind.png'},
    situation_sunnydoll:   { icon: iconBase + 'situation_sunnydoll.png'}, 
    situation_typhoon:     { icon: iconBase + 'situation_typhoon.png'}, 
    situation_windy:       { icon: iconBase + 'situation_windy.png'},   

    weather_bigrainy:      { icon: iconBase + 'weather_bigrainy.png'}, 
    weather_cloudy:        { icon: iconBase + 'weather_cloudy.png'},  
    weather_rainy:         { icon: iconBase + 'weather_rainy.png'},  
    weather_smallrainy:    { icon: iconBase + 'weather_smallrainy.png'}, 
    weather_sunny:         { icon: iconBase + 'weather_sunny.png'},  
    weather_typhoon:       { icon: iconBase + 'weather_typhoon.png'}
        
};

var points = new Array();
var testpoints = new Array();


//讀取點資料
function datapoints3()
{
  //alert("successrfrfrfr");
  var result = new Array();
  $.ajax(
  {
    //url: "/userdata.html",
    
    url: "http://localhost:9292/api/v0.1/user_weather/all",
    //url: "all.html",
    
    type: 'get',
    cache: false,
    async: false,
    //data: data,
    dataType: 'json',
    success: function(data)
    {
      //alert("success");
      for(i=0;i<data.length;i++){
        result.push([[data[i]["icon"]],[data[i]["lat"]],[data[i]["lng"]]]);
      }
    },

    error: function(){ 
      alert("Can Not Load Data 讀取資料點失敗"); 
    }
  });

  //alert(result);
      
  return result;
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 8,
                            center: new google.maps.LatLng(23.583234, 120.5825975), //地圖起始中心(TAIWAN)
                            mapTypeId: google.maps.MapTypeId.SATELLITE //地圖種類
                            //mapTypeId: google.maps.MapTypeId.HYBRID
                            });


  //測試用資料
  /*
  testpoints = [
  ['weather_typhoon', 23.583234, 121.5825975],
  ['weather_sunny', 23.583234, 120.5825975],
  ['weather_sunny', 23.000, 120.5825975]
  ];
  */

  points = datapoints3();
  
  //points = testpoints;

  //alert(points);

  setMarkers(map);
}

function setMarkers(map) {

  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  /*
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  */
  
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    //alert(point[2])
    var image = {
    url: icons[point[0]].icon,
    //url: 'img/icon/weather_sunny.png',
    // This marker is 20 pixels wide by 32 pixels high.
    scaledSize: new google.maps.Size(50,50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 0)
    };
    
    //alert(point[1],point[2]);

    var marker = new google.maps.Marker({
      
      position: {lat: Number(point[1]), lng: Number(point[2])},
      //position: {lat: 120, lng: 23},
      //alert(position)
      map: map,
      icon: image,
      //shape: shape,
      //title: point[0],
      //zIndex: point[3]
    });
  }
}


// Sets the map on all markers in the array.
/*function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// 不顯示點 array沒有清空
function clearMarkers() {
  setMapOnAll(null);
}

// 顯示array中所有的點
function showMarkers() {
  setMapOnAll(map);
}

// 清空所有的點 清空array
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
*/
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.


