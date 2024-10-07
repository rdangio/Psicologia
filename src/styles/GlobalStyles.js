// Utilizado a biblioteca Styled-Componets: yarn add styled-components
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
   font-family: "Rubik", sans-serif;
}

body {
    background-color: #3AAFA9;
}

`;

export default GlobalStyle;
