import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import { dataActuationExplain } from "./DataActuationExplain";

function ActuationExplain() {
  return (
    <CentralizedContainer className="mt-10">
      <div className="">
        <div className="flex flex-row">
          
          {/* essa é a parte do capitulo */}
          <div className="flex h-dvh w-[30%] bg-yellow-300 text-left">
            <ul>
              {dataActuationExplain.map((actuation) => {
                return (
                  <li key={actuation.id}>
                    {/* Mapeia todos os elementos do array actuation.capitulo */}
                    {actuation.capitulo.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </li>
                );
              })}
            </ul>
          </div>


          <div className="w-[70%] bg-green-500 text-center">
            
            
          </div>
        </div>
        ;
      </div>
    </CentralizedContainer>
  );
}

export default ActuationExplain;
