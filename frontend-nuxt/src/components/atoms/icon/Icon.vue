<template>
  <span :class="iconClasses" aria-hidden="true"></span>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  name: string; // The name of the icon
  size?: "small" | "medium" | "large";
}>();

const iconClasses = computed(() => ({
  "text-sm": props.size === "small",
  "text-base": props.size === "medium" || !props.size,
  "text-lg": props.size === "large",
}));
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
