<template>
  <div class="P-4 bg-blue text-red">
    <h1 class="text-red">Welcome to My Nuxt App</h1>
    <Button @click="onClick" label="Click me"></Button>
  </div>
  <button @click="onClick">{{ label }}</button>
</template>
<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Click me",
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
