import Nav from "../../components/Nav";
import Carousel from "../../components/Carousel";
import CardServices from "../../components/CardServices";

const App = () => {
  return (
    <div className="bg-slate-100">
      <Nav />
      <Carousel />
      <section className="w-full  bg-emerald-40">
        <div className="mx-40 pt-16">
          <h2
            className="text-slate-400 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] 
          md:text-[40px] md:text-center
          sm:text-[27px] sm:text-center
          text-[17px] text-center"
          >
            Nossos Serviços
          </h2>
          <h3
            className="text-slate-300 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)]
          md:text-[25px] md:text-center
          sm:text-[19px] sm:text-center
          text-[13px] text-center
          pt-10
          pb-10"
          >
            Not the answer re looking for? Printing and typesetting inLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys Lorem
          </h3>
        </div>
        <div className="flex justify-center">
          <CardServices />
        </div>
      </section>
    </div>
  );
};

export default App;
