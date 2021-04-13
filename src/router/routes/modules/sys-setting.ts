import { RouteRecordRaw } from "vue-router";
import DefaultLayout from "@/layouts/full.vue";

const systemRoute: RouteRecordRaw = {
  path: "/system",
  component: DefaultLayout,
  meta: {
    name: "台账管理",
    icon: "system",
    index: 6,
  },
  children: [
    {
      path: "",
      redirect: "/system/message",
    },
    {
      path: "index",
      meta: {
        name: "首页",
      },
      component: () => import("@/views/system/index/index.vue"),

      
    },
    {
      path: "account",
      meta: {
        name: "账号管理",
      },
      component: () => import("@/views/system/account/account.vue"),

      
    },
    {
      path: "equipment",
      meta: {
        name: "设备管理",
      },
      component: () => import("@/views/system/equipment/equipment.vue"),
    },
    {
      path: "user",
      meta: {
        name: "人员管理",
      },
      component: () => import("@/views/system/user/user.vue"),
    },
    {
      path: "receipt",
      meta: {
        name: "领用记录",
      },
      component: () => import("@/views/system/recipientsRecords/recipientsRecords.vue"),
    },
  ],
};



export default systemRoute;
