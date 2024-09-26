import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RicetteMaster from "../views/RicetteMaster.vue";
import RicetteDetail from "../views/RicetteDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/recipes", // Nuova rotta per la lista delle ricette
    name: "recipes",
    component: RicetteMaster, // Collega la vista RicetteMaster
  },
  {
    path: "/recipe/:id", // Rotta per la pagina di dettaglio della singola ricetta
    name: "recipe-detail",
    component: RicetteDetail,
    props: true, // Passa gli ID della ricetta come props
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
