var map;

function myDAtaFunction() {

    var temp = document.getElementById("//////").value;
    var api_url = '/userdata.html'.concat(temp.toString());

    //var api_url = 'http://localhost:9292/api/v0.1/user_weather/all/'.concat(temp.toString());
    //.concat('?jsonp?callback=?');
    //var gjson ;
    //gjson = getJSON(api_url) ;
    document.getElementById("demo").innerHTML = api_url;
    $.getJSON(api_url, function(data) {
      document.getElementById("demo").innerHTML = data.township;
    }); 
  }

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 8,
                            center: new google.maps.LatLng(23.583234, 120.5825975), //地圖起始中心(TAIWAN)
                            mapTypeId: google.maps.MapTypeId.SATELLITE //地圖種類
                            //mapTypeId: google.maps.MapTypeId.HYBRID
                            });

   var features = [
   {
            position: new google.maps.LatLng(24.794443, 120.993240),
            type: 'weather_bigrainy'
          }, 

          {
            position: new google.maps.LatLng(23.794920, 120.992167),
            type: 'weather_sunny'
          }
           
        ];


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




  function addMarker(feature) {
    
    var image = {
      url: icons[feature.type].icon,
      scaledSize: new google.maps.Size(50,50),
      origin: new google.maps.Point(0,0),// The origin for this image is (0, 0).
      anchor: new google.maps.Point(0, 0)// The anchor for this image is the base of the flagpole at
    };
    

    var marker = new google.maps.Marker({position: feature.position,
                                         //icon: icons[feature.type].icon,
                                         icon: image,
                                         size: new google.maps.Size(1, 1),
                                         map: map
                                        });
    //markers.push(marker);//push in array
  }

  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }
}

