/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "whats-green": "#25d366",
        "whats-green-hover": "#0fe961",
        "whats-green-active": "#36c26a",
        "bgcolor-main": "#0A1828",
        "textcolor-2": "#178582",
        "textcolor-3": "#BFA181",
        "color-title": "#EC4899",
      },
    },
  },
  plugins: [],
};
