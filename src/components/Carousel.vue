<template>
<!------------------- CAROUSEL PRESENT SUR LA HOME PAGE ---------------------->
  <div class="container w3-center">
    <div class="mySlides w3-display-container">
      <button
        @click="decreaseCount()"
        class="w3-button w3-display-left w3-white"
      >
        <i class="fa fa-angle-left"></i>
      </button>
      <img
        :src="showImg()"
        class="w3-image w3-round-large"
        width="700"
        height="394"
      />
      <button @click="addCount()" class="w3-button w3-display-right w3-white">
        <i class="fa fa-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      count: 0,
      listeImgCarousel: [
        {
          image: require("../assets/space1.jpg"),
        },

        {
          image: require("../assets/space2.jpg"),
        },
        {
          image: require("../assets/space3.jpg"),
        },
        {
          image: require("../assets/space4.jpg"),
        },
        {
          image: require("../assets/space5.jpg"),
        },
        {
          image: require("../assets/space6.jpg"),
        },
      ],
    };
  },
  methods: {
    slideShow() {},
    showImg() {
      while (this.count < 0) {
        this.count += this.listeImgCarousel.length;
      }
      while (this.count > this.listeImgCarousel.length - 1) {
        this.count -= this.listeImgCarousel.length;
      }
      return this.listeImgCarousel[this.count].image;
    },

    addCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
  },
  mounted() {
    setInterval(this.addCount, 5000);
  },
  computed: {},
};
</script> 

<style scoped>
.bgimg-1 {
  background-position: center;
  background-size: cover;
  min-height: 100%;
}

.w3-bar .w3-button {
  padding: 16px;
}
</style>