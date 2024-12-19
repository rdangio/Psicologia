import PropTypes from "prop-types";
import { FaClock } from "react-icons/fa";
import DefaultButton from "../Button";

//Função para chamada do whatsapp ao clicar no botão
const Cards = ({ className = "" }) => {
  const handleWhatsappClick = () => {
    const whatsappLink = `https://wa.me/5514997030269?text=Olá, Cláudia! Estou entrando em contato para agendar um atendimento.`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div
      className={`${className} relative max-w-xs rounded-2xl border border-solid border-gray-200 transition-all duration-500`}
    >
      <div className="block overflow-hidden rounded-2xl">
        <img
          src="/Images/horario.jpg"
          alt="Imagem de um relógio"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="mb-2 flex items-center justify-center text-base font-semibold text-c-turquoise-5 transition-all duration-500">
          <FaClock className="mr-2 text-c-turquoise-6" />
          Horários de Atendimento
        </h4>
        <p className="mb-3 text-sm font-normal leading-5 text-gray-500 transition-all duration-500">
          Segunda à sexta-feira: 9h às 18h
        </p>

        <div className="flex justify-center">
          <DefaultButton
            className="text-fs-h5"
            onClickAction={handleWhatsappClick}
          >
            Agendar Horário
          </DefaultButton>
        </div>
      </div>
    </div>
  );
};

//Tipagem das props
Cards.propTypes = {
  className: PropTypes.string,
};

export default Cards;
