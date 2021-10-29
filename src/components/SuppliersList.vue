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

export default {
  name: 'SuppliersList',
  components: {
    Supplier,
  },
  data() {
    return {
      suppliers: [
        {
          id: 1,
          name: 'Mon Fournisseur 1',
          status: true,
          checkedAt: new Date(),
        },
        {
          id: 2,
          name: 'Mon Fournisseur 2',
          status: false,
          checkedAt: new Date(),
        },
      ],
    };
  },
};
</script>

<style></style>
