<template>
  <b-carousel controls indicators>
    <b-carousel-slide v-for="(recipe, index) in recipes" :key="index">
      <img :src="recipe.imgSrc" class="d-block w-100" alt="Recipe Image" />
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ recipe.name }}</h5>
      </div>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        {
          name: "Polpette di ceci e barbabietola",
          imgSrc: require("@/assets/PolpetteImage.jpg"),
        },
        {
          name: "Lasagna vegana",
          imgSrc: require("@/assets/LasagnaImage.jpg"),
        },
        { name: "Gozleme", imgSrc: require("@/assets/GozlemeImage.jpg") },
      ],
    };
  },
};
</script>

<style>
/* Stili personalizzati per lo slider */
.carousel-caption h5 {
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}
</style>
