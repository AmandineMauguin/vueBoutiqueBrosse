<template>
<div class="w3-container w3-light-grey" style="padding:128px 16px">
  <div class="w3-row-padding">
    <div class="w3-col m6">
      <h3>L'espace, on connait. </h3>
      <p>Suivez-nous jusqu'au bout de l'univers ! 
        Langoureux dit mon corps d'une ce elle, qu'elle fin magnifique et pourquoi regard l'elégance l'abri yeux corps. Soeurs d'un beauté.
      </p>
      
    </div>
    <!-- INTEGRATION DU CAROUSEL AVEC UNE PROPS -->
    <div class="w3-col m6">
       <Carousel  :listeImgCarousel="liste"></Carousel>
    </div>
  </div>
</div>
 
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
  // PROPS QUI RECUPERE LA LISTE D'IMG DE MON PRODUIT 
  // J'aurais aussi pu utiliser le store, étant donné qu'il s'agit des mêmes img, mais je l'avais en 
  //props avant d'avoir mon store alors... 
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