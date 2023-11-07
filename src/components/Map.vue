<template>
  <div id="map"></div>
</template>
<script>
import L from 'leaflet'
export default {
  name: 'Map',
  props: {
    lat: {
      type: String,
      required: true
    },
    lng: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.createMap()
    this.addMarker()
  },
  methods: {
    createMap() {
      this.map = L.map('map').setView([this.lat, this.lng], 15)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(this.map)
    },
    addMarker() {
      L.marker([this.lat, this.lng]).addTo(this.map)
    }
  }
}
</script>
<style>
#map {
  height: 65vh;
}
</style>
