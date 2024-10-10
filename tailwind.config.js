/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Whatsapp
        "whats-green": "#25d366",
        "whats-green-hover": "#0fe961",
        "whats-green-active": "#36c26a",

        //Cores do projeto
        background: "#2B7A78",
        nav: "#17252A",

        //Botão 1
        button1: "#17252A",
        hover1: "#2B7A78",
        active1: "#3AAFA9",

        //Botão 2
        button2: "#",
        hover2: "#",
        active2: "#",

        //Títulos
        title1: "#17252A",
        title2: "#DEF2F1",

        //Textos
        text1: "#17252A",
        text2: "#FEFFFF",
      },
    },
  },
  plugins: [],
};
