/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17A1FA",
        secondary: "#7A61FF",
        tertiary: "#FF00FF",
        "black-01": "#7A7D68",
        "gray-default": "#636B78",
        "gray-light": "#A1A6AD",
        "gray-lighter": "#D1D4D6",
      },
    },
  },
  plugins: [],
};
