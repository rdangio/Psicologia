import PropTypes from "prop-types";

const DefaultButton = ({ children, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className="bg-purple-400 p-2 px-4 rounded-2xl font-bold hover:bg-purple-500 active:bg-purple-600 transition-all"
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
