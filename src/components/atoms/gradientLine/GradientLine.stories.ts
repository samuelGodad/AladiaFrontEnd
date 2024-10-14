/** @format */

import GradientLine from "./GradientLine.vue";

export default {
  title: "Atoms/Gradient Line",
  component: GradientLine,
  tags: ["autodocs"],
  argTypes: {
    axis: {
      control: "select",
      options: ["x", "y"],
    },
    thickness: {
      control: {
        type: "number",
      },
    },
    length: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    axis: "x",
    thickness: 1,
  },
};

export const Horizontal = {
  args: {
    axis: "x",
  },
};

export const Vertical = {
  args: {
    axis: "y",
  },
};
