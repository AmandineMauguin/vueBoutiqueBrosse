<template>
  <div class="w3-card">
    <img :src="product.image" style="width: 100%" alt="productsImage" />
    <div class="w3-container">
      <h3>{{ product.name }}</h3>
      <p class="w3-opacity">{{ product.prix }}$</p>
      <p v-if="product.stock == 0">A pu.</p>
      <p v-else>{{ product.stock }} produits encore en stock !</p>
      <p>
        <button class="w3-button w3-light-grey w3-block">
          <i class="fa fa-shopping-cart"></i> Ajouter au panier !
        </button>
      </p>
    </div>
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
    // addToCart(product) {
    //   this.cart.push(product);
    //   this.totalPrix += product.prix;
    //   console.log("Total : ", this.totalPrix);
    // },
  },
  computed: {},
};
</script> 

<style scoped>
</style>