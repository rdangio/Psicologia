import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/index";
import Footer from "./components/Footer";
import WhatsButton from "./components/WhatsButton";

import GlobalStyle from "./styles/GlobalStyles";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
    <Footer />
    <WhatsButton />
  </StrictMode>
);
