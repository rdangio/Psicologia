import CenterContainer from "../CenterContainer/CenterContainer";
import { dataCardServices } from "./CardServicesData";

function CardServices() {
  return (
    <CenterContainer>
      <section className="flex flex-col justify-center items-center">
        <div className="bg-c-turquoise-1  w-auto">
          <h2
            className="text-c-turquoise-4 drop-shadow-[_2px_2px_rgba(0,0,0,1.55)] font-roboto-bold text-center
            s-large:text-fs-h2 s-large:text-center
            s-medium:text-fs-h3 s-medium:text-center
            s-small:text-fs-h4 s-small:text-center 
            "
          >
            Áreas de Atuação
          </h2>

          <h3
            className="text-c-turquoise-4 drop-shadow-[_2px_1px_rgba(0,0,0,1.55)] font-roboto p-4 text-center
            s-large:text-fs-h4 s-large:text-center
            s-medium:text-fs-h5 s-medium:text-center
            s-small:text-fs-h6 s-small:text-center
            "
          >
            Seja atendido por uma profissional experiente e qualificada.
            Desbloqueie sua vida, trate suas angústias. Comece seu tratamento.
            Alívio para sua tristeza.
          </h3>
        </div>
        
        <div className="flex gap-6">
          {dataCardServices.map((card) => (
            <div key={card.id} >
              <img
                className="rounded-xl shadow shadow-[#000000] border-c-turquoise-4 border-2" 
                src={card.image}
                alt=""
              />
              <div className="flex items-center">
                <div className="bg-c-turquoise-1 -mt-14 p-6 pb-14 w-[90%] rounded-xl shadow-2xl border-2 border-b-c-turquoise-4 ">
                  <p className="text-center text-c-turquoise-4 underline underline-offset-2 font-roboto-bold text-fs-h6">
                    {card.title}
                  </p>
                  <p className="text-black font-roboto text-fs-h8 text-center">
                    {card.text}
                  </p>
                  <div className="justify-center flex">
                    <button className="mt-3 text-c-turquoise-1 absolute px-3 border-2 bg-c-turquoise-5 rounded-lg font-roboto hover:shadow-c-turquoise-4 hover:bg-c-turquoise-4 hover:shadow-md hover:text-white">
                      Saiba mais
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </CenterContainer>
  );
}

export default CardServices;
