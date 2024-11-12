import { Description } from "../Description/Description";
import { Text } from "../Text/Text";
import { Title } from "../Titles/Titles";
import { dataValue } from "./CardValuesData";

function CardValues() {
  return (
    <div className="mb-10 flex items-center justify-center">
      <div className="container grid items-center justify-center sm:w-[81.8%]">
        <div>
          <Title>Os Pilares</Title>
          <Description className="text-center">Promovemos um espaço de acolhimento e desenvolvimento humano, guiados pela missão de fortalecer o bem-estar emocional, com a visão de transformar vidas e valores baseados em empatia, respeito e compromisso com cada paciente.</Description>
        </div>
        {/* desenho do card  */}
        <div className="mx-auto grid sm:grid-cols-12 sm:grid-rows-1 items-start  md:gap-7 lg:gap-12 gap-10">
          {dataValue.map((values) => (
            // estilização do card
            <div key={values.id} className={`${values.classCard} `}>
              {/* titulo do card */}
              <div className={`${values.classTitle}`}>
                {values.icon}
                {values.title}
              </div>
              {/* texto do card  */}
              {/* <p className=" text-balance indent-8 font-roboto text-justify p-6 leading-7 border-bottom">{values.classText}</p> */}
              <Text className="indent-8 text-justify pt-5 pb-6 px-8">{values.text}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardValues;
