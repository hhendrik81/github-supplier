<template>
  <div>
    <h1>Carte des Fournisseurs</h1>
    <div id="map">
       <Map
      v-for="marker in markers"
      :key="marker.id"
      :latitude="marker.latitude"
      :longitude="marker.longitude"
      />
      <l-map>
        <l-marker v-for="supplier in suppliers" :key="supplier.id" :latitude="supplier.latitude" :longitude="supplier.longitude" >

        </l-marker>
      </l-map>
    </div>
   
  </div>
</template>

<script>

import leaflet from "leaflet"
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';
import Map from './Map.vue';



export default {
  name: 'SuppliersMap',

  components: {
    Map
  },
  setup() {
    let mymap;

    onMounted(() => {
      mymap = leaflet.map('map').setView([45.566669, 5.917781], 13);
      var marker = leaflet.marker([45.566669, 5.917781]).addTo(mymap);

      leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGhlbmRyaWsiLCJhIjoiY2t2aTR0NHYzNDJ0YzJxb2szaXA3dTIxbiJ9.HVCi6xRL3rCqnE-Sb1OkkA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGhlbmRyaWsiLCJhIjoiY2t2aTR0NHYzNDJ0YzJxb2szaXA3dTIxbiJ9.HVCi6xRL3rCqnE-Sb1OkkA'
      })
      .addTo(mymap);
    })
  },

  data () {
    return {
       markers: [],

    }     
  },
   async mounted () {
    await axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
      .then(response => (this.markers = response.data))
  }
  
};
</script>

<style>

  #map { 
   height: 100vh;
  }

</style>
