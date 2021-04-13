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
import { IMenu } from "@/layouts/default/menu/menu";

const NAME = "permissionStore";
hotModuleUnregisterModule(NAME);

@Module({ dynamic: true, namespaced: true, store, name: NAME })
class PermissionStore extends VuexModule {
  menuList: IMenu[] = [];

  @Mutation
  setMenuList(payload: IMenu[]) {
    this.menuList = payload;
  }
}

export const permissionStore = getModule<PermissionStore>(PermissionStore);
