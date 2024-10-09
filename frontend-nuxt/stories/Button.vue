<template>
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
