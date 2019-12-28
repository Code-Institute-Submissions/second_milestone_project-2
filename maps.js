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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>Memorial to the 36th Ulster Division</p> </div> <div id='contenttext'> Northern Ireland is famous for its murals. This one celebrating the sacrifices of the 36th Ulster division is fairly typical of Unionist murals in east Belfast.</div> <div> <img id='contentpic' src='pictures/36ulster.jpg' alt='Mural in East Belfast'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>The Irish border</p> </div> <div id='contenttext'> The border between Ireland and Northern Ireland has become somewhat famous thanks to Brexit, but it has been a point of contention for many years previously. Its length and porous nature make it notoriously difficult to police.</div> <div> <img id='contentpic' src='pictures/Irishborder.jpg' alt='A sign saying Welcome to Northern Ireland which has had the word Northern crossed out.'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>Eamon De Valera</p> </div> <div id='contenttext'> One of Irelands most famous Taoiseachs (Prime Minister) was Eamon de Valera, leader of Fianna Fáil. His anti-treaty stance at the end of the Irish Civil War earned him notoriety throughout his political career, which was marked by strong nationalist pricinples, Catholicism and an increasing distance from Britain.</div> <div> <img id='contentpic' src='pictures/Devalera.jpg' alt='Mural in East Belfast'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>Stormont parliament buildings</p> </div> <div id='contenttext'> These spectacular buildings are situated just outisde of Belfast.</div> <div> <img id='contentpic' src='pictures/Stormont.jpg' alt='Mural in East Belfast'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);

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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>Áras an Uachtaráin</p> </div> <div id='contenttext'> The Irish president lives in this building in Dublin's Phoenix park.</div> <div> <img id='contentpic' src='pictures/Aras.jpg' alt='Áras an Uachtaráin, the official residence of the Irish president'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>Bridge Street in the Belfast Blitz</p> </div> <div id='contenttext'> It has been argued that Belfast's devastation during the Blitz resulted in the relatively geographically remote province feeloig much closer to the conflict, especially as conscription had not been introduced due to local political sensitivities.</div> <div> <img id='contentpic' src='pictures/Bridgestreet.jpg' alt='Bridge street in Belfast after the Blitz'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>Westminster parliament</p> </div> <div id='contenttext'> Northern Ireland's government was not the ultimate authority in the province. Westminster could still technically overrule acts in the province (although never did so), and the nature of Northern Ireland's relationship with the UK was determined at Westminster.</div> <div> <img id='contentpic' src='pictures/Westminster.jpg' alt='Westminster parliament'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>Civil rights marches</p> </div> <div id='contenttext'> Civil Rights marches often became flashpoints of tensions between nationalists and unionists in Northern Ireland during the troubles. The first march organised by the Northern Ireland Civil Rights Association was between Coalisland and Dungannon town square.</div> <div> <img id='contentpic' src='pictures/civilrights.jpg' alt='A civil rights march in Northern Ireland'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>Bloody Sunday</p> </div> <div id='contenttext'> This picture of a priest waving a blook-soaked hankerchief as they escorted a fatally wounded protestor from the Bogside in Derry became an iconic image of nationalist perceptions of the violence of the Northern Irish state.</div> <div> <img id='contentpic' src='pictures/bloodysunday.jpg' alt='A priest waves a bloodsoaked flag as a wounded protestor is carried from the Bogside on Bloody Sunday'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
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

    var contentString = "<div id='mapscontentbox'> <div id='contentheader'> <p>The North-South Ministerial Council</p> </div> <div id='contenttext'> Organisations like the North-South Ministerial Council were created to help oversee the implementation of the Good Friday Agreement. As they often involve coordinating communication between the British and Irish government, these organisations may become increasingly important post-Brexit.</div> <div> <img id='contentpic' src='pictures/nsministerialcouncil.jpg' alt='The North South Ministerial Council in Armagh'</div>"
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(map, marker);
  })
}
