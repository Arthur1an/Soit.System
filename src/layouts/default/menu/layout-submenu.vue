<template>
  <ASubMenu :key="menuInfo.path" class="subMenu" v-bind="$attrs">
    <template #title>
      <span class="anticon">
        <img
          v-if="menuInfo.meta.icon"
          :src="require(`../../../assets/svg/sider/${menuInfo.meta.icon}.svg`)"
          :alt="menuInfo.meta.icon"
        />
      </span>
      <span>{{ menuInfo.meta.name }}</span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.path">
      <AMenuItem v-if="!item.children" :key="item.path">
        <span>{{ item.meta.name }}</span>
      </AMenuItem>
      <LayoutSubmenu v-else :key="item.path" :menu-info="item" />
    </template>
  </ASubMenu>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "LayoutSubmenu",
    props: {
      menuInfo: {
        type: Object,
        default: () => ({}),
      },
    },
  });
</script>

<style scoped lang="less"></style>
