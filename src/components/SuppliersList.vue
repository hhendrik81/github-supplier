<template>
  <div>
    <h1>Liste des Fournisseurs</h1>
    <br />
    <Supplier
      v-for="supplier in suppliers"
      :key="supplier.id"
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
    />
  </div>
</template>

<script>
import Supplier from './Supplier.vue';
import axios from 'axios'

export default {
  name: 'SuppliersList',
  components: {
    Supplier,
  },
  data() {
    return {
      suppliers: [],
    }
  },
   mounted () {
    axios
      .get('https://api-suppliers.herokuapp.com/api/suppliers')
      .then(response => (this.suppliers = response))
  }
};
</script>

<style></style>
