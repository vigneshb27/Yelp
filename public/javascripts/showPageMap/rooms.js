mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10', // stylesheet location
    center: room.geometry.coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
});

const mediaQuery = window.matchMedia('(min-width: 480px)');
if (mediaQuery.matches) {

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(room.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${room.title}</h3><p>${room.location}</p>`
            )
    )
    .addTo(map)
}
else{
    new mapboxgl.Marker()
    .setLngLat(room.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
        
    )
    .addTo(map)
}