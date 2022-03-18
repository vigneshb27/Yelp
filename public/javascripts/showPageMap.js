mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 4 // starting zoom
});