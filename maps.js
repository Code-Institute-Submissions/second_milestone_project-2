function initMap(){
  // Map options
  var options = {
    zoom:7,
    center:{lat:54.5973,lng:-5.9301}
  }
  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Markers
  var marker = new google.maps.Marker({
    position:{}
  })
  var markers = [
    {
      coords:{lat:42.4668,lng:-70.9495},
      iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content:'<h1>Lynn MA</h1>'
    },
    {
      coords:{lat:42.8584,lng:-70.9300},
      content:'<h1>Amesbury MA</h1>'
    },
    {
      coords:{lat:42.7762,lng:-71.0773}
    }
  ];

}
