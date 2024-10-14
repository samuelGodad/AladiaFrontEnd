import Icon from "./Icon.vue";

const Meta = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    iconType: {
      control: "select",
      options: ["fa", "svg", "img"],
    },
    iconSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    iconClass: {
      control: { type: "text" },
      if: { arg: "iconType", eq: "fa" },
    },
    iconContent: {
      control: { type: "text" },
      if: { arg: "iconType", in: ["svg", "img"] },
    },
    iconAlt: {
      control: { type: "text" },
      if: { arg: "iconType", eq: "img" },
    },
    textColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
  args: {
    iconType: "fa",
    iconSize: "medium",
    iconClass: "fa fa-home",
    iconContent: "",
    iconAlt: "Icon description",
    textColor: "black",
    backgroundColor: "white",
  },
};
export default Meta;

export const FontAwesomeIcon = {
  args: {
    iconType: "fa",
    iconClass: "fa fa-home",
  },
};

export const SVGIcon = {
  args: {
    iconType: "svg",
    iconContent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 22H22L12 2Z" fill="currentColor"/>
    </svg>`,
  },
};

export const ImageIcon = {
  args: {
    iconType: "img",
    iconContent: "https://www.pexels.com/photo/red-dahlia-flower-60597/", // This is now accepted as image URL
    iconAlt: "Placeholder image",
  },
};

export const LargeIcon = {
  args: {
    iconType: "fa",
    iconClass: "fa fa-home",
    iconSize: "large",
  },
};

export const ColoredIcon = {
  args: {
    iconType: "fa",
    iconClass: "fa fa-heart",
    textColor: "#ff0000",
  },
};
