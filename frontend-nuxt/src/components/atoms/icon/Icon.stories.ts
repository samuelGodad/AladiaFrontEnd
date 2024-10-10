import Icon from "./Icon.vue";
import type { StoryFn } from "@storybook/vue3";

// Define the type for the props of the Icon component
interface IconProps {
  name: string; // The name of the icon
  size?: "small" | "medium" | "large";
}

// Storybook default export
export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

// Template for the stories
const Template: StoryFn<IconProps> = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: '<Icon v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  name: "default-icon", // Example icon name
  size: "medium",
};

// Small Icon story
export const SmallIcon = Template.bind({});
SmallIcon.args = {
  name: "default-icon",
  size: "small",
};

// Large Icon story
export const LargeIcon = Template.bind({});
LargeIcon.args = {
  name: "default-icon",
  size: "large",
};
