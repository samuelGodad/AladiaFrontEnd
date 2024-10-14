import Input from "./Input.vue";

const Meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    maxlength: { control: { type: "number" } },
    placeholder: { control: { type: "text" } },
    inputSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },

    textColor: { control: "color" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
    maxlength: 100,
    placeholder: "Enter your input",
    inputSize: "medium",
    textColor: "black",
    backgroundColor: "white",
    disabled: false,
  },
};
export default Meta;

export const Default = {
  args: {
    type: "text",
    maxlength: 100,
    placeholder: "Enter your input",
    modelValue: "",
  },
};

export const EmailInput = {
  args: {
    type: "email",
    placeholder: "Enter your email",
    modelValue: "",
  },
};

export const DisabledEmailInput = {
  args: {
    type: "email",
    placeholder: "Email (Disabled)",
    modelValue: "email@example.com",
    disabled: true,
  },
};

export const PasswordInput = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    modelValue: "",
  },
};

export const ConfirmPasswordInput = {
  args: {
    type: "password",
    placeholder: "Confirm your password",
    modelValue: "",
  },
};

export const NameInput = {
  args: {
    type: "text",
    placeholder: "Enter your name",
    modelValue: "",
  },
};

export const SurnameInput = {
  args: {
    type: "text",
    placeholder: "Enter your surname",
    modelValue: "",
  },
};
