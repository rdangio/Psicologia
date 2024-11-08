import { dataValue } from "./CardValuesData";

function CardValues() {
  return (
    <div className="mb-10 flex items-center justify-center">
      <div className="container grid items-center justify-center sm:w-[90%]">
        {/* desenho do card  */}
        <div className="mx-8 grid grid-cols-12 grid-rows-1 items-start gap-9">
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
              <p className={values.classText}>{values.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardValues;
