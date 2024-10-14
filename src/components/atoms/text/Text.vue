<template>
  <span :class="[classes, textColorClass]">{{ text }}</span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

// Define props with TypeScript
const props = defineProps<{
  text: string; // The text content to display
  bold: 'bold' | 'semi-bold' | 'normal'; // Boldness of the text
  size?: 'small' | 'medium' | 'large'; // Size of the text
  color?: string; // Tailwind color class
  onClick?: () => void; // Optional click event
}>();

// Compute classes based on props
const classes = computed(() => {
  return {
    'font-bold': props.bold === 'bold',
    'font-semibold': props.bold === 'semi-bold',
    'font-normal': props.bold === 'normal',
    'text-sm': props.size === 'small',
    'text-base': props.size === 'medium' || !props.size, // Default to medium
    'text-lg': props.size === 'large',
  };
});

// Compute Tailwind text color class
const textColorClass = computed(() => {
  return props.color ? props.color : 'text-black'; // Default color if none provided
});

// Emit click event if specified
const emitClick = () => {
  if (props.onClick) {
    props.onClick();
  }
};
</script>

<style scoped>
/* You can add global styles for the text here if needed */
</style>
