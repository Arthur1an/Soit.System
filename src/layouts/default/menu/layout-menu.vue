<template>
  <AMenu
    mode="inline"
    theme="dark"
    :inlineIndent="16"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="menuClick"
  >
    <template v-for="(i, idx) in menuData" :key="idx">
      <AMenuItem v-if="!i.children" :key="i.path">
        <span>{{ i.meta.name }}</span>
      </AMenuItem>
      <LayoutSubmenu v-else :key="i.path" :menu-info="i" />
    </template>
  </AMenu>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import LayoutSubmenu from "@/layouts/default/menu/layout-submenu.vue";
  import { permissionStore } from "@/store/modules/permission";

  export default defineComponent({
    name: "LayoutMenu",
    components: { LayoutSubmenu },
    setup() {
      const router = useRouter(),
        route = useRoute();
      const openKeys = ref<string[]>([]),
        preOpenKeys = ref<string[]>([]),
        selectedKeys = ref<string[]>([]);
      onMounted(() => {
        selectedKeys.value = [route.path];
        openKeys.value = [route.path.slice(0, route.path.lastIndexOf("/"))];
      });
      watch(
        () => openKeys.value,
        (val, oldVal) => {
          preOpenKeys.value = oldVal;
        }
      );

      function menuToggle(state: boolean) {
        openKeys.value = state ? [] : preOpenKeys.value;
      }

      return {
        menuData: permissionStore.menuList,
        menuClick: (e: any): void => {
          selectedKeys.value = [e.key];
          router.push(e.key);
        },
        openKeys,
        menuToggle,
        preOpenKeys,
        selectedKeys,
      };
    },
  });
</script>

<style scoped></style>
