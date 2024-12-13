// Importação com {}: Exportações Nomeadas
// importa os componentes especificos do react
// caso fosse usado import react from "react"
// seria importada toda a biblioteca, o que
// poderia deixar o codigo mais pesado.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Importação sem {}: Exportação Padrão
// Quando você importa algo sem {}, você está
// importando uma exportação padrão do módulo.
// Uma exportação padrão pode ser importada com qualquer
// nome que você escolher, pois ela é a
// principal exportação desse módulo.
// 'export default'
// import Home from "./pages/Home/index";

// Importação de estilos
import "./styles.css";
import App from "./App";

// O elemento "root" vendo do arquivo index.html
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
