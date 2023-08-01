/** @type {import('tailwindcss').Config} */
const colors = require("./tokens/color.tokens");
const extentedColors = require("./utils/devTokens");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [],
  mode: "jit",
  theme: {
    boxShadow: {
      "primary-xs": "0px 0px 0px 4px rgba(1, 179, 248, 0.2)",
      "primary-sm": "0px 0px 0px 4px rgba(172, 230, 253, 0.4)",
      "secondary-xs": "0px 0px 0px 4px rgba(52, 64, 85, 0.2)",
      "success-xs": " 0px 0px 0px 4px rgba(0, 202, 105, 0.2)",
      "danger-xs": "0px 0px 0px 4px rgba(255, 81, 81, 0.25)",
      "warning-xs": "0px 0px 0px 4px rgba(234, 196, 53, 0.2)",
      normal: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
    },
    fontFamily: {
      RozhaOne: ["Rozha One", "serif"],
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-section":
          "linear-gradient(90deg, rgba(245, 246, 248, 1) 50%, rgba(1, 179, 248, 0.1) 50%)",
        "about-background":
          "linear-gradient(to bottom, rgba(245, 246, 248,1) 35%,rgba(30,87,153,1) 35%,rgba(30,87,153,1) 35%,rgba(255,255,255,1) 35%);",

        "checked-sm": "url('/assets/form/checkIcon.svg')",
        "checked-md": "url('/assets/form/checkIcon-md.svg')",
        "checked-sm-disabled": "url('/assets/form/checkIcon-disabled.svg')",
        "checked-md-disabled": "url('/assets/form/checkIcon-disabled-md.svg')",
        "minus-sm": "url('/assets/form/minusIcon.svg')",
        "minus-md": "url('/assets/form/minusIcon-md.svg')",
        "minus-sm-disabled": "url('/assets/form/minusIcon-disabled.svg')",
        "minus-md-disabled": "url('/assets/form/minusIcon-md-disabled.svg')",

        "radio-sm": "url('/assets/form/radioIcon.svg')",
        "radio-md": "url('/assets/form/radioIcon-md.svg')",
        "radio-sm-disabled": "url('/assets/form/radioIcon-disabled.svg')",
        "radio-md-disabled": "url('/assets/form/radioIcon-md-disabled.svg')",
        "checked-radio-sm": "url('/assets/form/checked-radioIcon.svg')",
        "checked-radio-md": "url('/assets/form/checked-radioIcon-md.svg')",
        "checked-radio-sm-disabled":
          "url('/assets/form/checked-radioIcon-disabled.svg')",
        "checked-radio-md-disabled":
          "url('/assets/form/checked-radioIcon-disabled-md.svg')",
      },
      colors: {
        ...extentedColors,
        ...colors,
      },
    },
  },
  plugins: [],
};
