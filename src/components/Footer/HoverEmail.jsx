import { useState } from "react";
import PropTypes from "prop-types";

const HoverEmail = ({ label, info }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setTimeout(() => setIsHovered(false), 500);
  };

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
          href={`mailto:${info}`}
          className="absolute left-0 top-6 text-sm text-c-turquoise-4 underline"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {info}
        </a>
      )}
    </div>
  );
};

//Tipagem das propriedades (yarn add prop-types)
HoverEmail.propTypes = {
  label: PropTypes.string.isRequired, // Obrigatório, texto principal
  info: PropTypes.string, // Opcional, pois pode não existir
};

export default HoverEmail;
