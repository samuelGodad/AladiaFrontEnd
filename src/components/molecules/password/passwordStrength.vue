<template>
  <div class="flex justify-between items-center w-full">
    <!-- Password strength message, aligned left -->
    <span :class="messageClass" class="flex-1 text-left">
      {{ strengthMessage }}
    </span>

    <!-- Nuxt UI Progress Bar for password strength -->
    <UProgress
      :value="progressValue"
      :max="100"
      :color="color"
      class="flex-1 w-two-thirds"
    >
      <template #indicator="{ percent }">
        <div class="text-right" :style="{ width: `${percent}%` }"></div>
      </template>
    </UProgress>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue";

const props = defineProps<{
  password: string;
}>();

const task = ref(0); // Numeric value for password strength (0 to 5)
const strengthMessage = ref("");

// Define strength levels
const steps = [
  "8 character minimum",
  "Number required",
  "Symbol required (@$!%*?&)",
  "Uppercase letter required",
  "Strong password",
];

// Function to calculate password strength
const calculateStrength = () => {
  const length = props.password.length;
  const hasUppercase = /[A-Z]/.test(props.password);
  const hasNumber = /[0-9]/.test(props.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(props.password);

  let strength = 0;

  // Start with 0 if no password is entered
  if (length === 0) {
    task.value = 0;
    strengthMessage.value = steps[0];
    return;
  }

  // Check for password length and character requirements
  if (length < 8) {
    task.value = 1; // 8 character minimum
    strengthMessage.value = steps[0];
  } else {
    if (hasUppercase) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;

    if (!hasNumber) {
      task.value = 2; // Number required
      strengthMessage.value = steps[1];
    } else if (!hasSpecialChar) {
      task.value = 3; // Symbol required
      strengthMessage.value = steps[2];
    } else if (!hasUppercase) {
      task.value = 4; // Uppercase letter required
      strengthMessage.value = steps[3];
    } else if (strength === 3) {
      task.value = 5; // Strong password
      strengthMessage.value = steps[4];
    }
  }
};

// Computed property to get the color based on the task value
const color = computed(() => {
  switch (task.value) {
    case 0:
      return "gray";
    case 1:
      return "red";
    case 2:
      return "red";
    case 3:
      return "yellow";
    case 4:
      return "yellow";
    case 5:
      return "green";
    default:
      return "gray";
  }
});

// Computed property to get the message class based on the task value
const messageClass = computed(() => {
  switch (task.value) {
    case 0:
      return "text-gray-400";
    case 1:
      return "text-red-500";
    case 2:
      return "text-red-500";
    case 3:
      return "text-yellow-500";
    case 4:
      return "text-yellow-500";
    case 5:
      return "text-green-500 font-bold";
    default:
      return "text-gray-400";
  }
});

// Computed property to get the progress value based on the task value
const progressValue = computed(() => {
  switch (task.value) {
    case 0:
      return 0;
    case 1:
      return 20;
    case 2:
      return 40;
    case 3:
      return 60;
    case 4:
      return 80;
    case 5:
      return 100;
    default:
      return 0;
  }
});

// Watch for changes in the password prop
watch(() => props.password, calculateStrength, { immediate: true });
</script>

<style scoped>
.flex-1 {
  flex: 1;
}
.w-two-thirds {
  width: 66.67%;
}
</style>
