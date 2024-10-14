<template>
  <button
    class="bg-red"
    :class="classes"
    @click="emitClick"
    :style="style"
    :disabled="props.disabled"
  >
    <div v-if="props.gradient" class="gradient"></div>
    <div class="content">
      <div v-if="props.icon" v-html="props.icon" class="icon"></div>
      <div>{{ props.label }}</div>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  label: string;
  icon?: string;
  gradient?: boolean;
  disabled?: boolean;
  textColor?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--disabled": props.disabled,
  [`storybook-button--${props.size || "medium"}`]: true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": props.secondary,
}));

const style = computed(() => ({
  color: props.textColor,
  backgroundColor: props.backgroundColor,
}));

const emitClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick();
  }
  emit("click");
};
</script>

<style scoped>
.storybook-button {
  font-family: "Inter", ui-sans-serif, system-ui;
  border-radius: 8px;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

.storybook-button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.storybook-button--small {
  font-size: 12px;
}

.storybook-button--medium {
  font-size: 16px;
}

.storybook-button--large {
  font-size: 20px;
}

.storybook-button--primary {
  background-color: blue;
}

.storybook-button--secondary {
  background-color: gray;
}

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    15deg,
    #fff0 9.55%,
    #fff0 30.28%,
    #fff6,
    #fff0 41.58%,
    #fff0 59.02%,
    #fff 67.97%,
    #fff0 74.56%,
    #fff
  );
  opacity: 0.5;
}

.content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  margin-right: 8px;
}
</style>
