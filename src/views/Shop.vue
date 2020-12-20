<template>
  <div id="bigDiv">
    <h1 class="w3-center">Bienvenue dans le magasin !</h1>
    <div class="w3-container" style="padding: 50px 16px " id="team">
      <div class="w3-row-padding">
        <div
          class="w3-col l3 m6 w3-margin-bottom"
          v-for="product in products"
          :key="product"
        >
          <Product :product="product"></Product>
        </div>
      </div>
    </div>
  </div>
  ∑
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      cart: [],
      products: [
        {
          name: "Brosse à dent noire",
          prix: 12,
          image: require("../assets/space1.jpg"),
          stock: 0,
          hovered: null,
        },
        {
          name: "Brosse à dent bleue",
          prix: 10,
          image: require("../assets/space2.jpg"),
          stock: 12,
          hovered: null,
        },
        {
          name: "Brosse à dent jaune",
          prix: 5,
          image: require("../assets/space3.jpg"),
          stock: 12,
          hovered: null,
        },
        {
          name: "Brosse à dent verte",
          prix: 16,
          image: require("../assets/space4.jpg"),
          stock: 12,
          hovered: null,
        },
        {
          name: "Brosse à dent violette",
          prix: 16,
          image: require("../assets/space5.jpg"),
          stock: 12,
          hovered: null,
        },
        {
          name: "Brosse à dent rouge",
          prix: 16,
          image: require("../assets/space6.jpg"),
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
</style>