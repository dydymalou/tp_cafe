


 let map;

function initMap() {
 const mapOptions = {
   zoom: 8,
   center: { lat: 49.894067 , lng: 2.295753  },
 };

 map = new google.maps.Map(document.getElementById("map"), mapOptions);

 const marker = new google.maps.Marker({
   // The below line is equivalent to writing:
   // position: new google.maps.LatLng(-34.397, 150.644)
   position: { lat: 49.894067 , lng: 2.295753  },
   map: map,
 });
 // You can use a LatLng literal in place of a google.maps.LatLng object when
 // creating the Marker object. Once the Marker object is instantiated, its
 // position will be available as a google.maps.LatLng object. In this case,
 // we retrieve the marker's position using the
 // google.maps.LatLng.getPosition() method.
 const infowindow = new google.maps.InfoWindow({
   content: "<p> wesh venez on est cool promis</p>",
 });

 google.maps.event.addListener(marker, "click", () => {
   infowindow.open(map, marker);
 });
}
