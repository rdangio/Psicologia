import { Description } from "../Description/Description";
import { Text } from "../Text/Text";
import { Title } from "../Titles/Titles";
import { dataCardServices } from "./CardServicesData";
import DefaultButton from "../Button";

function CardServices() {
  return (
    <div className="container flex flex-col items-center">
      {/* Título e texto */}
      <div className="mt-8 text-center">
        <Title>Áreas de Atuação</Title>
        <Description>
          Seja atendido por uma profissional experiente e qualificada.
        </Description>
        <Description className="mb-10 hidden sm:block">
          Desbloqueie sua vida, trate suas angústias. Comece seu tratamento.
          Alívio para sua tristeza.
        </Description>
      </div>

      {/* Grid dos Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Imagens - Primeira Linha */}
        {dataCardServices.map((card) => (
          <div
            key={card.id}
            className="relative mb-[65%] flex justify-center sm:mb-[170%] md:mb-[130%] lg:mb-[80%]"
          >
            <img
              className="w-full overflow-hidden rounded-ee-3xl rounded-ss-3xl border-2 border-c-turquoise-5 shadow-xl shadow-gray-600 sm:w-11/12"
              src={card.image}
              alt="imagens dos cards serviços"
            />
            {/* Card sobreposto */}
            <div className="absolute bottom-2 left-2 right-2 top-[85%] mx-auto flex h-fit flex-col items-center justify-start rounded-xl border-2 border-b-c-turquoise-3 border-l-c-turquoise-4 bg-c-turquoise-1 p-4 shadow-xl shadow-gray-600 sm:max-w-[83%]">
              <Description className="pb-2 text-center text-lg font-bold">
                {card.title}
              </Description>
              <Text className="pb-4 text-center">{card.text}</Text>
              <DefaultButton
                className="px-3 text-fs-h8 sm:text-fs-h8 lg:text-fs-h6"
                hideOnResize={false}
              >
                Saiba mais
              </DefaultButton>
              {/* <button className="rounded-lg border-2 bg-c-turquoise-5 px-4 py-2 font-roboto text-c-turquoise-1 hover:bg-c-turquoise-4 hover:text-white hover:shadow-md hover:shadow-c-turquoise-4">
                Saiba mais
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardServices;
