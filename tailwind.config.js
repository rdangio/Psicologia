/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-turquoise-5": "#17252A",
        "c-turquoise-4": "#2B7A78",
        "c-turquoise-3": "#3AAFA9",
        "c-turquoise-2": "#DEF2F1",
        "c-turquoise-1": "#FEFFFF",

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

        //Footer
        "c-footer": "#17252A",
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
        "fs-h1": ["2.986rem", "3.881rem"],
        "fs-h2": ["2.488rem", "3.234rem"],
        "fs-h3": ["2.074rem", "2.696rem"],
        "fs-h4": ["1.728rem", "2.246rem"],
        "fs-h5": ["1.44rem", "1.872rem"],
        "fs-h6": ["1.2rem", "1.56rem"],      
        "fs-text": ["1rem", "1.5rem"],
        "fs-nav": ["1rem", "1.5rem"],
        "fs-button": ["0.833rem", "1.25rem"],
        "fs-footer": ["0.694rem", "1.041rem"],
      },

      screens: {
        's-small': '480px',
        's-medium': '768px',
        's-large': '1024px', 
      },
    },
  },
  plugins: [],
};
