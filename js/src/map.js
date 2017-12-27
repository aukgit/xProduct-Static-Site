var Map = function() {
  var googleMapStyle;
  var googleMapType;
  var googleMapOptions;
  var googleMapIcon;
  var map;
  var init = function() {
    googleMapIcon = "img/xp.map.pin.png";
    googleMapStyle = [{
      elementType: "geometry",
      stylers: [{
        color: "#212121"
      }]
    }, {
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    }, {
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#212121"
      }]
    }, {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#9e9e9e"
      }]
    }, {
      featureType: "administrative.land_parcel",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#bdbdbd"
      }]
    }, {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{
        color: "#181818"
      }]
    }, {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#616161"
      }]
    }, {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#1b1b1b"
      }]
    }, {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{
        color: "#2c2c2c"
      }]
    }, {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 35
      }]
    }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 17
      }]
    }, {
      featureType: "road.arterial",
      elementType: "labels.text.stroke",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{
        color: "#3c3c3c"
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 17
      }]
    }, {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [{
        color: "#4e4e4e"
      }]
    }, {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 40
      }]
    }, {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#757575"
      }]
    }, {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      }, {
        lightness: 10
      }]
    }, {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#3d3d3d"
      }]
    }];
    renderMap([23.7782076, 90.4213999], 16, "map");
    plotMapPoint(23.7782076, 90.4213999, "https://www.google.com/maps/place/xProduct/@23.7782076,90.4213999,19.5z/data=!4m5!3m4!1s0x3755c79a7ad38bc1:0xcd7754c523f2a244!8m2!3d23.7781679!4d90.4213681?hl=en-AU");
  };
  var renderMap = function(center, zoom, element) {
    if ($("#" + element).length == 0) return;
    googleMapType = new google.maps.StyledMapType(googleMapStyle, {
      name: "xProduct"
    });
    googleMapOptions = {
      zoom: zoom,
      disableDefaultUI: true,
      mapTypeControl: false,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      center: new google.maps.LatLng(center[0], center[1]),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN, "xProduct"]
      }
    };
    map = new google.maps.Map(document.getElementById(element), googleMapOptions);
    map.mapTypes.set("xProduct", googleMapType);
    map.setMapTypeId("xProduct");
  };
  var plotMapPoint = function(lat, lng, url) {
    var googleMapMarker = new google.maps.Marker({
      url: url,
      map: map,
      position: new google.maps.LatLng(lat, lng),
      icon: googleMapIcon
    });
    googleMapMarker.setMap(map);
    google.maps.event.addListener(googleMapMarker, "click", function() {
      window.open(googleMapMarker.url);
    });
  };
  init();
}
