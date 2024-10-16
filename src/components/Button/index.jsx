import PropTypes from "prop-types";

const DefaultButton = ({ children, ...props }) => {
  return (
    <div>
      <button
        {...props}
        type="submit"
        className="whitespace-nowrap 
        bg-transparent 
        text-c-text2 
        font-semibold
        border
        py-1 sm:py-2 
        px-3 sm:px-4
        text-xs sm:text-base
        border-white
        hover:bg-c-hover1
        active:bg-c-active1
        rounded-xl 
        transition-all"
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
