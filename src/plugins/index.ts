import { App } from "vue";
import antd from "ant-design-vue";
export const setPlugins = (app: App) => {
  app.use(antd);
};
