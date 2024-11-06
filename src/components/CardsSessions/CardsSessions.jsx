import DefaultButton from "../Button";
import { dataSessions } from "./CardsSeccionsData";

function CardsSessions() {
  return (
    <div className="container bg-c-turquoise-1 flex flex-col  justify-center items-center mb-10 text-center">
      <div className="w-[89%] flex flex-col justify-center items-center">
        <p className="text-c-turquoise-6 font-roboto-bold mt-4 sm:text-fs-h6 md:text-fs-h5 lg:text-fs-h4">
          Tipos de Sessões
        </p>
        <p className="text-c-turquoise-5 font-roboto pt-3 pb-5 sm:text-fs-h8 md:text-fs-h7 sm:w-[30rem] md:w-[35rem] lg:w-[45rem]">
          Atuo com diversos formatos de sessões para melhor atender a cada
          situação
        </p>

        <div className="grid grid-rows-2 grid-cols-3 gap-10 ">
          {dataSessions.map((sessions) => {
            // console.log("ID atual:", sessions.id); // Verifica o valor de sessions.id para cada item
            return (
              <div key={sessions.id}>
                {sessions.id !== "6" ? (
                  <div className="border-2 border-c-turquoise-5 shadow-xl shadow-gray-600 rounded-ss-3xl rounded-ee-3xl overflow-hidden">
                    <img src={sessions.imagem} alt="" />
                    <h2
                      className="text-fs-h6 py-1 font-roboto-bold text-c-turquoise-1 text-left pl-6
                bg-gradient-to-r from-c-turquoise-5 from-20% via-c-turquoise-4 via-70% to-c-turquoise-2 to-99%"
                    >
                      {sessions.title}
                    </h2>
                  </div>
                ) : (
                  <div className="px-7 py-9 border-2 border-c-turquoise-5 shadow-xl shadow-gray-600 rounded-ss-3xl rounded-ee-3xl overflow-hidden">
                    <h2 className="p-4 text-fs-h6 font-roboto-bold text-c-turquoise-6">
                      {sessions.title2}
                    </h2>
                    <p className=" pb-4 text-fs-body text-gray-700">
                      {sessions.text}
                    </p>
                    <DefaultButton  hideOnResize={true}>Agendar Sessão</DefaultButton>
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
