// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiY2x3MDA5IiwiYSI6ImNtN2QwNHJzeTBoZWwycXE0NW9wZ3g1dmMifQ.HQI22soqHKFD59sv08R5HQ';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/clw009/cm7d0etnb007601rg7fo819o9', // Map style
  center: [-71.09415, 42.36027], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18 // Maximum allowed zoom
});
console.log('map loaded');
