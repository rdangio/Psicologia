import Nav from "../../components/Nav";
import Carousel from "../../components/Carousel";
import CardServices from "../../components/CardServices";

const App = () => {
  return (
    <div className="bg-slate-100">
      <Nav />
      <Carousel />
      <section className="bg-emerald-40 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center pt-7 items-center  w-[800px] ">
          <h2
            className="text-[#4A7D7E] drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] 
            md:text-[40px] md:text-center
            sm:text-[27px] sm:text-center
            text-[17px] text-center
            font-bold"
          >
            Áreas de atuação
          </h2>

          <h3
            className="text-[#4A7D7E] drop-shadow-[_2px_1px_rgba(0,0,0,1.55)]
            md:text-[25px] md:text-center
            sm:text-[19px] sm:text-center
            text-[13px] text-center
            pt-3
            pb-8
            text-bold"
          >
            Seja atendido por uma profissional experiente e qualificada.
            Desbloqueie sua vida, trate suas angústias. Comece seu tratamento.
            Alívio para sua tristeza.
          </h3>
        </div>

        <div className="flex justify-center">
          <CardServices />
        </div>
      </section>
      <section className="w-full">
        <div className="gap-16 bg-gradient-to-r from-[#A2CACA] to-[#4A7D7E] flex  justify-center items-center  h-[380px] mb-10 font-bold">
          <img
            className="-rotate-[20deg] shadow-lg shadow-purple-950 rounded-xl w-[20%]"
            src="/src/assets/images/claudia.jpg"
            alt=""
          />
          <div className="flex flex-col w-[50%] items-start p-10 text-purple-950">
            <h2 className="text-2xl font-extrabold">Olá,</h2>
            <h3 className="pt-1 pb-2">Eu sou a Cláudia, sabe como posso te ajudar? </h3>
            <p>
              Com encontros regulares e ética profissional, cada sessão é um
              passo em direção ao crescimento pessoal.
            </p>
            <h3 className="pt-3">Call me on : +123 98 8887</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
