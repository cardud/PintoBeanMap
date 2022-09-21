
  var map = L.map('map').setView( [40.110103, -88.227232] , 20);
  //ttest
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var pinto = L.icon({
  iconUrl: 'leaf-green.png',
  shadowUrl: 'leaf-shadow.png',

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
  
var marker = L.marker([40.110103, -88.227232] ).addTo(map);
marker.bindPopup("<b>click anywhere on map to get cooridnates of point.").openPopup();

/*
function newPoint( lat, lon,  time){
  var marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup("<b>Pintobean was seen here at:" + time).openPopup();
}*/

//////////////////////////////////////////////////////////
var savedMarkers = sessionStorage.getItem('savedMarkers');
if (savedMarkers) {
  var coords = JSON.parse(savedMarkers);
  coords.forEach(function(coord) {
    L.marker(coord).addTo(map);
  });
  }
else {
  savedMarkers = [];
}

/*
map.on('click', function(evt) {
  var coord = [evt.latlng.lat, evt.latlng.lng];
  L.marker(coord).addTo(map);
  savedMarkers.push(coord);
  sessionStorage.setItem('savedMarkers', JSON.stringify(savedMarkers));
});*/
///////////////////////////////////////////////////////////////////

// Requiring fs module in which
// writeFile function is defined.
const fs = require('fs')
  
// Data which will write in a file.
let data = JSON.stringify(savedMarkers)
  
// Write data in 'Output.txt' .
fs.writeFile('Output.txt', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})

function erase() {
  markers.clearLayers();
}
setTimeout(erase, 172,908,000)


