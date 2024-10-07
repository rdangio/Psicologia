/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "whats-green": "#25d366",
        "whats-green-hover": "#0fe961",
        "whats-green-active": "#36c26a",

        bgcolor: "#3AAFA9",
        "textcolor-1": "#FEFFFF",
        "textcolor-2": "#DEF2F1",
        "button-color": "#17252A",
        "button-hover": "#2B7A78",
        "titlecolor-1": "#17252A",
      },
    },
  },
  plugins: [],
};
