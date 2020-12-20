<template>
  <h1></h1>
  <div class="container">
    <table class="w3-table w3-white">
      <tr>
        <th>Produit</th>
        <th>Prix</th>
      </tr>
      <!-- <tr v-for="(item, name, prix) in cart" :key="item">
         <td>{{item.name}}</td>
        <td>{{item.prix}}</td>
      </tr> -->
      <tr>
        <td>La ristourne ?</td>
        <td>
          <input
            placeholder="Tente ta chance :v"
            type="text"
            v-model="codeReduc"
          />
          <p v-if="codeReduc === 'reduc'">- 2 ¥ ! IncroyaB !</p>
        </td>
      </tr>
      <tr>
        <th>Total</th>
        <th>Le total</th>
      </tr>
    </table>
  </div>
</template>

<script>
// import EventBus from "../eventbus";
export default {
  name: "Cart",

  data() {
    return {
      codeReduc: "",
      reduc: 2,
      totalAvecRistourne: "",
      cart: [],
      totalPrix: 0,
      title: "Mon Site kilétrokool",
    };
  },
  methods: {},
  computed: {},
  mounted() {
    // EventBus.$on("retrieveCart", function (cart) {});
  },
};
</script> 

<style scoped>
table {
  width: 100%;
}
</style>