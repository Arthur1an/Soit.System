import {
  Action,
  // Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import { hotModuleUnregisterModule } from "@/utils/helper/vuexHelper";
import store from "@/store";

const NAME = "dashboardStore";
hotModuleUnregisterModule(NAME);

interface IViewPort {
  width: number;
  height: number;
}

@Module({ dynamic: true, namespaced: true, store, name: NAME })
class DashboardStoreStore extends VuexModule {
  isFull = false;
  viewPort: IViewPort = {
    width: 1920,
    height: 1080,
  };
  menuShrinkState = false;

  @Mutation
  setFull(state: boolean) {
    this.isFull = state;
  }

  @Mutation
  setViewport(newViewPort: IViewPort) {
    this.viewPort = newViewPort;
  }

  @Mutation
  setMenuState(state: boolean) {
    this.menuShrinkState = state;
  }
}

export const dashboardStore = getModule<DashboardStoreStore>(DashboardStoreStore);
