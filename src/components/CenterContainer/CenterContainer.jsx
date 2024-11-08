import PropTypes from "prop-types";

const CenterContainer = ({ children }) => {
  return <div className="container">{children}</div>;
};

CenterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterContainer;
