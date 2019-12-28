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
    map.setZoom(9);
    map.panTo(marker.position);
  })

  $('#fiannafail').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 53.3406,
        lng: -6.2539
      },
      map: map
    });
    map.setZoom(13);
    map.panTo(marker.position);
  })

  $('#stormont').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.6040,
        lng: -5.8328
      },
      map: map
    });
    map.setZoom(13);
    map.panTo(marker.position);
  })

  $('#constitution').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 53.3600,
        lng: -6.3172
      },
      map: map
    });
    map.setZoom(10);
    map.panTo(marker.position);
  })

  $('#blitz').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.600123,
        lng: -5.927647
      },
      map: map
    });
    map.setZoom(15);
    map.panTo(marker.position);
  })

  $('#acts').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 51.4975,
        lng: -0.1357
      },
      map: map
    });
    map.setZoom(7);
    map.panTo(marker.position);
  })

  $('#civilrights').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.504626,
        lng: -6.769228
      },
      map: map
    });
    map.setZoom(11);
    map.panTo(marker.position);
  })

  $('#bloodysunday').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.996304,
        lng: -7.326277
      },
      map: map
    });
    map.setZoom(15);
    map.panTo(marker.position);
  })

  $('#gfa').click(function() {
    var marker = new google.maps.Marker({
      position: {
        lat: 54.350077,
        lng: -6.655327
      },
      map: map
    });
    map.setZoom(15);
    map.panTo(marker.position);
  })
}
