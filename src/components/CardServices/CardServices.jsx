import CenterContainer from "../CenterContainer/CenterContainer";
import React from "react";
import { dataCardServices } from "./CardServicesData";

function CardServices() {
  return (
    <CenterContainer>
      <div className="flex flex-col items-center">
        {/* Título e texto */}
        <div>
          <h2
            className="text-c-turquoise-4 font-roboto-bold text-center pt-5 
                        text-fs-h7 lg:text-fs-h3 md:text-fs-h5"
          >
            Áreas de Atuação
          </h2>
          <div className="xl:w-[650px]">
            <h3 className="text-c-turquoise-5 font-roboto py-4 text-center sm:text-fs-h8 lg:text-fs-h5 md:text-fs-h7 md:w-[28rem] lg:w-[35rem] xl:w-full">
              Seja atendido por uma profissional experiente e qualificada.
              Desbloqueie sua vida, trate suas angústias. Comece seu tratamento.
              Alívio para sua tristeza.
            </h3>
          </div>
        </div>

        {/* Grid dos Cards */}
        <div className="grid grid-cols-3 grid-rows-2 gap-x-6 ">
          {dataCardServices.map((card) => (
            <React.Fragment key={card.id}>
              {/* Imagem do Card (Linha 1/2) */}
              <div
                className={`${
                  card.id % 3 === 0
                    ? "col-start-1"
                    : card.id % 3 === 1
                    ? "col-start-2"
                    : "col-start-3"
                } row-span-2 row-start-1 `}
              >
                <div>
                  <img
                    className="sm:w-32 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-xl shadow shadow-[#000000] border-c-turquoise-4 border-2"
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
                } row-start-2 flex justify-center items-start md:-mb-5 lg:mb-10`}
              >
                <div className="items-center justify-center flex flex-col sm:w-[10.5rem] md:w-36 lg:w-52 bg-c-turquoise-1 rounded-xl shadow-2xl border-2 border-b-c-turquoise-4">
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

                  <button className="md:mb-2 lg:mb-3 sm:text-fs-h9 lg:text-fs-h8  text-c-turquoise-1 px-3 border-2 bg-c-turquoise-5 rounded-lg font-roboto hover:shadow-c-turquoise-4 hover:bg-c-turquoise-4 hover:shadow-md hover:text-white">
                    Saiba mais
                  </button>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </CenterContainer>
  );
}

export default CardServices;
