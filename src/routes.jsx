import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/index";
import AreasDeAtuacao from "./pages/Actuation";
import Contact from "./pages/Contact/index";
import RegisterPage from "./pages/RegisterPage/Index";
import LoginPage from "./pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="0" element={<AreasDeAtuacao numero={1} />}></Route>
        <Route path="1" element={<AreasDeAtuacao numero={2} />}></Route>
        <Route path="2" element={<AreasDeAtuacao numero={3} />}></Route>
        <Route path="contato" element={<Contact />}></Route>
        <Route path="RegisterPage" element={ <RegisterPage/> }></Route>
        <Route path="LoginPage" element={ <LoginPage/> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
