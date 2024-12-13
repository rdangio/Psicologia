import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Ansiedade from "./pages/Ansiedade";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ansiedade" element={<Ansiedade />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
