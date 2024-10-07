import PropTypes from "prop-types";

const DefaultButton = ({ children, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className="absolute border-2 bg-purple-400 p-1 px-2 rounded-2xl font-bold"
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
