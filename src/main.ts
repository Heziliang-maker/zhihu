import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import router from "@/router";
// 条件引入mockjs
process.env.Mock && require("./mock/api");

console.log("process.env=>", process.env, process.env.MOCK);
createApp(App)
  .use(router)
  .mount("#app");
