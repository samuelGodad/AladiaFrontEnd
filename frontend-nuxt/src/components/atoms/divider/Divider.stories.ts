import Divider from "./Divider.vue";

export default {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Text to display between the divider lines",
      defaultValue: "Or",
    },
    gradientDirection: {
      control: "select",
      options: ["leftToRight", "rightToLeft", "both"],
      description:
        "Direction of the gradient (left to right, right to left, or both sides)",
      defaultValue: "leftToRight",
    },
  },
  args: {
    text: "Or",
    gradientDirection: "leftToRight",
  },
};

export const Default = {
  args: {
    text: "Or",
    gradientDirection: "leftToRight",
  },
};

export const CustomText = {
  args: {
    text: "And",
    gradientDirection: "leftToRight",
  },
};

export const RightToLeft = {
  args: {
    text: "Or",
    gradientDirection: "rightToLeft",
  },
};

export const Both = {
  args: {
    text: "Or",
    gradientDirection: "both",
  },
};
