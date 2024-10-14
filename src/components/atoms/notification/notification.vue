<template>
  <div class="card-color">
    <UNotification
      icon="X"
      :id="id"
      :title="title"
      :description="description"
      :color="color"
      :timeout="timeout"
      :close-button="{
        icon: 'i-heroicons-x-mark-20-solid',
        color: 'gray',
        variant: 'link',
        padded: false,
      }"
      @close="onClose"
      v-if="visible"
      class="notification-custom"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  id: string | number;
  title: string;
  description?: string;
  color?: string;
  timeout?: number;
  closeButton?: object;
  actions?: Array<{ label: string; click: () => void }>;
}>();

const emit = defineEmits(["close"]);
const visible = ref(true);

const onClose = () => {
  visible.value = false;
  emit("close");
};

// Automatically close notification after timeout
watch(
  () => props.timeout,
  (newTimeout) => {
    if (newTimeout && newTimeout > 0) {
      setTimeout(() => {
        visible.value = false;
      }, newTimeout);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.card-color {
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 0.5rem;
  z-index: 1;
}

.notification-custom {
  background-color: red !important;
  /* border-radius: 0.5rem; */
}
</style>
