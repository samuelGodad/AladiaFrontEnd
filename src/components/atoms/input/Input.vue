<template>
  <input
    :type="props.type"
    :maxlength="props.maxlength"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="emitInput"
    :disabled="props.disabled"
    :class="classes"
    :style="style"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const props = defineProps<{
  type?: string;
  maxlength?: number;
  placeholder?: string;
  modelValue?: string | number;
  disabled?: boolean;
  inputSize?: "small" | "medium" | "large";
  textColor?: string;
  backgroundColor?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

// Compute the dynamic classes for the input element
const classes = computed(() => ({
  "custom-input": true,
  "custom-input--disabled": props.disabled,
  [`custom-input--${props.inputSize || "medium"}`]: true,
  "input-email": props.type === "email",
  "input-password": props.type === "password",
}));

// Compute the dynamic style for the input element
const style = computed(() => ({
  color: props.textColor || "inherit",
  backgroundColor: props.backgroundColor || "inherit",
}));

// Emit the input event with the updated value
const emitInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<style scoped>
.custom-input {
  font-family: "Inter", ui-sans-serif, system-ui;
  padding: 8px;
  border: none;
  width: 100%;
  transition: padding 0.3s;
}

.custom-input::placeholder {
  color: rgba(0, 0, 0, 0.5);
  transition: transform 0.3s, font-size 0.3s, opacity 0.3s;
  opacity: 1;
}

.custom-input:focus::placeholder {
  transform: translateX(-9rem) scale(0.7);
}

.custom-input:focus {
  outline: none;
}

.custom-input--small {
  font-size: 12px;
  padding: 8px;
}

.custom-input--medium {
  font-size: 16px;
  padding: 8px;
}

.custom-input--large {
  font-size: 20px;
  padding: 12px;
}

.custom-input--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input-email {
  background-color: #f3f4f6;
}

.input-password {
  font-family: "Courier New", Courier, monospace;
}
</style>
