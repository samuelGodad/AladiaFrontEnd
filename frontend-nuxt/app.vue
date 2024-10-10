<template>
  <div class="text-red">
    Hello from the home page !!!
    <Text text="Default Text" bold="normal" size="medium" color="text-black" />
    <Text text="Bold Text" bold="bold" size="large" color="text-blue-500" />
    <Text text="Small Text" bold="normal" size="small" color="text-gray-400" />
    <Text
      text="Click Me!"
      bold="semi-bold"
      size="medium"
      color="text-red-600"
      @click="handleClick"
    />
  </div>
  <div></div>
</template>

<script>
import Text from "@/components/atoms/text/Text.vue";
export default {
  name: "Home",
  components: {
    Text,
  },
  methods: {
    handleClick() {
      alert("Button clicked");
    },
  },
};
</script>
