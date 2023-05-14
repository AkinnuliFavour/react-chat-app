/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "inset -5px -5px 3px -4px rgba(250, 250, 250, 0.6)",
        "4xl": "inset 7px 5px 3px -4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
