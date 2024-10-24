import PropTypes from 'prop-types';

const CenterContainer = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {children}
    </div>
  );
};

CenterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterContainer;