<template>
  <div>
    Hello from the home page !!!
    <Button label="Click me" @click="handleClick" />
  </div>
</template>

<script>
import Button from "./stories/Button.vue";
export default
 {
  name: "Home",
  components: {
    Button,
  },
  methods: {
    handleClick() {
      alert("Button clicked");
    },
  },
};
</script>
