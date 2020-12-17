<template>
  <div id="nav" class="w3-container w3-teal">
    <nav class="w3-bar w3-twothird">
      <ul>
        <li class="w3-bar-item">
          <router-link class="router" :to="{ name: 'Home' }"
            ><i id="routerHome" class="fa fa-home"></i>La maison</router-link
          >
        </li>
        <li class="w3-bar-item">
          <router-link class="router" :to="{ name: 'Shop' }"
            ><i class="fa fa-shopping-bag"></i>Le magasin</router-link
          >
        </li>
        <li class="w3-bar-item">
          <router-link class="router" :to="{ name: 'Contact' }"
            ><i class="fa fa-paper-plane"></i>Ecrivez-nous(moi..)</router-link
          >
        </li>
      </ul>
    </nav>
    <nav class="w3-bar w3-third">
      <ul>
        <li class="w3-bar-item w3-right">
          <i class="fa fa-shopping-ba fa-3x"></i>
          Cart
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {};
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
  font-size: 2em;
}

</style>