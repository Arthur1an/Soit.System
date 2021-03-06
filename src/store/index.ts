import { App } from "vue";
import { createStore } from "vuex";

import { config } from "vuex-module-decorators";
config.rawError = true;

const store = createStore({});

export function setupStore(app: App<Element>) {
  app.use(store);
  return app;
}

export default store;
