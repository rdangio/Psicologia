import { dataValue } from "./CardValuesData";

function CardValues() {
  return (
    <div className="flex justify-center items-center mb-10">
      <div className="container grid justify-center items-center sm:w-[90%]">
        {/* desenho do card  */}
        <div className="grid grid-cols-12 grid-rows-1 gap-9 items-start mx-8 ">
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
