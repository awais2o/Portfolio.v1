/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        half: "44%",
      },
      userSelect: {
        none: "none",
      },
    },
  },
  plugins: [],
};
