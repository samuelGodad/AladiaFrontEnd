import Input from "./Input.vue";
import type { StoryFn } from "@storybook/vue3";

// Define the type for the props of the Input component
interface InputProps {
  type?: "text" | "password" | "email";
  placeholder?: string;
  size?: "small" | "medium" | "large";
}

// Storybook default export
export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

// Template for the stories
const Template: StoryFn<InputProps> = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text...",
  size: "medium",
};

// Small Input story
export const SmallInput = Template.bind({});
SmallInput.args = {
  type: "text",
  placeholder: "Small input",
  size: "small",
};

// Large Input story
export const LargeInput = Template.bind({});
LargeInput.args = {
  type: "password",
  placeholder: "Enter password...",
  size: "large",
};
