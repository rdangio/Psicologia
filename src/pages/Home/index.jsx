import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";
import CardServices from "../../components/CardServices/CardServices";
import CardValues from "../../components/CardValues/CardValues";
import CardsSessions from "../../components/CardsSessions/CardsSessions";

const App = () => {
  return (
    <>
      <Nav />
      <Carousel />
      <CardServices />
      <section className="w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-purple-400 to-90% ">
        <div className="w-[800px] gap-16  flex  justify-center items-center  h-[380px] font-bold">
          {/* <div className=" gap-16 bg-[url('/src/assets/Images/slider/slider-3.jpg')] flex  justify-center items-center  h-[380px] mb-10 font-bold"> */}
          {/* <div className="gap-16 bg-gradient-to-r from-[#A2CACA] to-[#4A7D7E] flex  justify-center items-center  h-[380px] mb-10 font-bold"> */}
          <img
            className="-rotate-[20deg] shadow-lg shadow-purple-950 rounded-xl max-w-[20%] max-h-[100%]"
            src="/src/assets/Images/claudia.jpg"
            alt=""
          />
          <div className="flex flex-col w-[50%] items-start p-10 text-purple-950">
            <h2 className="text-2xl font-extrabold">Olá,</h2>
            <h3 className="pt-1 pb-2">
              Eu sou a Cláudia, sabe como posso te ajudar?{" "}
            </h3>
            <p>
              Com encontros regulares e ética profissional, cada sessão é um
              passo em direção ao crescimento pessoal.
            </p>
            <h3 className="pt-3">Call me on : +123 98 8887</h3>
          </div>
        </div>
      </section>
      <CardValues />
      <CardsSessions />
    </>
  );
};

export default App;
