import DefaultButton from "../Button";
import { Description } from "../Description/Description";
import { Title } from "../Titles/Titles";
import { dataSessions } from "./CardsSessionsData";

function CardsSessions() {
  return (
    <div className="container mb-10 flex flex-col items-center justify-center bg-c-turquoise-1 text-center">
      <div className="flex w-[89%] flex-col items-center justify-center">
        <Title>Tipos de Sessões</Title>
        <Description>Atuo com diversos formatos de sessões para melhor atender a cada situação</Description>

        <div className="grid grid-cols-3 grid-rows-2 gap-10">
          {dataSessions.map((sessions) => {
            // console.log("ID atual:", sessions.id); // Verifica o valor de sessions.id para cada item
            return (
              <div key={sessions.id}>
                {sessions.id !== "6" ? (
                  <div className="overflow-hidden rounded-ee-3xl rounded-ss-3xl border-2 border-c-turquoise-5 shadow-xl shadow-gray-600">
                    <img
                      src={sessions.imagem}
                      alt="Imagens tipos de sessões"
                      className="w-full"
                    />
                    <h2 className="to-99% bg-gradient-to-r from-c-turquoise-5 from-20% via-c-turquoise-4 via-70% to-c-turquoise-2 py-1 pl-6 text-left font-roboto-bold text-fs-h6 text-c-turquoise-1">
                      {sessions.title}
                    </h2>
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-ee-3xl rounded-ss-3xl border-2 border-c-turquoise-5 px-7 py-9 shadow-xl shadow-gray-600">
                    <h2 className="p-4 font-roboto-bold text-fs-h6 text-c-turquoise-6">
                      {sessions.title2}
                    </h2>
                    <p className="text-fs-body pb-4 text-gray-700">
                      {sessions.text}
                    </p>
                    <DefaultButton hideOnResize={true}>
                      Agendar Sessão
                    </DefaultButton>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardsSessions;
