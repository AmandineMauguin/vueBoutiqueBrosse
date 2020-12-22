<template>
  <!-------------------- NAV BAR -------------------------->
  <header>
    <div id="navBar" class="w3-container w3-black">
      <nav class="w3-bar w3-twothird nav">
        <ul>
          <li class="w3-bar-item w3-button w3-mobile">
            <router-link class="router" :to="{ name: 'Home' }"
              ><i id="routerHome" class="fa fa-home"></i>La maison</router-link
            >
          </li>
          <li class="w3-bar-item w3-button w3-mobile">
            <router-link class="router" :to="{ name: 'Shop' }"
              ><i class="fa fa-shopping-bag"></i>Le magasin</router-link
            >
          </li>
          <li class="w3-bar-item w3-button w3-mobile">
            <router-link class="router" :to="{ name: 'Contact' }"
              ><i class="fa fa-paper-plane"></i>Ecrivez-nous(moi..)</router-link
            >
          </li>
        </ul>
      </nav>
      <!-------------- FIN PREMIERE BAR NAV -------------->

      <!------------------- NAV BAR PANIER ---------------------->
      <nav class="w3-bar w3-third nav">
        <ul>
          <li class="w3-bar-item w3-right">
            <div>
              <a
                class="w3-right w3-button w3-bar-item"
                @click="reversePanier()"
              >
                ({{ cart.length }})Panier</a
              >
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="w3-animate-top w3-right w3-card"
      style="margin: 0px 10px 10px 10px"
      v-show="displayPanier"
    >
      <Cart></Cart>
    </div>
  </header>
  <!-------------------------------- FIN BAR NAV --------------------------->
</template>


<script>
import Cart from "./Cart.vue";
export default {
  name: "Header",
  components: { Cart },
  data() {
    return {
      cart: this.$store.state.cart,
      title: "Mon Site kilétrokool",
      displayPanier: false,
    };
  },
  methods: {
    reversePanier() {
      this.displayPanier = !this.displayPanier;
    },
  },
  computed: {},
};
</script> 

<style scoped>
.router {
  text-decoration: none;
  font-weight: bold;
}

i {
  font-size: 1.5em;
  margin: 5px;
}

#routerHome {
  font-size: 1.5em;
}
span {
  font-weight: bold;
}

.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-vue .modal {
  position: relative;
  width: 300px;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: #fff;
}

.modal-vue .close {
  position: absolute;
  top: 10px;
  right: 10px;
}

.cd-popup-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
}

.cd-popup-close::before,
.cd-popup-close::after {
  content: "";
  position: absolute;
  top: 12px;
  width: 14px;
  height: 3px;
  background-color: #8f9cb5;
}
.cd-popup-close::before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 8px;
}
.cd-popup-close::after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  right: 8px;
}
.img-replace {
  /* replace text with an image */
  display: inline-block;
  overflow: hidden;
  text-indent: 100%;
  color: transparent;
  white-space: nowrap;
}

#CartBtn {
  border-radius: 5px;
}
</style>