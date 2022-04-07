import { createRouter, createWebHistory } from "vue-router";

const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/about",
      name: "home",
      component: () => import("../App.vue"),
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default Router;
