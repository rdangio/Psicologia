import { Button } from "react-scroll";
import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import { dataActuationExplain } from "./DataActuationExplain";
import DefaultButton from "../Button";

function ActuationExplain() {
  return (
    <>
      <CentralizedContainer className="mt-10  md:px-12 lg:px-4">
        <div className="">
          <div className="flex flex-row">
            {/* essa é a parte do capitulo */}
            <div className="hidden md:flex h-dvh w-[30%] bg-c-turquoise-1 text-left">
              <ul className="w-full">
                {dataActuationExplain.map((actuation) => {
                  return (
                    <li className="" key={actuation.id}>
                      {/* Mapeia todos os elementos do array actuation.capitulo */}
                      {actuation.chapter.map((item, index) => (
                        <div className="w-full" key={index}>
                          {item}
                          <div className="mb-3 border-b-2 border-c-turquoise-6 pt-1"></div>
                        </div>
                      ))}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mx-auto w-[90%] sm:w-[70%] md:border-l-2 border-x-c-turquoise-6 bg-c-turquoise-1">
              <h1 className="pb-5 sm:pb-0 sm:p-5 text-center md:text-left font-roboto-bold">
                {dataActuationExplain[0].title}
              </h1>
              <ul>
                {dataActuationExplain.map((actuation) => (
                  <li className="pl-5" key={actuation.id}>
                    {actuation.chapter.map((chapterItem, index) => (
                      <div key={index}>
                        <h2 className="p-1 font-bold">{chapterItem}</h2>
                        <div className="mb-3 border-b-2 border-c-turquoise-6 pt-1"></div>{" "}
                        {actuation.text[index] && (
                          <h3
                            className="hyphens-auto pb-5 text-justify indent-8"
                            dangerouslySetInnerHTML={{
                              __html: actuation.text[index],
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      <DefaultButton className="flex items-center justify-center">Voltar</DefaultButton>
      </CentralizedContainer>
      <div className="w-full bg-c-turquoise-2 py-[.4rem] text-center font-roboto-bold text-c-turquoise-5">
        <p>2024 RD Dev&Design</p>
      </div>
    </>
  );
}

export default ActuationExplain;
