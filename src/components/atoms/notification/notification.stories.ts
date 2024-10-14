import Notification from "./notification.vue";

export default {
  title: "Atoms/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Notification title" },
    description: { control: "text", description: "Notification description" },
    color: { control: "text", description: "Notification color" },
    icon: { control: "text", description: "Notification icon" },
    timeout: { control: "number", description: "Notification timeout" },
  },
};

export const Success = {
  args: {
    id: 1,
    title: "Success!",
    description: "Your action was successful.",
    icon: "i-heroicons-check-circle",
    color: "green",
    timeout: 5000,
  },
};

export const Error = {
  args: {
    id: 2,
    title: "Error!",
    description: "⚠ Something went wrong.",
    icon: "i-heroicons-x-circle",
    color: "red",
    timeout: 5000,
  },
};

export const Info = {
  args: {
    id: 3,
    title: "Info",
    description: "ℹℹ Here is some information.",
    icon: "i-heroicons-information-circle",
    color: "blue",
    timeout: 5000,
  },
};
