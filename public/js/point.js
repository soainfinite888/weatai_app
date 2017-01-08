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
//var javascript_point_json = <%= @userweather.html_safe %>;
var js_point_json = JSON.parse("<%= @userweather.html_safe %>");
var randomlat = 0;
var randomlng = 0;



//讀取點資料
function datapoints3()
{
  //alert("successrfrfrfr");
  var result = new Array();
  $.ajax(
  {
    //url: "/userdata.html",
    

    //url: "http://localhost:9292/api/v0.1/user_weather/all?callback=test",
    url: "../points",
    //url: "../maps/<%= @userweather %>",
    //dataType: 'jsonp', 
    type: 'get',
    //crossDomain: true,
    //data: data,
    //success: callback,
    //error: callback
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

      
  return result;
}

function datapoints4()
{

$.get("http://localhost:9292/api/v0.1/user_weather/all", function(data){
            alert(data.responseText);
      });


}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 8,
                            center: new google.maps.LatLng(23.583234, 120.5825975), //地圖起始中心(TAIWAN)
                            //mapTypeId: google.maps.MapTypeId.SATELLITE, //地圖種類
                            //mapTypeId: google.maps.MapTypeId.HYBRID
                            mapTypeId: google.maps.MapTypeId.TERRAIN,
                            scrollwheel: false,
                            });


  //map style
  /*
  var styles = [
  {
    stylers: [
      { hue: "#d2e0da" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 80 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
  ]; 
  map.setOptions({styles: styles});
*/


/*
  options = $.extend({
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }, options);
*/
  //測試用資料
  
/*  
  testpoints = [
  ['weather_typhoon', 23.583234, 121.5825975],
  ['weather_sunny', 23.583234, 120.5825975],
  ['weather_sunny', 23.000, 120.5825975]
  ];
*/  

  //testpoints = [@userweather[0]['icon'],@userweather[0]['lat'],@userweather[0]['lng']];

  points = datapoints3();
  //datapoints4();
  //points = testpoints;

  //var javascript_point_json = @userweather;

  
  //alert(js_point_json[0]['lng']);
  //alert(points);

  setMarkers(map);
}

function setMarkers(map) {
  
  for (var i = 0; i < points.length; i++) {

    //亂數化
    randomlng = Math.random();
    randomlat = Math.random();
    randomlng = randomlng/1000;
    randomlat = randomlat/1000;

    
    var point = points[i];
    //alert(point[2])
    var image = {
    url: icons[point[0]].icon,
    //url: 'img/icon/weather_sunny.png',
    // This marker is 20 pixels wide by 32 pixels high.
    scaledSize: new google.maps.Size(50,50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (,).
    anchor: new google.maps.Point(25,25)
    };
    
    //alert(point[1],point[2]);


    var marker = new google.maps.Marker({

      position: {lat: Number(point[1])-0.0005+randomlat, lng: Number(point[2])-0.0005+randomlng},

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


