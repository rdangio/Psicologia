import PropTypes from "prop-types";

export function Title({ children, className = "" }) {
  return (
    <h2
      className={`${className} pb-3 text-center font-roboto text-fs-h4 text-c-turquoise-6 md:text-fs-h4 lg:text-fs-h3 xl:text-fs-h2`}
    >
      {children}
    </h2>
  );
}

//Tipagem das propriedades (yarn add prop-types)
Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
