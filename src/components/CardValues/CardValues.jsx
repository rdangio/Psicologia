import { dataValue } from "./CardValuesData";

function CardValues() {
  return (
    <section className=" h-auto">
      <div className="grid place-content-center ">
        <div className="w-[800px] gap-6 grid grid-cols-2 grid-rows-2 mt-14 ">
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
  );
}

export default CardValues;
