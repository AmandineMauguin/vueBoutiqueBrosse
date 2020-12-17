<template>
  <div class="w3-center">
  <div
    id="produit"
    class="container w3-col l4 m6 w3-padding w3-center"
    style="border-style: solid"
    v-for="product in products" :key="product"
  >
  <div id="padding">
    <img src="/src/assets/brosseNoir.jpg" />
    <div class="w3-container w3-center w3-border">
      <h3>{{product.name}}</h3>
      <h4>{{product.prix}}$</h4>
      
    </div>
    <div class="w3-center"><button>Add to cart !</button></div>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      products: [
{
name: "Brosse à dent noire",
prix: 12,
image: "/src/assets/brosseNoir.jpg",
stock: 0,
hovered: null,
},
{
name: "Brosse à dent bleue",
prix: 10,
image: "/src/assets/brosseBleue.jpg",
stock: 12,
hovered: null,
},
{
name: "Brosse à dent jaune",
prix: 5,
image: "/src/assets/brosseJaune.jpg",
stock: 12,
hovered: null,
},
{
name: "Brosse à dent verte",
prix: 16,
src: "/src/assets/brosseVerte.jpg",
stock: 12,
hovered: null,
},
],
    };
  },
  methods: {},
  computed: {},
};
</script> 

<style scoped>
#produit {
  width: 20%;
  height: 300px;
  margin: 20px;
}



button {
  margin:10px;
}
</style>