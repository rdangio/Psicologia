/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Centraliza o container automaticamente
        padding: "2rem", //Adiciona padding ao redor do container
        // DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },

      colors: {
        "c-turquoise-5": "#17252A",
        "c-turquoise-6": "#00514f",
        "c-turquoise-4": "#2B7A78",
        "c-turquoise-3": "#3AAFA9",
        "c-turquoise-2": "#DEF2F1",
        "c-turquoise-1": "#FEFFFF",

        //Whatsapp
        "c-whats": "#25d366",
        "c-whats-hover": "#0fe961",
        "c-whats-active": "#36c26a",
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
        "fs-h7": ["1rem", "1.5rem"],
        "fs-h8": ["0.833rem", "1.25rem"],
        "fs-h9": ["0.694rem", "1.041rem"],
        "fs-text": ["1rem", "1.5rem"],
        "fs-nav": ["1rem", "1.5rem"],
        "fs-button": ["0.833rem", "1.25rem"],
        "fs-footer": ["0.694rem", "1.041rem"],
      },

      screens: {
        xs: "320px", //~3.5 - 4.0" ----> iPhone SE, Moto E6 -------> Resolução:  640 x 1136 px
        sm: "640px", //~5.5 - 6.5" ----> Samsung S21 FE 5G	-------> Resolução: 1080 x 2400 px
        md: "768px", //~7.9 - 8.5" ----> iPad Mini ----------------> Resolução: 1536 x 2048 px
        lg: "1024px", //~10.1 - 10.9" -> iPad Air, Galaxy Tab A ---> Resolução: 1920 x 1200 px
        xl: "1280px", //~13 - 14" -----> MacBook Air, Chromebook --> Resolução: 2560 x 1600 px
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
