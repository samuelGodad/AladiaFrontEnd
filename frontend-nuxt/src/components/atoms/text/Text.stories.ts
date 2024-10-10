import Text from "./Text.vue";
import type { StoryFn } from "@storybook/vue3"; // Use StoryFn for Vue 3

// Define the type for the props of the Text component
interface TextProps {
  text: string; // The text content to display
  bold: "bold" | "semi-bold" | "normal"; // Boldness of the text
  size?: "small" | "medium" | "large"; // Size of the text
  color?: string; // Tailwind color class
}

// Storybook default export
export default {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    bold: {
      control: { type: "select", options: ["bold", "semi-bold", "normal"] },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    color: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
  },
};

// Template for the stories
const Template: StoryFn<TextProps> = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: '<Text v-bind="args" @click="args.onClick" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  text: "Default Text",
  bold: "normal",
  size: "medium",
  color: "text-black",
};

// Bold Text story
export const BoldText = Template.bind({});
BoldText.args = {
  text: "Bold Text",
  bold: "bold",
  size: "large",
  color: "text-blue-500",
};

// Small Text story
export const SmallText = Template.bind({});
SmallText.args = {
  text: "Small Text",
  bold: "normal",
  size: "small",
  color: "text-gray-400",
};

// Interactive Text story
export const InteractiveText = Template.bind({});
InteractiveText.args = {
  text: "Click Me!",
  bold: "semi-bold",
  size: "medium",
  color: "text-red-600",
};
