import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import AreasDeAtuacao from "./pages/Actuation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="0" element={<AreasDeAtuacao numero={0} />}></Route>
        <Route path="1" element={<AreasDeAtuacao numero={1} />}></Route>
        <Route path="2" element={<AreasDeAtuacao numero={2} />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
