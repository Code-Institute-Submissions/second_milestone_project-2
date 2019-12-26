function initMap() {
  // Map options
  var options = {
    zoom: 7,
    center: {
      lat: 54.5973,
      lng: -5.9301
    }
  }

  var map = new google.maps.Map(document.getElementById('map'), options);

  $('#ww1').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.599105,
        lng: -5.899962
      },
      map: map
    });
    map.setZoom(15);
    map.panTo(marker.position);
  })




  $('#partition').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.113769,
        lng: -6.365088
      },
      map: map
    });
    map.setZoom(12);
    map.panTo(marker.position);
  })

  $('#ww1').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.599105,
        lng: -5.899962
      },
      map: map
    });
    map.setZoom(15);
    map.panTo(marker.position);
  })

  $('#Fianna Fáil').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.599105,
        lng: -5.899962
      },
      map: map
    });
    map.setZoom(15);
    map.panTo(marker.position);
  })

  $('#ww1').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.599105,
        lng: -5.899962
      },
      map: map
    });
    map.setZoom(15);
    map.panTo(marker.position);
  })

  $('#ww1').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.599105,
        lng: -5.899962
      },
      map: map
    });
    map.setZoom(15);
    map.panTo(marker.position);
  })


}
