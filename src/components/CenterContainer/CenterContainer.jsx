import PropTypes from 'prop-types';

const CenterContainer = ({ children }) => {
  return (
    <div className="container max-w-[60%] mx-auto p-4">
      {children}
    </div>
  );
};

CenterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterContainer;