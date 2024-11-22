import PropTypes from "prop-types";

const CentralizedContainer = ({ children, id="" }) => {
  return (
    <div id={id} className={`container mx-auto px-4`}>
      <div className={`mx-auto w-full max-w-[1080px]`}>{children}</div>
    </div>
  );
};

CentralizedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export default CentralizedContainer;
