/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Whatsapp Icon
        "whats-green": "#25d366",
        "whats-green-hover": "#0fe961",
        "whats-green-active": "#36c26a",

        //Background e texto
        "bgcolor-1": "#3AAFA9",
        "textcolor-1": "#FEFFFF",
        "textcolor-2": "#DEF2F1",

        //Botões
        "button-color": "#17252A",
<<<<<<< HEAD
        "button-hover": "#2B7A78",
        "button-active": "#44BDBB",
=======
        "button-hover": "#44BDBB",
        "button-active": "#2B7A78",
>>>>>>> dvd
        "titlecolor-1": "#17252A",
      },
    },
  },
  plugins: [],
};
