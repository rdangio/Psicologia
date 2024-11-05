import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbDiamond } from "react-icons/tb";

const classCard =
  "bg-c-turquoise-2 pb-0 pt-1 px-1 rounded-ss-3xl rounded-ee-3xl overflow-hidden shadow-inner shadow-black border-c-turquoise-5 border-1"; // Estilização da borda e sombra do card

const classTitle =
  "flex  items-center gap-3 p-1 rounded-ss-3xl rounded-ee-3xl overflow-hidden text-fs-h6 pt-1 font-roboto-bold text-c-turquoise-1 bg-gradient-to-r from-c-turquoise-5 from-10% via-c-turquoise-4 via-50% to-c-turquoise-2 to-95% "; // Estilização do titulo do card

const classText = "text-fs-h7 indent-8 font-roboto text-justify p-4"; // Texto dos valores

const detail = "text-c-turquoise-5 text-fs-h7 font-roboto-bold"; // Topicos dos Valores

export const dataValue = [
  {
    id: "1",
    icon: <TbTargetArrow className="ml-2" />,
    title: "Missão",
    text: "Proporcionar um ambiente seguro e acolhedor onde nossos pacientes possam explorar seus pensamentos, emoções e comportamentos. Nossa missão é oferecer atendimento psicológico de alta qualidade, com empatia e respeito, promovendo o bem-estar emocional e o desenvolvimento pessoal de cada indivíduo que atendemos.",
    classCard: `${classCard} sm:col-span-6 col-span-12`,
    classTitle,
    classText,
  },
  {
    id: "2",
    icon: <HiOutlineLightBulb className="ml-2" />,
    title: "Visão",
    text: "Ser uma referência em serviços de saúde mental, reconhecida por nossa abordagem humanizada, ética e baseada em evidências científicas. Almejamos ser um ponto de apoio para nossos pacientes em sua jornada de autoconhecimento e crescimento pessoal, contribuindo para uma sociedade mais consciente e equilibrada.",
    classCard: `${classCard} sm:col-span-6 col-span-12`,
    classTitle,
    classText,
  },
  {
    id: "3",
    icon: <TbDiamond className="ml-2" />,
    title: "Valores",
    classCard: `${classCard}   col-span-12`,
    classTitle,
    classText: `${classText}  pb-4`,
    text: (
      <p className="indent-0 text-justify p-2 text-fs-h7 leading-6">
        <img
          src="./src/assets/images/psi_1.png"
          className="w-5 h-5 inline-block"
          alt="Psy simbol"
        />
        <b className={`${detail} pl-2`}>Empatia:</b> Colocamos o respeito e a
        compreensão dos sentimentos de nossos pacientes em primeiro lugar,
        garantindo um ambiente seguro e acolhedor.
        <br />
        <img
          src="./src/assets/images/psi_1.png"
          className="w-5 h-5 inline-block"
          alt="Psy simbol"
        />
        <b className={`${detail} pl-2`}>Ética:</b> Atuamos com integridade e
        responsabilidade, preservando a confidencialidade e os direitos dos
        nossos pacientes.
        <br />
        <img
          src="./src/assets/images/psi_1.png"
          className="w-5 h-5 inline-block"
          alt="Psy simbol"
        />
        <b className={`${detail} pl-2`}>Respeito à Individualidade:</b>{" "}
        Valorizamos a diversidade e reconhecemos que cada pessoa é única,
        adaptando nossas abordagens para atender às necessidades específicas de
        cada paciente.
        <br />
        <img
          src="./src/assets/images/psi_1.png"
          className="w-5 h-5 inline-block"
          alt="Psy simbol"
        />
        <b className={`${detail} pl-2`}>Compromisso com o Crescimento:</b>{" "}
        Estamos sempre em busca de novas práticas e conhecimentos para oferecer
        as melhores soluções para nossos pacientes. <br />
        <img
          src="./src/assets/images/psi_1.png"
          className="w-5 h-5 inline-block"
          alt="Psy simbol"
        />
        <b className={`${detail} pl-2`}>Humanização:</b> Tratamos nossos
        pacientes com atenção e cuidado, colocando sempre o ser humano em
        primeiro lugar em todos os aspectos do nosso trabalho.
      </p>
    ),
  },
];
