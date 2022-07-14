let stores = "";
function getStores() {
  fetch('data/features.json')
  .then(response => response.json())
  .then(data => {
    stores = data;

    /* Assign a unique ID to each store */
    stores.features.forEach(function (store, i) {
      store.properties.id = i;
    });
    /* Add the data to your map as a layer */
    map.addSource('places', {
      type: 'geojson',
      data: stores
    });
    addMarkers();
  });
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYm90dGxlYW5kYnJld2JhYnkiLCJhIjoiY2w0NW5qc3FlMDAzdTNkcDBkaG4xNXMyeCJ9.Tscd2VjIKdHJb1m7AHb8IQ';
var map = new mapboxgl.Map({
container: 'map',
cooperativeGestures: true,
style: 'mapbox://styles/bottleandbrewbaby/cl4oa3t0y000p16mh5ciqw6gb'
});

map.on('load', () => {
  getStores();
  map.resize();
});

/* Add Markers Function */
function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  for (const marker of stores.features) {
    /* Create a div element for the marker. */
    const el = document.createElement('div');
    /* Assign a unique `id` to the marker. */
    el.id = `marker-${marker.properties.id}`;
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'marker';

          /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
        el.addEventListener('click', (e) => {
          /* Fly to the point */
          flyToStore(marker);
          /* Close all other popups and display popup for clicked store */
          createPopUp(marker);
          /* Highlight listing in sidebar */
          const activeItem = document.getElementsByClassName('active');
          e.stopPropagation();
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          const listing = document.getElementById(`listing-${marker.properties.id}`);
          listing.classList.add('active');
        });
    }
  }