import GlobalStyle from "../../styles/GlobalStyles";
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";
import CardServices from "../../components/CardServices/CardServices";
import Banner from "../../components/Banner/Banner";
// import CardValues from "../../components/CardValues/CardValues";
// import CardsSessions from "../../components/CardsSessions/CardsSessions";
import Footer from "../../components/Footer/Footer";
import WhatsappButton from "../../components/WhatsButton/WhatsButton";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Carousel />
      <CardServices />
      <Banner />
      {/* <CardValues /> */}
      {/* <CardsSessions /> */}
      <Footer />
      <WhatsappButton />
    </>
  );
};

export default App;
