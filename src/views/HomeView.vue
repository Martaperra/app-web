<template>
  <div>
    <HeroComponent />
    <CardHome></CardHome>
    <ScrollToTop></ScrollToTop>
  </div>
</template>

<script>
import HeroComponent from "@/components/HeroComponent.vue";
import CardHome from "@/components/CardHome.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    CardHome,
    ScrollToTop,
  },
};
</script>

<style></style>
