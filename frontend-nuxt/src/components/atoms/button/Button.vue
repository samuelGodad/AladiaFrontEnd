<template>
  <button :class="classes" @click="emitClick">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  type?: "button" | "submit" | "reset";
  color?: string; // Tailwind color class
  size?: "small" | "medium" | "large";
  onClick?: () => void; // Optional click event
}>();

const classes = computed(() => ({
  "py-2 px-4": true,
  "text-white": props.color === "blue",
  "bg-blue-500": props.color === "blue",
  "bg-red-500": props.color === "red",
  "text-sm": props.size === "small",
  "text-base": props.size === "medium" || !props.size,
  "text-lg": props.size === "large",
}));

const emitClick = () => {
  if (props.onClick) {
    props.onClick();
  }
};
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
