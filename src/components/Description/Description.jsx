import PropTypes from "prop-types";

export function Description({ children, className = "" }) {
  return (
    <h3
      className={`${className} sm:w-min-[20rem] md:w-min-[25rem] lg:w-min-[35rem] xl:w-min-[40rem] pb-2 font-roboto text-fs-h8 text-c-turquoise-5 sm:text-fs-h7 md:text-fs-h6 lg:text-fs-h6 xl:text-fs-h4`}
    >
      {children}
    </h3>
  );
}

//Tipagem das propriedades (yarn add prop-types)
Description.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
