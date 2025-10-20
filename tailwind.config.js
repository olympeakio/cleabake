/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#66000d",
        secondary: "#dfc6bc",
        background: "#f3efe6",
        dark: "#161213"
      },
      fontFamily: {
        heading: ["'Adapter PE Variable'", "serif"],
        subheading: ["'Adapter PE Variable'", "serif"],
        body: ["'Acumin Variable Concept'", "sans-serif"]
      },
    },
  },
  plugins: [],
};
