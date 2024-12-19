import PropTypes from "prop-types";
import DefaultButton from "../Button";

const Cards = ({
  className = "",
  imageSrc,
  imageAlt,
  icon: Icon,
  showIcon = true,
  title,
  description,
  buttonText,
  onButtonClick,
  showButton = true,
  imageClassName = "",
}) => {
  return (
    <div
      className={`${className} relative max-w-xs rounded-2xl border border-solid border-gray-200 transition-all duration-500`}
    >
      <div className="block overflow-hidden rounded-2xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`${imageClassName} rounded-t-2xl`}
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="mb-2 flex items-center justify-center text-base font-semibold text-c-turquoise-5 transition-all duration-500">
          {showIcon && Icon && <Icon className="mr-2 text-c-turquoise-6" />}
          {title}
        </h4>
        <p className="mb-3 text-sm font-normal leading-5 text-gray-500 transition-all duration-500">
          {description}
        </p>
        {showButton && (
          <div className="flex justify-center">
            <DefaultButton className="text-fs-h5" onClickAction={onButtonClick}>
              {buttonText}
            </DefaultButton>
          </div>
        )}
      </div>
    </div>
  );
};

// Tipagem das props
Cards.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
  icon: PropTypes.elementType,
  showIcon: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  showButton: PropTypes.bool,
};

export default Cards;
