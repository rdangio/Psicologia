// Utilizado a biblioteca Styled-Componets: yarn add styled-components
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
   font-family: "Montserrat", "Pacifico" sans-serif;
}

body {
   min-width: 320px;
   background-color: #FEFFFF;
}

// .custom-whatsapp {
//   position: fixed !important; /* Sobrescreve qualquer estilo inline */
//   bottom: 20px !important; /* Distância do fundo */
//   left: 20px !important; /* Distância da lateral esquerda */
//   right: auto !important; /* Garante que ele não fique alinhado à direita */
// }

// /* Ajusta o contêiner do botão caso necessário */
// .custom-whatsapp > div {
//   position: fixed !important;
//   bottom: 20px !important;
//   left: 55% !important;
// }

`;

export default GlobalStyle;
