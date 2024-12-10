import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import { Description } from "../Description/Description";
import { Text } from "../Text/Text";
import { Title } from "../Titles/Titles";
import { dataValue } from "./CardValuesData";

function CardValues() {
  return (
    <CentralizedContainer id="pillars" className="mt-16">
      <div className="flex items-center justify-center">
        <div className="grid items-center justify-center">
          <div className="mb-5">
            <Title>Os Pilares</Title>
            <Description className="text-center">
              Promovemos um espaço de acolhimento e desenvolvimento humano,
              guiados pela missão de fortalecer o bem-estar emocional, com a
              visão de transformar vidas e valores baseados em empatia, respeito
              e compromisso com cada paciente.
            </Description>
          </div>
          {/* desenho do card  */}
          <div className="mx-auto grid items-start gap-10 sm:grid-cols-12 sm:grid-rows-1 md:gap-7 lg:gap-6 mb-12">
            {dataValue.map((values) => (
              // estilização do card
              <div key={values.id} className={`${values.classCard} `}>
                {/* titulo do card */}
                <div className={`${values.classTitle}`}>
                  {values.icon}
                  {values.title}
                </div>
                <Text className="px-8 pb-6 pt-5 text-justify indent-8 hyphens-auto">
                  {values.text}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CentralizedContainer>
  );
}

export default CardValues;
