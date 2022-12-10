import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/works/:id",
    component: () => import("../components/WorksVue.vue"),
  },
  {
    path: "/works/pinkhammer",
    component: () => import("../components/PinkHammerVue.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
