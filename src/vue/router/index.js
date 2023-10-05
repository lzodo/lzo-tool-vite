import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("../views/home.vue") },
  { path: "/domRef", component: () => import("../views/domRef.vue") },
  { path: "/activeOrRef", component: () => import("../views/activeOrRef.vue") },
  { path: "/life", component: () => import("../views/life.vue") },
  { path: "/login", component: () => import("../views/login.vue") },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
