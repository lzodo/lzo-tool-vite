import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/home.vue") },
  { path: "/domRef", component: () => import("../views/domRef.vue") },
  { path: "/activeOrRef", component: () => import("../views/响应式数据.vue") },
  { path: "/life", component: () => import("../views/生命周期.vue") },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
