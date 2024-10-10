import PropTypes from "prop-types";

const DefaultButton = ({ children, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className="bg-transparent hover:bg-button text-text1 font-semibold hover:text-white py-2 px-4 border border-background hover:border-transparent rounded transition-all"
      >
        {children}
      </button>
    </div>
  );
};

//Tipagem das propriedades (yarn add prop-types)
DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultButton;
