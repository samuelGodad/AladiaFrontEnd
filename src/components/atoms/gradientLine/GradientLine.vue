<template>
  <div :class="classes" :style="style"></div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  axis: "x" | "y";
  thickness: number;
  length: number;
  classes?: string;
  gradient?: string;
}>();

const classes = computed(() => ({
  [`storybook-gradient-line ${props.classes}`]: true,
}));

const style = computed(() => ({
  background:
    props.gradient || props.axis === "x"
      ? "transparent linear-gradient(90deg,transparent,#fff 50%,transparent) 0 0 no-repeat padding-box"
      : "transparent linear-gradient(180deg,transparent,#fff 50%,transparent) 0 0 no-repeat padding-box",
  width:
    props.axis === "x"
      ? props.length
        ? `${props.length}px`
        : "100%"
      : `${props.thickness || 1}px`,
  height:
    props.axis === "y"
      ? props.length
        ? `${props.length}px`
        : "100%"
      : `${props.thickness || 1}px`,
}));
</script>

<style scoped></style>
