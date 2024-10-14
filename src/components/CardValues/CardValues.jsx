import { dataValue } from "./CardValuesData";


function CardValues() {
  return (
    <section className=" h-[580px]">
      <div className="grid place-content-center ">
        <div className="w-[800px] gap-6 grid grid-cols-2 mt-14">
          {dataValue.map((values) => (
            <div
              key={values.id}
              className="bg-[#DEF2F1] p-1 rounded-xl shadow-inner shadow-gray-600 border-[#2B7A78] border-2"
            >

                <p className="bg-[#17252A] p-1 rounded-3xl text-xl pt-1 text-center font-roboto-bold text-[#FEFFFF]">
                  {values.title}
                </p>

              <p className="font-roboto text-center text-sm p-6 pt-3">
                {values.text}
              </p>
            </div>
          ))}
          <div className="bg-[#DEF2F1] p-1 rounded-xl w-[800px] flex flex-col shadow-inner shadow-gray-600 border-[#2B7A78] border-2">
            <p className="bg-[#17252A] p-1 rounded-3xl text-xl pt-1 text-center font-roboto-bold text-[#FEFFFF]">
              Valores
            </p>
            <p className="font-roboto text-center  p-6 pt-3">
              <b className="bg-[#3AAFA9] px-1 rounded-lg">Empatia:</b> Colocamos
              o respeito e a compreensão dos sentimentos de nossos pacientes em
              primeiro lugar, garantindo um ambiente seguro e acolhedor.
              <b className="bg-[#3AAFA9] px-1 rounded-lg">Ética:</b> Atuamos com
              integridade e responsabilidade, preservando a confidencialidade e
              os direitos dos nossos pacientes.
              <b className="bg-[#3AAFA9] px-1 rounded-lg">
                Respeito à Individualidade:
              </b>{" "}
              Valorizamos a diversidade e reconhecemos que cada pessoa é única,
              adaptando nossas abordagens para atender às necessidades
              específicas de cada paciente.
              <b className="bg-[#3AAFA9] px-1 rounded-lg">
                Compromisso com o Crescimento:
              </b>{" "}
              Estamos sempre em busca de novas práticas e conhecimentos para
              oferecer as melhores soluções para nossos pacientes.
              <b className="bg-[#3AAFA9] px-1 rounded-lg">Humanização:</b>{" "}
              Tratamos nossos pacientes com atenção e cuidado, colocando sempre
              o ser humano em primeiro lugar em todos os aspectos do nosso
              trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardValues;
