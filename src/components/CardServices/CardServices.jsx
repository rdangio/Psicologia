import { dataCardServices } from "./CardServicesData";

function CardServices() {
  

  return (
    <section className="bg-slate-50 flex flex-col justify-center items-center h-auto">
      <div className="flex flex-col justify-center pt-6 items-center  w-[800px]  ">
        <h2
          className="text-[#4A7D7E] drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] font-roboto-bold 
            md:text-[40px] md:text-center
            sm:text-[27px] sm:text-center
            text-[17px] text-center"
        >
          Áreas de Atuação
        </h2>

        <h3
          className="text-[#4A7D7E] drop-shadow-[_2px_1px_rgba(0,0,0,1.55)] font-roboto
            md:text-[25px] md:text-center
            sm:text-[19px] sm:text-center
            text-[13px] text-center
            pt-1
            pb-4"
        >
          Seja atendido por uma profissional experiente e qualificada.
          Desbloqueie sua vida, trate suas angústias. Comece seu tratamento.
          Alívio para sua tristeza.
        </h3>
      </div>

      <div className="flex gap-6 h-[450px] w-[800px]">
        {dataCardServices.map((card) => (
          <div key={card.id} className="relative">
            <img
              className="rounded-xl shadow shadow-[#000000] border-[#2B7A78] border-2 "
              src={card.image}
              alt=""
            />
            <div className="flex justify-center">
              <div className="bg-[#DEF2F1] absolute -mt-14 p-6 pb-14 w-[85%] rounded-xl shadow-2xl border-2 border-b-[#2B7A78] ">
                <p className="font-bold text-center text-[#2B7A78] font-lg underline underline-offset-2 font-roboto-bold">
                  {card.title}
                </p>
                <p className="text-black font-roboto text-sm text-center">{card.text}</p>
                <div className="justify-center flex">
                  <button className="mt-3  text-white absolute px-3 border-2 bg-[#17252A]  rounded-lg font-bold hover:shadow-[#3AAFA9] hover:shadow-md hover:text-white">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardServices;
