import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/index";
import AreasDeAtuacao from "./pages/Actuation";
import Contact from "./pages/Contact/index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="0" element={<AreasDeAtuacao numero={1} />}></Route>
        <Route path="1" element={<AreasDeAtuacao numero={2} />}></Route>
        <Route path="2" element={<AreasDeAtuacao numero={3} />}></Route>
        <Route path="/contato" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
