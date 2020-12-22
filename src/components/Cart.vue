<template>
  <h1></h1>
  <div class="container">
    <table class="w3-table w3-white">
      <tr>
        <th>Produit</th>
        <th>Prix</th>
      </tr>
      <tr v-for="item in cart" :key="item">
        <td>{{ item.name }}</td>
        <td>{{ affichePrix(item.prix) }} $</td>
      </tr>
      <tr>
        <td>La ristourne ?</td>
        <td>
          <input
            placeholder="Tente ta chance :v"
            type="text"
            v-model="codeReduc"
          />
          <p v-if="codeReduc === 'reduc'">- 2 $ ! IncroyaB !</p>
        </td>
      </tr>
      <tr>
        <th>Total</th>
        <th v-if="codeReduc === 'reduc'">
          {{ affichePrix(totalPrix) }} - {{ reduc }} =
          {{ affichePrix(totalPrix) - 2 }} $
        </th>
        <th v-else>{{ affichePrix(totalPrix) }} $</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Cart",

  data() {
    return {
      codeReduc: "",
      reduc: 2,
      cart: this.$store.state.cart,
      totalPrix: 0,
      title: "Mon Site kilétrokool",
    };
  },
  methods: {
    affichePrix(prix) {
      let prixCalcul = prix.toString();
      console.log(prix);
      console.log(prixCalcul);
      let prixAffichage = "";
      for (let i = prixCalcul.length - 1; i >= 0; i--) {
        prixAffichage += prixCalcul[i];
        if (i - 1 >= 0) {
          prixAffichage += prixCalcul[i - 1];
          if (i - 2 >= 0) {
            prixAffichage += prixCalcul[i - 2];
          }
        }
        prixAffichage += " ";
        i = i - 2;
      }
      return prixAffichage.split("").reverse().join("");
    },
  },
  computed: {},
  beforeUpdate() {
    this.totalPrix = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.totalPrix += this.cart[i].prix;
    }
  },
};
</script> 

<style scoped>
</style>