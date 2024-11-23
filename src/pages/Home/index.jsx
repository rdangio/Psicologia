import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../styles/GlobalStyles";
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";
import CardServices from "../../components/CardServices/CardServices";
import Banner from "../../components/Banner/Banner";
import CardValues from "../../components/CardValues/CardValues";
import CardsSessions from "../../components/CardsSessions/CardsSessions";
import Footer from "../../components/Footer/Footer";
import WhatsappButton from "../../components/WhatsButton/WhatsButton";


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route
          path="/" element=
          {
            <>
              <Carousel />
              <CardServices />
              <Banner />
              <CardValues />
              <CardsSessions />
            </>
          }
        />
        
      </Routes>
      <Footer />
      <WhatsappButton />
    </Router>
  );
};

export default App;
