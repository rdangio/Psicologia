import DefaultButton from "../Button";
import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import { Description } from "../Description/Description";
import { Text } from "../Text/Text";
import { Title } from "../Titles/Titles";
import { dataSessions } from "./CardsSessionsData";

function CardsSessions() {
  return (
    <CentralizedContainer id="sessions" className="mb-20 mt-10">
      <div className={`mb-20`}>
        <div className="text-center">
          <Title className="text-c-turquoise-5">Tipos de Sessões</Title>
          <Description className="pb-5 text-c-turquoise-5">
            Atuo com diversos formatos de sessões para melhor atender a cada
            situação
          </Description>

          <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
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
                      <h2 className="to-99% bg-gradient-to-r from-c-turquoise-5 from-20% via-c-turquoise-4 via-70% to-c-turquoise-2 py-1 pl-3 text-left font-roboto-bold text-fs-h6 text-c-turquoise-1 xl:text-fs-h5">
                        {sessions.title}
                      </h2>
                    </div>
                  ) : (
                    // Executa somente se o card for o sexto
                    <div className="xl:py- flex flex-col items-center overflow-hidden rounded-ee-3xl rounded-ss-3xl border-2 border-c-turquoise-5 px-7 py-9 shadow-xl shadow-gray-600 sm:py-10 md:py-9 lg:py-7 2xl:py-[6px]">
                      <Description className="font-roboto-bold">
                        {sessions.title2}
                      </Description>
                      <Text className="text-fs-body pb-4 text-c-turquoise-5 md:hidden lg:block ">
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
