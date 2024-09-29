<template>
  <div>
    <HeroComponent />
  </div>
  <div>
    <CardHome />
  </div>
</template>

<script>
import HeroComponent from "@/components/HeroComponent.vue";
import CardHome from "@/components/CardHome.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    CardHome,
  },
};
</script>

<style></style>
