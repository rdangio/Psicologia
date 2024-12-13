import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Ansiedade from "./pages/Ansiedade";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ansiedade" element={<Ansiedade />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
