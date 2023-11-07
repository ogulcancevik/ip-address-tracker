<template>
  <div class="relative">
    <img :src="bgImage" alt="background" class="object-cover w-full h-[35vh]" />
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 items-center"
    >
      <div class="text-4xl text-white text-center capitalize">ip address tracker</div>
      <div
        class="bg-white py-4 w-96 lg:w-72 rounded-lg shadow-lg text-center text-xl text-gray-900"
      >
        {{ ipGeoData.ip }}
      </div>
      <div
        class="bg-white py-4 w-[420px] lg:w-[350px] sm:!w-[250px] rounded-lg shadow-lg text-center text-xl text-gray-900"
      >
        <span class="text-gray-800 text-sm uppercase font-medium">Location</span>
        <div class="flex flex-col gap-2 justify-center items-center">
          <span>{{ ipGeoData.country_name }} - {{ ipGeoData.city }}</span>
          <img :src="ipGeoData.country_flag" :alt="ipGeoData.country_name" class="object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ipGeoData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      width: window.innerWidth
    }
  },
  computed: {
    bgImage() {
      return this.width > 586 ? 'assets/pattern-bg-desktop.png' : 'assets/pattern-bg-mobile.png'
    }
  },
  created() {
    window.addEventListener('resize', this.resize)
  },
  unmounted() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize(e) {
      this.width = e.target.innerWidth
    }
  }
}
</script>
<style lang=""></style>
