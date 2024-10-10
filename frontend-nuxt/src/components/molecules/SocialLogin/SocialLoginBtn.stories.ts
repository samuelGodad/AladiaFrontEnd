import type { Meta, StoryFn } from "@storybook/vue3";
import SocialLoginButtons from "./SocialLoginBtn.vue";

export default {
  title: "Molecules/SocialLoginButtons",
  component: SocialLoginButtons,
} as Meta;

const Template: StoryFn = () => ({
  components: { SocialLoginButtons },
  template: "<SocialLoginButtons />",
});

// Default story
export const Default = Template.bind({});
Default.args = {};
