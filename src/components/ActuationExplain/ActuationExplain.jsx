import PropTypes from "prop-types";
import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import { dataActuationExplain } from "./DataActuationExplain";
import LeftArrow from "../Icons/LeftArrow";
import UpArrow from "../Icons/UpArrow";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function ActuationExplain({ area }) {
  const selectedData = dataActuationExplain.find(
    (actuation) => actuation.id === area.toString(),
  );

  return (
    <>
      <CentralizedContainer id="top" className="mt-10 md:px-12 lg:px-4">
        <div className="">
          <div className="flex flex-row">
            {/* essa é a parte do capitulo */}
            {selectedData && (
              <div className="hidden h-dvh w-[30%] bg-c-turquoise-1 text-left md:flex">
                <ul className="w-full">
                  {selectedData.chapter.map((item, index) => (
                    <li className="" key={index}>
                      <div className="w-full">
                        <span className="">{item}</span>
                        <div className="mb-3 border-b-2 border-c-turquoise-6 pt-1"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* essa é a parte do conteudo */}
            {selectedData && (
              <div className="mx-auto w-[90%] border-x-c-turquoise-6 bg-c-turquoise-1 sm:w-[70%] md:border-l-2">
                <h1 className="pb-8 text-center font-roboto-bold sm:p-5 sm:pb-0 md:text-left">
                  {selectedData.title}
                </h1>
                <ul>
                  {selectedData.chapter.map((chapterItem, index) => (
                    <div key={index}>
                      <h2 className="pl-5 pt-3 font-bold">{chapterItem}</h2>
                      <div className="mb-3 border-b-2 border-c-turquoise-6 pt-1"></div>
                      {selectedData.text[index] && (
                        <h3
                          className="hyphens-auto pb-5 pl-5 text-justify indent-8"
                          dangerouslySetInnerHTML={{
                            __html: selectedData.text[index],
                          }}
                        />
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row justify-center gap-5">
          <RouterLink to="/">
            <div className="my-6 flex justify-center">
              <LeftArrow />
            </div>
          </RouterLink>

          <ScrollLink to="top" smooth={true} offset={-120} duration={500}>
            <div className="my-6 flex justify-center">
              <UpArrow />
            </div>
          </ScrollLink>
        </div>
      </CentralizedContainer>
      <div className="w-full bg-c-turquoise-2 py-[.4rem] text-center font-roboto-bold text-c-turquoise-5">
        <p>2024 RD Dev&Design</p>
      </div>
    </>
  );
}

ActuationExplain.propTypes = {
  area: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ActuationExplain;
