import { dataCardServices } from "./CardServicesData";

function CardServices() {
  return (
    <div className="container flex flex-col items-center">
      {/* Título e texto */}
      <div className="text-center">
        <h2 className="mt-4 font-roboto-bold text-c-turquoise-6 sm:text-fs-h6 md:text-fs-h5 lg:text-fs-h4">
          Áreas de Atuação
        </h2>

        <h3 className="pb-5 pt-3 font-roboto text-c-turquoise-5 sm:w-[30rem] sm:text-fs-h8 md:w-[35rem] md:text-fs-h7 lg:w-[45rem]">
          Seja atendido por uma profissional experiente e qualificada.
          <p className="hidden sm:block">
            Desbloqueie sua vida, trate suas angústias. Comece seu tratamento.
            Alívio para sua tristeza.
          </p>
        </h3>
      </div>

      {/* Grid dos Cards */}
      <div className="mb-6 grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-3 md:gap-x-7 lg:gap-x-14">
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
                  className="sm:w-35 overflow-hidden rounded-ee-3xl rounded-ss-3xl border-2 border-c-turquoise-5 shadow-xl shadow-gray-600 md:h-40 md:w-40 lg:h-60 lg:w-60"
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
              } row-start-2 -mt-20 mb-4 flex items-start justify-center sm:-mt-6 lg:-mt-8`}
            >
              <div className="flex w-[14rem] flex-col items-center justify-center rounded-xl border-2 border-b-c-turquoise-3 border-l-c-turquoise-4 bg-c-turquoise-1 shadow-2xl shadow-xl shadow-gray-600 sm:w-[10.5rem] md:w-36 lg:w-52">
                {/* Título */}
                <p className="mt-3 text-center font-roboto-bold text-sm text-c-turquoise-4 underline underline-offset-2 md:text-sm lg:text-lg">
                  {card.title}
                </p>
                {/* Texto */}
                <p className="p-2 pt-2 text-center font-roboto text-fs-h8 text-black sm:text-fs-h9 lg:py-3 lg:text-fs-h8">
                  {card.text}
                </p>
                {/* Botão Saiba Mais */}

                <button className="mb-2 rounded-lg border-2 bg-c-turquoise-5 px-3 py-1 font-roboto text-c-turquoise-1 hover:bg-c-turquoise-4 hover:text-white hover:shadow-md hover:shadow-c-turquoise-4 sm:mb-2 sm:text-fs-h9 md:mb-2 lg:mb-3 lg:text-fs-h8">
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
