<template>
  <div class="supplier">
    <h1>{{ name }}</h1>
    <h2 class="stock" v-bind:class="{ 'stockOk': status }">
      Stock: {{ status }}
    </h2>
    <h3>Date de dernière relevé des stock: {{ checkedAt.toLocaleString() }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Supplier',
  props: [
    'name', 'status', 'checkedAt','latitude', 'longitude'
  ]
} 
</script>

<style>
.stock {
  color: red;
}
.stockOk {
  color: green;
}
</style>
