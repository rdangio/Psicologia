import PropTypes from "prop-types";

const CentralizedContainer = ({ children }) => {
  return (
    <div className="container mx-auto px-4 bg-amber-200">
      <div className="max-w-[1080px] w-full mx-auto bg-purple-300">
        {children}
      </div>
    </div>
  );
};

CentralizedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CentralizedContainer;
