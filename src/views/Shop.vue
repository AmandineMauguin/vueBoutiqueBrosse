<template>
  <div id="bigDiv">
    <h1 class="w3-center">Bienvenue dans le magasin !</h1>
    <div class="w3-container" style="padding: 50px 16px" id="team">
      <div class="w3-row-padding">
        <div
          class="w3-col l3 m6 w3-margin-bottom"
          v-for="product in products"
          :key="product"
        >
          <div class="w3-card">
            <Product :product="product"></Product>
            <p>
              <button
                @click="addToCart(product)"
                class="w3-button w3-light-grey w3-block"
                style=""
              >
                <i class="fa fa-shopping-cart"></i> Ajouter au panier !
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      products: this.$store.state.products,
    };
  },
  methods: {
    // ENVOIE DE MON PRODUCT DANS MA LISTE CART SE TROUVANT DANS MON STORE
    // Ainsi je peux facilement récupérer mes données Cart et les afficher dans mon component. 
    addToCart(product) {
      this.$store.state.cart.push(product);
    },
  },
  computed: {},
};
</script> 

<style scoped>
</style>