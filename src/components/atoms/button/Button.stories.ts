import Button from "./Button.vue";

const Meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    primary: { control: "boolean" },
    secondary: { control: "boolean" },
    gradient: { control: "boolean" },
    expand: { control: "boolean" },
    disabled: { control: "boolean" },
    hasHoverEffect: { control: "boolean" },
  },
  args: {
    label: "Button",
    size: "medium",
    gradient: false,
    expand: false,
    disabled: false,
    hasHoverEffect: true,
    primary: true,
    secondary: false,
    textColor: "text-white",
    backgroundColor: "bg-blue-500",
  },
};
export default Meta;
export const Primary = {
  args: {
    label: "Primary Button",
    primary: true,
  },
};
export const Secondary = {
  args: {
    label: "Secondary Button",
    secondary: true,
  },
};
export const Gradient = {
  args: {
    label: "Gradient Button",
    gradient: true,
  },
};
export const Disabled = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};
export const WithPrefix = {
  args: {
    label: "Button with Prefix",
    icon: `<svg width="16px" height="16px" viewBox="-0.5 0 48 48" fill="#000000">
        <path d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.261 2.407 10.388l7.905-6.051c-.448-1.364-.698-2.82-.698-4.337z" fill="#FBBC05"></path>
        <path d="M23.714 10.133c3.311 0 6.302 1.173 8.652 3.093l6.836-6.827C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04c1.822-5.532 7.017-9.511 13.182-9.511z" fill="#EB4335"></path>
        <path d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.511l-7.909 6.038c3.822 7.761 11.804 13.072 21.091 13.072 5.732 0 11.204-2.035 15.311-5.849l-7.507-5.804c-2.118 1.334-4.785 2.052-7.804 2.052z" fill="#34A853"></path>
        <path d="M46.145 24c0-1.387-.214-2.88-.534-4.267H23.714v9.067h12.604c-.63 3.091-2.345 5.468-4.8 7.014l7.507 5.804c4.314-4.004 7.12-9.969 7.12-16.614z" fill="#4285F4"></path>
      </svg>`,
  },
};
export const WithHoverEffect = {
  args: {
    label: "Button with Hover Effect",
    hasHoverEffect: true,
  },
};
export const Expanded = {
  args: {
    label: "Expanded Button",
    expand: true,
  },
};
export const Small = {
  args: {
    label: "Small Button",
    size: "small",
  },
};
export const Medium = {
  args: {
    label: "Medium Button",
    size: "medium",
  },
};
export const Large = {
  args: {
    label: "Large Button",
    size: "large",
  },
};
