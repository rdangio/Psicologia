// Utilizado a biblioteca Styled-Componets: yarn add styled-components
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
   font-family: "Poppins", sans-serif;
}

body {
    background-color: var(--quinary-color);
}

:root{
    //Cores 1
    --primary-color: #FF0101;
    --secondary-color: #FFFFFF;
    --tertiary-color: #000000;
    --quaternary-color: #303030;

    //Cores2
    --quinary-color: #0A1828;
    --senary-color: #178582;
    --septenary-color: #BFA181;

    //Cores Whats
    --whats-color1: #029E3B;
    --whats-color2: #FFFFFF;
    --whats-color3: #C0BDBD;
}
`;

export default GlobalStyle;
