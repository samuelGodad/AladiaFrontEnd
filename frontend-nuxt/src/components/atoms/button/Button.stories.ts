import Button from "./Button.vue";
import type { StoryFn } from "@storybook/vue3";

// Define the type for the props of the Button component
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  color?: string; // Tailwind color class
  size?: "small" | "medium" | "large";
}

// Storybook default export
export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    color: {
      control: { type: "select", options: ["blue", "red"] },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: {
      action: "clicked",
    },
  },
};

// Template for the stories
const Template: StoryFn<ButtonProps> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Button Text</Button>',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  color: "blue",
  size: "medium",
};

// Small Button story
export const SmallButton = Template.bind({});
SmallButton.args = {
  color: "blue",
  size: "small",
};

// Large Button story
export const LargeButton = Template.bind({});
LargeButton.args = {
  color: "red",
  size: "large",
};
