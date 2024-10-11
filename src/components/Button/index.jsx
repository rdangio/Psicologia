import PropTypes from "prop-types";

const DefaultButton = ({ children, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className="whitespace-nowrap bg-transparent text-text2 font-semibold hover:text-white py-2 px-4 border border-background hover:bg-hover1 rounded-xl transition-all active:bg-active1"
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
