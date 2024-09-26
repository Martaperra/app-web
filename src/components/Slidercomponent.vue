<template>
  <b-carousel
    id="carousel-1"
    controls
    indicators
    background="#ababab"
    interval="4000"
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
  data() {
    return {
      slides: [
        { caption: "Slide 1", imgSrc: "https://via.placeholder.com/1024x480" },
        { caption: "Slide 2", imgSrc: "https://via.placeholder.com/1024x480" },
        { caption: "Slide 3", imgSrc: "https://via.placeholder.com/1024x480" },
        { caption: "Slide 4", imgSrc: "https://via.placeholder.com/1024x480" },
      ],
    };
  },
};
</script>
