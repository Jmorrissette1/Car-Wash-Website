let map;
let map1;
let map2;

function initMap() {

  // Silverdale Map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.65388, lng: -122.679992},
    zoom: 17,
    disableDefaultUI: true,
  });
  // Poulsbo Map
  map1 = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: 47.75531, lng: -122.66122},
    zoom: 18,
    disableDefaultUI: true,
  });
   // Coming Soon Map
   map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 47.54494, lng: -122.676122},
    zoom: 17,
    disableDefaultUI: true,
  });
  
}







initMap();
