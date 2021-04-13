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
import { IUserInfo, login } from "@/api/services/Authentication/authenticate";

const NAME = "userStore";
hotModuleUnregisterModule(NAME);

@Module({ dynamic: true, namespaced: true, store, name: NAME })
class UserStore extends VuexModule {
  public name = "111";
  token = sessionStorage.getItem("token");
  @Mutation
  setName(name: string) {
    this.name = name;
  }

  @Mutation
  setToken(token: string) {
    this.token = token;
    sessionStorage.setItem("token", token);
  }

  @Action
  async login(userInfo: IUserInfo) {
    const res = await login(userInfo);
    const { token } = res.toObject();
    this.setToken(token);
    return true;
  }
}

export const userStore = getModule<UserStore>(UserStore);
