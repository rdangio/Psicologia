import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbDiamond } from "react-icons/tb";

const classCard =
  "flex flex-col  bg-[#DEF2F1] pb-0 pt-1 px-1 rounded-xl shadow-inner shadow-gray-600 border-[#2B7A78] border-2 ";
const classTitle =
  "flex  items-center gap-2 bg-[#17252A] p-1 rounded-lg text-xl pt-1 font-roboto-bold text-[#FEFFFF]  ";
const classText =
  "text-pretty text-balance indent-8 font-roboto text-justify p-6 leading-7 border-bottom";
const detail = "p-1 rounded-md text-[#2B7A78] font-lg underline underline-offset-2";

export const dataValue = [
  {
    id: "1",
    icon: <TbTargetArrow className="ml-2" />,
    title: "Missão",
    text: "Proporcionar um ambiente seguro e acolhedor onde nossos pacientes possam explorar seus pensamentos, emoções e comportamentos. Nossa missão é oferecer atendimento psicológico de alta qualidade, com empatia e respeito, promovendo o bem-estar emocional e o desenvolvimento pessoal de cada indivíduo que atendemos.",
    classCard,
    classTitle,
    classText,
  },
  {
    id: "2",
    icon: <HiOutlineLightBulb className="ml-2" />,
    title: "Visão",
    text: "Ser uma referência em serviços de saúde mental, reconhecida por nossa abordagem humanizada, ética e baseada em evidências científicas. Almejamos ser um ponto de apoio para nossos pacientes em sua jornada de autoconhecimento e crescimento pessoal, contribuindo para uma sociedade mais consciente e equilibrada.",
    classCard,
    classTitle,
    classText,
  },
  {
    id: "3",
    icon: <TbDiamond className="ml-2" />,
    title: "Valores",
    classCard: `${classCard} row-span-2  col-span-2`,
    classTitle,
    classText: `${classText}  indent-0 pb-5`,
    text: (
      <p>
        <b className={detail}>Empatia:</b> Colocamos o respeito e a compreensão
        dos sentimentos de nossos pacientes em primeiro lugar, garantindo um
        ambiente seguro e acolhedor.
        <br />
        <b className={detail}>Ética:</b> Atuamos com integridade e
        responsabilidade, preservando a confidencialidade e os direitos dos
        nossos pacientes.
        <br />
        <b className={detail}>Respeito à Individualidade:</b> Valorizamos a
        diversidade e reconhecemos que cada pessoa é única, adaptando nossas
        abordagens para atender às necessidades específicas de cada paciente.
        <br />
        <b className={detail}>Compromisso com o Crescimento:</b> Estamos sempre
        em busca de novas práticas e conhecimentos para oferecer as melhores
        soluções para nossos pacientes. <br />
        <b className={detail}>Humanização:</b> Tratamos nossos pacientes com
        atenção e cuidado, colocando sempre o ser humano em primeiro lugar em
        todos os aspectos do nosso trabalho.
      </p>
    ),
  },
];
