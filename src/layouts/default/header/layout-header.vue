<template>
  <ALayoutHeader class="layout-header flex-row just-between align-center">
    <ul class="h100 flex-column mb0 just-center">
      <li class="layout-header__title">{{ title }}</li>
      <li class="layout-header__desc">{{ desc }}</li>
    </ul>
    <section class="flex-row align-center h100"></section>
  </ALayoutHeader>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "LayoutHeader",
    components: {},
    setup() {
      return {
        title: "上海-翱晟台账管理平台",
        desc: "SHENMU DATA MONITORING",
      };
    },
  });
</script>

<style scoped lang="less">
  .layout-header {
    width: 100%;
    padding: 0 16px;
    line-height: unset;
    letter-spacing: 0.3rem;
    color: white;
    background-color: #1890ff;

    &__title {
      font-size: 26px;
    }

    &__desc {
      font-size: 10px;
    }
  }
</style>
