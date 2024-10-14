/** @format */

import Box from "./Box.vue";

export default {
  title: "Atoms/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: {
        type: "text",
      },
    },
    borderColor: {
      control: {
        type: "color",
      },
    },
    backgroundColor: {
      control: {
        type: "color",
      },
    },
    padding: {
      control: {
        type: "text",
      },
    },
    thickness: {
      control: {
        type: "number",
      },
    },
    radius: {
      control: {
        type: "number",
      },
    },
    gradient: {
      control: {
        type: "text",
      },
    },
    gradientOpacity: {
      control: {
        type: "number",
      },
    },
    height: {
      control: {
        type: "number",
      },
    },
    width: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    gradient: `linear-gradient(15deg,#fff0 8.33%,#fff0 27.43%,#fff6,#fff0 37.85%,#fff0 53.91%,#fff 62.15%,#fff0 68.23%,#fff 91.67%)`,
    gradientOpacity: 100,
    content: "<p style='color: white;'>Hello</p>",
    borderColor: "white",
    backgroundColor: "transparent",
    padding: 10,
    thickness: 1,
    radius: 10,
  },
};

export const Default = {
  args: {},
};
