<template>
    <div :class="classes" :style="style">
        <GradientLine axis="x" thickness=1 classes="absolute -top-[1px] left-0 right-0 h-[1px]" />
        <GradientLine axis="x" thickness=1 classes="absolute -bottom-[1px] left-0 right-0 h-[1px]" />
        <GradientLine axis="y" thickness=1 classes="absolute -left-[1px] bottom-0 top-0 w-[1px]" />
        <GradientLine axis="y" thickness=1 classes="absolute -right-[1px] bottom-0 top-0 w-[1px]" />
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import {GradientLine} from "../../atoms/gradientLine/index";

const props = defineProps<{
    height: number;
    width: number;
    padding: string;
}>();

const classes = computed(() => ({
    "inset-0 relative flex flex-col rounded-md border border-white/10 bg-black/50 backdrop-blur transition-all duration-300": true
}));

const style = computed(() => ({
    height: props.height ? `${props.height}px` : "100%",
    width: props.width ? `${props.width}px` : "26rem",
    padding: props.padding || "1.25rem"
}));
</script>