
import { dataCardServices } from "./CardServicesData";

function CardServices() {
  return (
    <div className="container flex flex-col items-center">
      {/* Título e texto */}
      <div className="text-center">
        <h2
          className="text-c-turquoise-4 font-roboto-bold mt-4 
                        sm:text-fs-h6 md:text-fs-h5 lg:text-fs-h4"
        >
          Áreas de Atuação
        </h2>

        <h3 className="text-c-turquoise-5 font-roboto pt-3 pb-4
            sm:text-fs-h8 md:text-fs-h7 
            sm:w-[30rem] md:w-[35rem] lg:w-[45rem] ">
          Seja atendido por uma profissional experiente e qualificada.
          Desbloqueie sua vida, trate suas angústias. Comece seu tratamento.
          Alívio para sua tristeza.
        </h3>
      </div>

      {/* Grid dos Cards */}
      <div className="grid grid-cols-3 grid-rows-1 gap-x-5 mb-4 ">
        {dataCardServices.map((card) => (
          <div key={card.id}>
            {/* Imagem do Card (Linha 1/2) */}
            <div
              className={`${
                card.id % 3 === 0
                  ? "col-start-1"
                  : card.id % 3 === 1
                  ? "col-start-2"
                  : "col-start-3"
              } row-span-2 row-start-1`}
            >
              <div>
                <img
                  className="sm:w-35 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-xl shadow shadow-[#000000] border-c-turquoise-4 border-2"
                  src={card.image}
                  alt="imagens dos cards serviços"
                />
              </div>
            </div>

            {/* Card de Texto (Linha 2) */}
            <div
              className={`${
                card.id % 3 === 0
                  ? "col-start-1"
                  : card.id % 3 === 1
                  ? "col-start-2"
                  : "col-start-3"
              }  row-start-2 flex justify-center items-start sm:-mt-4`}
            >
              <div className="flex flex-col items-center justify-center 
                    sm:w-[10.5rem] md:w-36 lg:w-52 bg-c-turquoise-1 rounded-xl shadow-2xl border-2 border-b-c-turquoise-4">
                {/* Título */}
                <p
                  className="mt-3 text-center text-c-turquoise-4 underline underline-offset-2 font-roboto-bold 
                              text-sm md:text-sm lg:text-lg"
                >
                  {card.title}
                </p>
                {/* Texto */}
                <p className="text-black font-roboto text-fs-h8 text-center lg:text-fs-h8 sm:text-fs-h9 lg:py-3 pt-2 p-2">
                  {card.text}
                </p>
                {/* Botão Saiba Mais */}

                <button className="sm:mb-2 md:mb-2 lg:mb-3 sm:text-fs-h9 lg:text-fs-h8  text-c-turquoise-1 py-1 px-3 border-2 bg-c-turquoise-5 rounded-lg font-roboto hover:shadow-c-turquoise-4 hover:bg-c-turquoise-4 hover:shadow-md hover:text-white">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardServices;
