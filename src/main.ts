import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "./store";
import { setPlugins } from "@/plugins";
import "@/assets/css/index.less";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
setupStore(app);
app.use(router);
setPlugins(app);
router.isReady().then(() => {
  app.mount("#app");
});