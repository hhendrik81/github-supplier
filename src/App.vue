<template>
  <div id="app">
    <h1>Que voulez vous faire ?</h1>
    <nav class="">
      <!-- <div>
        <img src="https://static.wixstatic.com/media/77ef90_83b08bc69f2644a3b16483e8e0e8cfcf~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_4.00_1.00_0.00/logo_native%20copie.webp" alt="">
      </div> -->
      <div class="">
        <router-link class="px-2 py-1 text-black font-semibold rounded hover:bg-v-color" to="/">Home </router-link>
        <router-link class="mt-1  px-2 py-1 text-black font-semibold rounded hover:bg-v-color sm:mt-0 sm:ml-2" to="/suppliers">Consulter la liste des fournisseurs </router-link>
        <router-link class="mt-1 px-2 py-1 text-black font-semibold rounded hover:bg-v-color sm:mt-0 sm:ml-2" to="/map">Voir la carte</router-link>
        <router-view></router-view>
      </div>
    </nav>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import SuppliersList from './components/SuppliersList.vue';
import SuppliersMap from './components/SuppliersMap.vue';
import Supplier from './components/Supplier.vue';
import Map from './components/Map.vue';

export default {
  name: 'App',
  components: {
    Home,
    SuppliersList,
    SuppliersMap,
    Supplier,
    Map
  },
  methods: {
    onSuppliersListClick() {
      alert('hello');
    },
    onMapClick() {
      alert('coucou');
    },
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link-menu{
  background-color: #4fc08d;
  margin: 10px;
  padding: 10px;
}
</style>