import InputWithIcon from "./InputWithIcon.vue";

const Meta = {
  title: "Molecules/InputWithIcon",
  component: InputWithIcon,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    maxlength: { control: { type: "number" } },
    placeholder: { control: { type: "text" } },
    disabled: { control: "boolean" },
    inputSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    iconType: {
      control: "select",
      options: ["fa", "svg", "img"],
    },
    iconClass: { control: { type: "text" }, if: { arg: "iconType", eq: "fa" } },
    iconContent: {
      control: { type: "text" },
      if: { arg: "iconType", in: ["svg", "img"] },
    },
    iconAlt: {
      control: { type: "text" },
      if: { arg: "iconType", eq: "img" },
    },
    iconSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    textColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
  args: {
    type: "text",
    maxlength: 100,
    placeholder: "Enter your input",
    modelValue: "",
    disabled: false,
    inputSize: "medium",
    iconType: "fa",
    iconClass: "fa fa-user",
    iconContent: "",
    iconAlt: "User icon",
    iconSize: "medium",
    textColor: "black",
    backgroundColor: "white",
  },
};

export default Meta;

export const Default = {
  args: {
    modelValue: "",
  },
};

export const EmailWithIcon = {
  args: {
    type: "email",
    placeholder: "Enter your email",
    iconType: "fa",
    iconClass: "fa fa-envelope",
  },
};

export const DisabledInputWithIcon = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
    iconType: "fa",
    iconClass: "fa fa-lock",
  },
};
