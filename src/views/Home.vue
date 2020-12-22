<template>
<div class="w3-container w3-light-grey" style="padding:128px 16px">
  <div class="w3-row-padding">
    <div class="w3-col m6">
      <h3>L'espace, on connait. </h3>
      <p>Suivez-nous jusqu'au bout de l'univers (avec Rick & Morty...)</p>
      
    </div>
    <div class="w3-col m6">
       <Carousel  :listeImgCarousel="liste"></Carousel>
    </div>
  </div>
</div>
 
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
  props: {
    liste: {
      type: Array,
    },
  },
  
  components:{ Carousel},
  name: "Home",
  data() {
    return {
      data: this.$store.state.name
    };
  },
  methods: {
  },
  computed: {
  },
};
</script> 

<style scoped>
</style>