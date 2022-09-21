
  var map = L.map('map').setView( [40.110103, -88.227232] , 18);
  //ttest
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Pinto = L.Icon.extend({
  options: {
     iconSize:     [38, 95],
     shadowSize:   [50, 64],
     iconAnchor:   [22, 94],
     shadowAnchor: [4, 62],
     popupAnchor:  [-3, -76]
  }
});

var Icon = new LeafIcon({
  iconUrl: 'pinto.psd',
  shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
})

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
  
var marker = L.marker([40.110103, -88.227232],{icon:Icon} ).addTo(map);

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
      
    if (err) throw err;
})
/*
function erase() {
  markers.clearLayers();
}
setTimeout(erase, 172,908,000)*/


