import PropTypes from "prop-types";

export function Text({ children, className = "" }) {
  return (
    <h3
      className={`${className} sm:w-min-[20rem] md:w-min-[25rem] lg:w-min-[35rem] xl:w-min-[60rem] text-fs-h8 sm:text-fs-h8 pb-2 font-roboto text-c-turquoise-5 md:text-fs-h7 lg:text-fs-h7 xl:text-fs-h5`}
    >
      {children}
    </h3>
  );

}

//Tipagem das propriedades (yarn add prop-types)
Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
