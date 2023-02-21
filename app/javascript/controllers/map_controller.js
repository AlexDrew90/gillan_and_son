import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="map"
export default class extends Controller {

  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue
                const map = new mapboxgl.Map({
                    container: this.element,
                    style: 'mapbox://styles/mapbox/streets-v12', // style URL
                    center: [-2.223850, 53.509050], // starting position [lng, lat]
                    zoom: 9, // starting zoom
                });

                // Create a new marker, set the longitude and latitude, and add it to the map.
                const marker = new mapboxgl.Marker({
                  color: "#3c035d",
                  })
                .setLngLat([-2.223850, 53.509050])
                .addTo(map);
  }
}
