<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
  import zhCN from "ant-design-vue/es/locale/zh_CN";
  import moment from "moment";
  import "moment/dist/locale/zh-cn";
  import { defineComponent } from "vue";
  moment.locale("zh-cn");
  export default defineComponent({
    setup() {
      return {
        zhCN,
      };
    },
  });
</script>
<style lang="less"></style>
