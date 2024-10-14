<template>
  <div :class="classes" :style="style" @click="emitClick">
    <div v-if="props.gradient" class="gradient" :style="gradientStyle"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps<{
  content: string;
  padding: string;
  radius: number;
  thickness: number;
  borderColor: string;
  backgroundColor: string;
  gradient: string;
  gradientOpacity: number;
  height: number;
  width: number;
  disabled: boolean;
  onClick: () => void;
  // size: "small" | "medium" | "large";
}>();

const classes = computed(() => ({
  "storybook-border": true,
}));

const style = computed(() => ({
  padding: props.padding,
  border: `${props.thickness || 0}px solid ${
    props.borderColor || "transparent"
  }`,
  borderRadius: `${props.radius || 0}px`,
  backgroundColor: props.backgroundColor,
  height: props.height ? `${props.height}px` : "100%",
  width: props.width ? `${props.width}px` : "100%",
}));

const gradientStyle = computed(() => ({
  display: props.gradient ? "block" : "none",
  background: props.gradient,
  opacity: props.gradientOpacity / 100,
}));

const emit = defineEmits<{
  (e: "click"): void;
}>();

const emitClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick();
  }
  emit("click");
};
</script>

<style scoped>
.storybook-border {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
}

.content {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
