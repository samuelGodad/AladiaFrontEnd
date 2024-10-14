<template>
    <Box
        :padding="props.padding"
        :radius="props.radius"
        :thickness="props.borderThickness"
        borderColor="#fff3"
        :backgroundColor="props.backgroundColor"
        :gradient="props.gradient"
        :gradientOpacity="props.gradientOpacity"
        :height="props.boxHeight"
        :width="props.boxWidth"
        :classes="boxClasses"
        :opacity="opacity"
    >
        <div :class="classes" :style="style">
            <Icon
                v-if="props.icon"
                :icon="props.icon"
                :size="props.iconSize"
                :color="props.iconColor"
            />
            <div
                v-if="props.title || props.subtitle"
                :class="textClasses"
                :style="textStyle">
                <Text
                    v-if="props.title"
                    :text="props.title"
                    weight="semi-bold"
                />
                <Text
                    v-if="props.subtitle"
                    :text="props.subtitle"
                    color="#ffffffb3"
                    size="small"  
                />
            </div>
        </div>
    </Box>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import{ Box} from "../../atoms/box/index";
import {Icon }from "../../atoms/icon/index";
import {Text} from "../../atoms/text/index";

const props = defineProps<{
    padding: string;
    radius: number;
    borderThickness: number;
    borderColor: string;
    backgroundColor: string;
    gradient: string;
    gradientOpacity: number;
    icon: string;
    iconSize: number;
    iconColor: string;
    title: string;
    subtitle: string;
    bold: "bold" | "semi-bold" | "normal";
    textSize: "small" | "medium" | "large";
    textColor: string;
    boxHeight: number;
    boxWidth: number;
    gap: number;
    arrangement: "horizontal" | "vertical";
    boxClasses?: string;
    opacity: number;
}>();

const classes = computed(() => ({
    'flex items-center justify-between': true,
    "flex-col": props.arrangement === "vertical",
}));

const textClasses = computed(() => ({
    "flex flex-col justify-center items-start": true,
}));

const style = computed(() => ({
    width: "100%",
    gap: `${props.gap}px`,
}));

const textStyle = computed(() => ({
    gap: '8px',
}));

</script>
