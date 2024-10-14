import type { Meta, StoryFn } from "@storybook/vue3";
import LoginForm from "./LoginForm.vue";

export default {
  title: "Molecules/LoginForm",
  component: LoginForm,
} as Meta;

const Template: StoryFn = () => ({
  components: { LoginForm },
  template: "<LoginForm />",
});

// Default story
export const Default = Template.bind({});
Default.args = {};
