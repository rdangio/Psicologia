import CenterContainer from "../CenterContainer/CenterContainer";
import { dataValue } from "./CardValuesData";

function CardValues() {
  return (
    <CenterContainer>
      <section>
        <div className="grid place-content-center ">
          <div className="w-[900px] gap-6 grid grid-cols-2 grid-rows-2 mt-10">
            {dataValue.map((values) => (
              <div key={values.id} className={values.classCard}>
                <p className={values.classTitle}>
                  {values.icon}
                  {values.title}
                </p>
                <p className={values.classText}>{values.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CenterContainer>
  );
}

export default CardValues;
