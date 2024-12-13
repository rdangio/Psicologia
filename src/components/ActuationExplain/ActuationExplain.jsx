import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import { dataActuationExplain } from "./DataActuationExplain";

function ActuationExplain() {
  return (
    <CentralizedContainer className="mt-10">
      <div className="">
        <div className="flex flex-row">
          {/* essa é a parte do capitulo */}
          <div className="0 flex h-dvh w-[30%] bg-c-turquoise-1 text-left">
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

          <div className="w-[70%] border-l-2 border-x-c-turquoise-6 bg-c-turquoise-1">
            <h1 className="p-5 text-left font-roboto-bold">
              {dataActuationExplain[0].title}
            </h1>
            <ul>
              {dataActuationExplain.map((actuation) => (
                <li className="pl-5" key={actuation.id}>
                  {actuation.chapter.map((chapterItem, index) => (
                    <div key={index}>
                      <h2 className="p-1 font-bold">{chapterItem}</h2>
                      {actuation.text[index] && (<h3 className="indent-8 hyphens-auto text-justify pb-5"
                        dangerouslySetInnerHTML={{ __html: actuation.text[index]}}/>)}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
        ;
      </div>
    </CentralizedContainer>
  );
}

export default ActuationExplain;
