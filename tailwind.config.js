/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cores ícone whatsapp
        "whats-green": "#25d366",
        "whats-green-hover": "#0fe961",
        "whats-green-active": "#36c26a",

        //Cores do projeto
        background: "#2B7A78",
        nav: "#17252A",
        button: "#17252A",
        hover: "#",
        active: "#",
        title1: "#17252A",
        title2: "#DEF2F1",
        text1: "#17252A",
        text2: "#FEFFFF",
      },
    },
  },
  plugins: [],
};
