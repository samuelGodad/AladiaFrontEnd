import PasswordStrength from "./passwordStrength.vue";

export default {
  title: "Molecules/PasswordStrength",
  component: PasswordStrength,
  tags: ["autodocs"],
  argTypes: {
    password: {
      control: { type: "text" },
      description: "The password string to evaluate strength",
    },
  },
  args: {
    password: "",
  },
};

export const Default = {
  args: {
    password: "",
  },
};

export const MediumStrength = {
  args: {
    password: "abcd1234",
  },
};

export const StrongStrength = {
  args: {
    password: "Abcdef12!",
  },
};
