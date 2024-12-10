import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/contato" element={<Contact />} />;
      </Routes>
    </>
  );
};

export default App;
