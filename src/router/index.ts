/*
 * @Date: 2021-11-12
 * @Description:
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Layouts from "@/layouts/index.vue";
const Home = () => import("@/views/home/index.vue");

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home",
    component: Layouts,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
