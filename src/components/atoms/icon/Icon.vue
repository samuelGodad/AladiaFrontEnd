<template>
  <span :class="classes" :style="style">
    <!-- Render icon based on iconType -->
    <i v-if="iconType === 'fa'" :class="iconClass"></i>
    <svg
      v-else-if="iconType === 'svg'"
      v-html="iconContent"
      aria-hidden="true"
    ></svg>
    <img v-else-if="iconType === 'img'" :src="iconContent" :alt="iconAlt" />
  </span>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  iconType?: "fa" | "svg" | "img";
  iconClass?: string;
  iconContent?: string;
  iconAlt?: string;
  iconSize?: "small" | "medium" | "large";
  textColor?: string;
  backgroundColor?: string;
}>();

// Compute the dynamic classes for the icon element
const classes = computed(() => ({
  "custom-icon": true,
  [`custom-icon--${props.iconSize || "medium"}`]: true,
  "icon-fontawesome": props.iconType === "fa",
  "icon-svg": props.iconType === "svg",
  "icon-img": props.iconType === "img",
}));

// Compute the dynamic style for the icon element
const style = computed(() => ({
  color: props.textColor || "inherit",
  backgroundColor: props.backgroundColor || "inherit",
}));
</script>

<style scoped>
.custom-icon {
  display: inline-block;
  vertical-align: middle;
}

.custom-icon--small {
  font-size: 16px;
  width: 16px;
  height: 16px;
}

.custom-icon--medium {
  font-size: 24px;
  width: 24px;
  height: 24px;
}

.custom-icon--large {
  font-size: 32px;
  width: 32px;
  height: 32px;
}

.icon-fontawesome {
  font-family: "Font Awesome 5 Free";
}

.icon-svg svg {
  width: 100%;
  height: 100%;
}

.icon-img img {
  width: 100%;
  height: auto;
}
</style>
