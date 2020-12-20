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
      <nav class="w3-bar w3-third nav">
        <ul>
          <li class="w3-bar-item w3-right">
            <!--------------------COMPOSANT BOUTON PANIER -------------------------->
            <!-- app -->
            <button
              id="CartBtn"
              onclick="document.getElementById('britModal').style.display='block'"
              class="w3-margin-right w3-button w3-2020-rose-tan w3-border-0 w3-hover-white w3-right"
            >
              <span>Panier</span>
            </button>
            <div id="britModal" class="w3-modal">
              <div class="w3-modal-content w3-padding-64">
                <div class="w3-container">
                  <a
                    href="#0"
                    class="cd-popup-close img-replace w3-closebtn w3-xxxlarge"
                    onclick="document.getElementById('britModal').style.display='none'"
                    >&times;>Close</a
                  >
                  <Cart></Cart>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
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
      cart: [],
      totalPrix: 0,
      prix: 0,
      title: "Mon Site kilétrokool",
    };
  },
  methods: {},
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