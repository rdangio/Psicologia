import DefaultButton from "../Button";
import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import { Description } from "../Description/Description";
import { Text } from "../Text/Text";
import { Title } from "../Titles/Titles";
import { dataSessions } from "./CardsSessionsData";

function CardsSessions() {
  return (
    <CentralizedContainer>
      <div className="mb-20">
        <div className="flex flex-col items-center text-center">
          <Title className="mt-10">Tipos de Sessões</Title>
          <Description className="pb-5">
            Atuo com diversos formatos de sessões para melhor atender a cada
            situação
          </Description>

          <div className="container grid gap-7 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
            {dataSessions.map((sessions) => {
              // console.log("ID atual:", sessions.id); // Verifica o valor de sessions.id para cada item
              return (
                <div key={sessions.id} className="w-full">
                  {/* cria todos os cards  */}
                  {sessions.id !== "6" ? (
                    <div className="overflow-hidden rounded-ee-3xl rounded-ss-3xl border-2 border-c-turquoise-5 shadow-xl shadow-gray-600">
                      {/* imagem  */}
                      <img
                        src={sessions.imagem}
                        alt="Imagens tipos de sessões"
                        className="w-full"
                      />
                      {/* texto  */}
                      <h2 className="to-99% bg-gradient-to-r from-c-turquoise-5 from-20% via-c-turquoise-4 via-70% to-c-turquoise-2 py-1 pl-3 text-left font-roboto-bold text-fs-h8 text-c-turquoise-1 sm:text-fs-h7 md:text-fs-h7 lg:text-fs-h6 xl:text-fs-h5">
                        {sessions.title}
                      </h2>
                    </div>
                  ) : (
                    // Executa somente se o card for o sexto
                    <div className="overflow-hidden rounded-ee-3xl rounded-ss-3xl border-2 border-c-turquoise-5 px-7 py-9 shadow-xl shadow-gray-600 sm:py-4 md:py-7 lg:py-5 xl:py-3 2xl:py-16">
                      <Description className="font-roboto-bold">
                        {sessions.title2}
                      </Description>
                      <Text className="text-fs-body pb-4 text-gray-700 md:hidden lg:block">
                        {sessions.text}
                      </Text>
                      <DefaultButton
                        className="px-4 text-fs-h6 md:text-fs-h8 lg:text-fs-h6"
                        hideOnResize={false}
                      >
                        Agendar
                      </DefaultButton>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CentralizedContainer>
  );
}

export default CardsSessions;
