import { useState } from "react";
import PropTypes from "prop-types";

const HoverPhone = ({ label, phoneNumber, message }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setTimeout(() => setIsHovered(false), 500); // Mantém o hover por mais tempo
  };

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="relative inline-block">
      {/* Palavra principal */}
      <span
        className="cursor-pointer text-gray-600 hover:text-c-turquoise-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {label}
      </span>

      {/* Informação extra exibida ao hover */}
      {isHovered && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 top-6 text-sm text-c-turquoise-4 underline"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {phoneNumber}
        </a>
      )}
    </div>
  );
};

//Tipagem das propriedades (yarn add prop-types)
HoverPhone.propTypes = {
  label: PropTypes.string.isRequired, // Texto principal
  phoneNumber: PropTypes.string.isRequired, // Número de telefone (obrigatório)
  message: PropTypes.string, // Mensagem opcional
};

export default HoverPhone;
