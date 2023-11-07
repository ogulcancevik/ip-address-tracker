<template>
  <div v-if="ipGeoData" class="flex flex-col w-full">
    <IpSection :ipGeoData="ipGeoData" />
    <Map :lat="ipGeoData.latitude" :lng="ipGeoData.longitude" />
  </div>
</template>
<script>
import { fetchIpGeolocation } from './services/ipgeolocation.service'
import IpSection from './components/IpSection.vue'
import Map from './components/Map.vue'
export default {
  components: { IpSection, Map },
  data() {
    return {
      ipGeoData: null
    }
  },
  mounted() {
    this.fetchIpGeolocation()
  },
  methods: {
    async fetchIpGeolocation() {
      const data = await fetchIpGeolocation()
      this.ipGeoData = data
    }
  }
}
</script>
