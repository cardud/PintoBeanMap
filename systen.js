var map = L.map('map', {
    center: [40.1020, 88.2272],
    zoom: 13
  });
  //ttest
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
  
var marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

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

map.on('click', function(evt) {
  var coord = [evt.latlng.lat, evt.latlng.lng];
  L.marker(coord).addTo(map);
  savedMarkers.push(coord);
  sessionStorage.setItem('savedMarkers', JSON.stringify(savedMarkers));
});
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

