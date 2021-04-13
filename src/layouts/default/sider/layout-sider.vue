<template>
  <ALayoutSider class="layout-aside" v-model:collapsed="menuShrink">
    <LayoutMenu ref="menuRef" class="flex-1" />
    <img
      class="menu-toggle cur-pointer"
      src="~@/assets/svg/sider/menu-toggle.svg"
      :class="{ 'menu-reverse': menuShrink }"
      alt=""
      @click="toggleMenu"
    />
  </ALayoutSider>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import LayoutMenu from "@/layouts/default/menu/layout-menu.vue";
  import { dashboardStore } from "@/store/modules/dashboard";
  export default defineComponent({
    name: "LayoutAside",
    components: { LayoutMenu },
    setup() {
      const menuRef = ref<any>();
      const menuShrink = computed(() => dashboardStore.menuShrinkState);
      return {
        menuShrink,
        menuRef,
        toggleMenu() {
          const state = !menuShrink.value;
          dashboardStore.setMenuState(state);
          menuRef.value.menuToggle(state);
        },
      };
    },
  });
</script>

<style scoped lang="less">
  .layout-aside {
    overflow-y: auto;
    background: #2c3039;
  }

  /deep/ .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }

  .menu-toggle {
    width: 20px;
    height: 20px;
    min-width: 16px;
    min-height: 16px;
    margin: 0 0 12px 24px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }

  .menu-reverse {
    transform: rotate(180deg);
  }
</style>
