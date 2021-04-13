<template>
  <ALayout class="w100 h100 position-relative over-hidden">
    <LayoutHeader />
    <ALayout hasSider>
      <LayoutAside />
      <ALayout>
        <LayoutMain />
      </ALayout>
    </ALayout>
  </ALayout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import LayoutHeader from "@/layouts/default/header/layout-header.vue";
  import LayoutAside from "@/layouts/default/sider/layout-sider.vue";
  import LayoutMain from "@/layouts/default/main/layout-main.vue";
  export default defineComponent({
    name: "index",
    components: { LayoutMain, LayoutAside, LayoutHeader },
    setup() {
      return {};
    },
  });
</script>

<style scoped></style>
