/** @format */

import Card from "./Card.vue";

const meta = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    padding: { control: "text" },
    radius: { control: "number" },
    borderThickness: { control: "number" },
    borderColor: { control: "color" },
    backgroundColor: { control: "color" },
    gradient: { control: "text" },
    gradientOpacity: { control: "number" },
    icon: { control: "text" },
    iconSize: { control: "number" },
    iconColor: { control: "color" },
    title: { control: "text" },
    subtitle: { control: "text" },
    gap: { control: "number" },
    boxHeight: { control: "number" },
    boxWidth: { control: "number" },
    arrangement: { control: "select", options: ["horizontal", "vertical"] },
  },
  args: {
    padding: "32px 16px",
    radius: 4,
    borderThickness: 1,
    borderColor: "#fff",
    backgroundColor: "#000",
    gradient: `linear-gradient(15deg,#fff0 8.33%,#fff0 27.43%,#fff6,#fff0 37.85%,#fff0 53.91%,#fff 62.15%,#fff0 68.23%,#fff 91.67%)`,
    gradientOpacity: 15,
    icon: '<img src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png" />',
    iconSize: 200,
    iconColor: "#fff",
    title: "Welcome to Aladia,",
    subtitle: " Create or access your account from here",
    gap: 8,
    boxHeight: 126,
    boxWidth: 372,
    arrangement: "horizontal",
  },
};

export default meta;

export const Default = {
  args: {},
};
