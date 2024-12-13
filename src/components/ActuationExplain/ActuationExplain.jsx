import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import { dataActuationExplain } from "./DataActuationExplain";
import LeftArrow from "../Icons/LeftArrow";
import UpArrow from "../Icons/UpArrow";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function ActuationExplain() {
  return (
    <>
      <CentralizedContainer className="mt-10 md:px-12 lg:px-4">
        <div className="">
          <div className="flex flex-row">
            {/* essa é a parte do capitulo */}
            <div className="hidden h-dvh w-[30%] bg-c-turquoise-1 text-left md:flex">
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

            <div className="mx-auto w-[90%] border-x-c-turquoise-6 bg-c-turquoise-1 sm:w-[70%] md:border-l-2">
              <h1 className="pb-5 text-center font-roboto-bold sm:p-5 sm:pb-0 md:text-left">
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
        <div className="flex flex-row justify-center gap-5">
          <Link to="/">
            <div className="my-6 flex justify-center">
              <LeftArrow />
            </div>
          </Link>
          <Link to="/ansiedade" onClick={<ScrollToTop />}>
            <div className="my-6 flex justify-center">
              <UpArrow />
            </div>
          </Link>
        </div>
      </CentralizedContainer>
      <div className="w-full bg-c-turquoise-2 py-[.4rem] text-center font-roboto-bold text-c-turquoise-5">
        <p>2024 RD Dev&Design</p>
      </div>
    </>
  );
}

export default ActuationExplain;
