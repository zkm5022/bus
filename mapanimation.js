//Map Token
mapboxgl.accessToken = 'pk.eyJ1IjoiemttNTAyMiIsImEiOiJjbDBsdHNld2owem10M2RtZzZyZTc4cmc0In0.xcZgIkhpIJI1PmYDRIKxRQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 12,
});

var center = [-71.104081, 42.365554]
  var marker0 = new mapboxgl.Marker()
  var marker1 = new mapboxgl.Marker()
  var marker2 = new mapboxgl.Marker()
  var marker3 = new mapboxgl.Marker()
  var marker4 = new mapboxgl.Marker()
  var marker5 = new mapboxgl.Marker()

    marker0.setLngLat(center)
    .addTo(map)

    marker1.setLngLat(center)
    .addTo(map)

    marker2.setLngLat(center)
    .addTo(map)

    marker3.setLngLat(center)
    .addTo(map)

    marker4.setLngLat(center)
    .addTo(map)

    marker5.setLngLat(center)
    .addTo(map)

//Extract the location of each bus and refresh location every 15s
async function run(){
  const locations = await getBusLocations()
  console.log(new Date());
  console.log(locations);
  const c0 = [locations[0].attributes.longitude, locations[0].attributes.latitude]
  const c1 = [locations[1].attributes.longitude, locations[1].attributes.latitude]
  const c2 = [locations[2].attributes.longitude, locations[2].attributes.latitude]
  const c3 = [locations[3].attributes.longitude, locations[3].attributes.latitude]
  const c4 = [locations[4].attributes.longitude, locations[4].attributes.latitude]
  const c5 = [locations[5].attributes.longitude, locations[5].attributes.latitude]
    
    marker0.setLngLat(c0)
    marker1.setLngLat(c1)
    marker2.setLngLat(c2)
    marker3.setLngLat(c3)
    marker4.setLngLat(c4)
    marker5.setLngLat(c5)
    
  //timer
  setTimeout(run,15000);
}
//Fetch data from api
async function getBusLocations(){
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json = await response.json()
  return json.data;
}

run();

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
