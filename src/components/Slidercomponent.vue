<template>
  <b-carousel
    id="carousel-1"
    controls
    indicators
    background="#ababab"
    :interval="4000"
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      v-for="(slide, index) in slides"
      :key="index"
      :caption="slide.caption"
      :img-src="slide.imgSrc"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "SliderComponent",
  data() {
    return {
      slides: [
        {
          caption: "Ricette vegane per una vita sana",
          imgSrc: "https://via.placeholder.com/1024x480",
        },
        {
          caption: "Piatto del giorno: Insalata di Quinoa",
          imgSrc: "https://via.placeholder.com/1024x480",
        },
        {
          caption: "Tofu alla Griglia",
          imgSrc: "https://via.placeholder.com/1024x480",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Stili personalizzati per il carousel se necessari */
</style>
