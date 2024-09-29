import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RicetteMaster from "../views/RicetteMaster.vue";
import RicetteDetail from "@/views/RicetteDetail.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/recipes",
    name: "recipes",
    component: RicetteMaster,
  },
  {
    path: "/recipe/:id",
    name: "recipe-detail",
    component: RicetteDetail,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
