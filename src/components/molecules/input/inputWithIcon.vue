<template>
  <div
    class="flex items-center p-2 rounded transition-all duration-300"
    :class="{ 'input-with-icon-wrapper--focused': isFocused }"
    :style="{ backgroundColor: backgroundColor || 'inherit' }"
    @focusin="handleFocus"
    @focusout="handleBlur"
  >
    <Icon
      v-if="iconType"
      iconType="svg"
      :iconClass="iconClass"
      :iconContent="iconContent"
      :iconAlt="iconAlt"
      :iconSize="iconSize"
      :textColor="textColor"
      :backgroundColor="backgroundColor"
    />
    <Input
      v-model="modelValue"
      :type="type"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :inputSize="inputSize"
      :textColor="textColor"
      :backgroundColor="backgroundColor"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { Input } from "../../atoms/input/index";
import { Icon } from "../../atoms/icon/index";

const props = defineProps<{
  type?: string;
  maxlength?: number;
  placeholder?: string;
  modelValue?: string | number;
  disabled?: boolean;
  inputSize?: "small" | "medium" | "large";
  iconType?: "fa" | "svg" | "img";
  iconClass?: string;
  iconContent?: string;
  iconAlt?: string;
  iconSize?: "small" | "medium" | "large";
  textColor?: string;
  backgroundColor?: string;
}>();

const modelValue = ref(props.modelValue);
const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
</script>

<style scoped>
.input-with-icon-wrapper {
  display: flex;
  align-items: center;
  padding: 4px;
  transition: background-color 0.3s, opacity 0.3s;
  background-color: white;
}

.input-with-icon-wrapper--focused {
  opacity: 0.8;
}

.input-with-icon .custom-icon {
  margin-right: 20px;
}
</style>
