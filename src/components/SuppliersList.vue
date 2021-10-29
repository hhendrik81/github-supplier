<template>
  <div>
    <h1>Liste des Fournisseurs</h1>
    <br />
    <!-- <Supplier
      v-for="supplier in suppliers"
      :key="supplier.id"
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
    /> -->
  </div>
</template>

<script>
import Supplier from './Supplier.vue';

export default {
  name: 'SuppliersList',
  components: {
    Supplier
  },
   
  
}
</script>

<style></style>
