<template>
  <input
    :class="classes"
    v-model="inputValue"
    @input="emitInput"
    :placeholder="placeholder"
    :type="type"
  />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// Define props with TypeScript
const props = defineProps<{
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
}>();

// Define emit function
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void; // Emit the modelValue update
}>();

const inputValue = ref(''); // Local state for the input value

const classes = computed(() => ({
  'p-2': true,
  'text-sm': props.size === 'small',
  'text-base': props.size === 'medium' || !props.size,
  'text-lg': props.size === 'large',
}));

const emitInput = () => {
  emit('update:modelValue', inputValue.value); // Emit the input value when it changes
};
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
