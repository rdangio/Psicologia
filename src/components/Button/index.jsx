import PropTypes from "prop-types";

const DefaultButton = ({ children, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className="whitespace-nowrap bg-transparent text-text2 font-semibold hover:text-c-text2 py-2 px-4 border border-background hover:bg-c-hover1 rounded-xl transition-all active:bg-c-active1"
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
