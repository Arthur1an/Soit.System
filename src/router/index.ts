import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  strict: true,
});

export default router;
