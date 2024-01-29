import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  brandTitle: "My custom Storybook",
  brandUrl: "https://example.com",
  brandImage: "logo_supercademy.png",
  brandTarget: "_self",

  colorPrimary: "#FFFFFF",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#0A3042",
  appContentBg: "#0A3042",
  appPreviewBg: "#F1F1F1",

  // Text colors
  textColor: "#CBD2D6",
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#9E9E9E",
  barBg: "#0A3042",

  // Form colors
  inputBg: "#0A3042",
  inputBorder: "#9E9E9E",
  inputTextColor: "#9E9E9E",
  inputBorderRadius: 2,
});
