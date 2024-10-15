/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Whatsapp
        "c-whats": "#25d366",
        "c-whats-hover": "#0fe961",
        "c-whats-active": "#36c26a",

        //Cores do projeto
        "c-background": "#FEFFFF",
        "c-nav": "#17252A",

        //Botão 1
        "c-button1": "#17252A",
        "c-hover1": "#2B7A78",
        "c-active1": "#3AAFA9",

        //Botão 2
        "c-button2": "#",
        "c-hover2": "#",
        "c-active2": "#",

        //Títulos
        "c-title1": "#17252A",
        "c-title2": "#DEF2F1",

        //Textos
        "c-text1": "#17252A",
        "c-text2": "#FEFFFF",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-bold": ["Roboto-Bold", "sans-serif"],

        eurofucence: ["Eurofurence", "sans-serif"],
        "eurofurence-bold": ["Eurofurence-Bold", "sans-serif"],

        florencesans: ["Florencesans", "sans-serif"],
        "florencesans-bold": ["Florencesans-Bold", "sans-serif"],
      },

      fontSize: {
        "fs-nav": "1rem",
        "fs-h1": "2.5rem",
        "fs-h2": "2rem",
        "fs-text": "1rem",
        "fs-button": "0.875rem",
        "fs-footer": "0.75rem",
      },
    },
  },
  plugins: [],
};
