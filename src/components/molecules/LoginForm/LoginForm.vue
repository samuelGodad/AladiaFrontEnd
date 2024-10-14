<template>
  <form @submit.prevent="handleSubmit">
    <Input v-model="email" placeholder="Email" size="medium" />
    <Input
      v-model="password"
      type="password"
      placeholder="Password"
      size="medium"
    />
    <Button type="submit" size="medium" color="bg-blue-500 text-white">
      Login
    </Button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import "@/components/atoms/input/Input.vue";
import "@/components/atoms/button/Button.vue";

const email = ref("");
const password = ref("");

const handleSubmit = () => {
  // Handle form submission
  alert(`Email: ${email.value}, Password: ${password.value}`);
};
</script>

<style scoped>
/* You can add styles for the form here */
</style>
