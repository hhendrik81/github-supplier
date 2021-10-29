<template>
  <div id="app">
    <h1>Que voulez vous faire ?</h1>
    <nav>
      <router-link class="link-menu" to="/">Home </router-link>
      <router-link class="link-menu" to="/suppliers">Consulter la liste des fournisseurs </router-link>
      <router-link class="link-menu" to="/map">Voir la carte</router-link>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import SuppliersList from './components/SuppliersList.vue';
import SuppliersMap from './components/SuppliersMap.vue';
import Supplier from './components/Supplier.vue';

export default {
  name: 'App',
  components: {
    Home,
    SuppliersList,
    SuppliersMap,
    Supplier
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