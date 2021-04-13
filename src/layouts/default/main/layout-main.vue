<template>
  <div class="layout-main" :class="{ full: isFull, pad24: !isRoute }">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { dashboardStore } from "@/store/modules/dashboard";
  import router from "@/router";

  export default defineComponent({
    name: "LayoutMain",
    setup() {
      return {
        isFull: computed(() => dashboardStore.isFull),
        isRoute: computed(() => router.currentRoute.value.path.includes("dashboard")),
      };
    },
  });
</script>

<style scoped>
  .layout-main {
    overflow: hidden;
    background-color: #1b1e27;
    flex: 1;
  }

  .full {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .pad24 {
    padding: 2.4rem;
  }
</style>
