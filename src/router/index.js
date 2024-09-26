import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from '../views/NotFound.vue';

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
    path: '/ricette-vegane',
    name: 'RicetteVegane',
    component: NotFound
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: NotFound
  },
  {
    path: '/antipasti',
    name: 'Antipasti',
    component: NotFound
  },
  {
    path: '/primi-piatti',
    name: 'PrimiPiatti',
    component: NotFound
  },
  {
    path: '/secondi-piatti',
    name: 'SecondiPiatti',
    component: NotFound
  },
  {
    path: '/dolci',
    name: 'Dolci',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
