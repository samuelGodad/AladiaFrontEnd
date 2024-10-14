<template>
  <div class="divider-wrapper">
    <!-- Left Divider Line -->
    <div
      v-if="showLeftLine"
      class="divider-line"
      :class="leftGradientClass"
    ></div>

    <!-- Text -->
    <div class="text-white p-5">{{ text }}</div>

    <!-- Right Divider Line -->
    <div
      v-if="showRightLine"
      class="divider-line"
      :class="rightGradientClass"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

// Define the props with gradientDirection having a "both" option
const props = defineProps<{
  text?: string;
  gradientDirection?: "leftToRight" | "rightToLeft" | "both";
}>();

// Show lines based on the gradientDirection
const showLeftLine = computed(() => props.gradientDirection !== "rightToLeft");
const showRightLine = computed(() => props.gradientDirection !== "leftToRight");

// Compute gradient class for the left line
const leftGradientClass = computed(() => {
  return props.gradientDirection === "rightToLeft"
    ? "bg-gradient-to-l from-white to-transparent"
    : "bg-gradient-to-r from-transparent to-white";
});

// Compute gradient class for the right line
const rightGradientClass = computed(() => {
  return props.gradientDirection === "leftToRight"
    ? "bg-gradient-to-r from-white to-transparent"
    : "bg-gradient-to-l from-transparent to-white";
});
</script>

<style scoped>
.divider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.divider-line {
  height: 1px;
  width: 10rem;
}
</style>
