import PropTypes from "prop-types";

const CentralizedContainer = ({ children }) => {
  return (
    <div className={`container mx-auto px-4`}>
      <div className={`mx-auto w-full max-w-[800px]`}>{children}</div>
    </div>
  );
};

CentralizedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CentralizedContainer;
