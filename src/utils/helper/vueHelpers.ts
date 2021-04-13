import { getCurrentInstance, onUnmounted, onMounted } from "vue";

export function tryOnUnmounted(fn: () => any) {
  getCurrentInstance() && onUnmounted(fn);
}

export function tryOnMounted(fn: () => any) {
  getCurrentInstance() && onMounted(fn);
}
