import PropTypes from "prop-types";

const IconInfo = ({ text, icon }) => {
  return (
    <div className="mx-auto text-center">
      {icon}
      <h6 className="font-medium">{text}</h6>
    </div>
  );
};

//Tipagem das propriedades (yarn add prop-types)
IconInfo.propTypes = {
  text: PropTypes.string.isRequired, // 'text' deve ser uma string e é obrigatório
  icon: PropTypes.element.isRequired, // 'icon' deve ser um elemento React e é obrigatório
};

export default IconInfo;
