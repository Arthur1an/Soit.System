import { RouteRecordRaw } from "vue-router";
import defaultLayout from "@/layouts/default/index.vue";
import { permissionStore } from "@/store/modules/permission";
import { IMenu } from "@/layouts/default/menu/menu";

const context = require.context("./modules", true, /\.ts$/);

export const routeModuleList: RouteRecordRaw[] = context
  .keys()
  .map((i) => context(i).default)
  .sort((a, b) => a.meta.index - b.meta.index);

const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/login/login.vue"),
  meta: {
    title: "登录",
  },
};
export const RootRoute: RouteRecordRaw = {
  path: "/",
  component: defaultLayout,
  redirect: "/login",
  meta: {
    title: "根路由",
  },
  children: [...routeModuleList],
};

export const basicRoutes = [LoginRoute, RootRoute];

const menuList: IMenu[] = [];

function getMenuTreeFromRoute(
  menuArr: RouteRecordRaw[],
  menuList: IMenu[],
  curPath = ""
) {
  menuArr.forEach((i) => {
    if (i.meta) {
      const temp: IMenu = {
        path: curPath + (curPath ? "/" : "") + i.path,
        meta: i.meta as { name: string },
      };
      menuList.push(temp);
      if (i.children) {
        temp.children = [];
        getMenuTreeFromRoute(i.children, temp.children, i.path);
      }
    }
  });
}

getMenuTreeFromRoute(routeModuleList, menuList);
permissionStore.setMenuList(menuList);
