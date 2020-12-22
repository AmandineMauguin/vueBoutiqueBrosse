<template>
  
    <img :src="product.image" style="width: 100%" alt="productsImage" />
    <div class="w3-container">
      <h3>{{ product.name }}</h3>
      <p class="w3-opacity">{{ product.prix }}$</p>
      <p v-if="product.stock == 0">A pu.</p>
      <p v-else>{{ product.stock }} produits encore en stock !</p>
      
    
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
  },
  computed: {},
};
</script> 

<style scoped>
</style>