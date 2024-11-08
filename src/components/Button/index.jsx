import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DefaultButton = ({ children, hideOnResize, ...props }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (hideOnResize) {
      const handleResize = () => {
        setIsVisible(window.innerWidth > 1120);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [hideOnResize]);

  if (!isVisible && hideOnResize) return null;

  return (
    <div>
      <button
        {...props}
        type="submit"
        className="whitespace-nowrap rounded-xl border border-white bg-c-turquoise-5 px-1 py-1 font-roboto text-xs font-medium text-c-turquoise-1 transition-all hover:bg-c-turquoise-6 active:bg-c-turquoise-3 active:font-roboto active:text-c-turquoise-5 sm:px-2 sm:py-2 sm:text-base"
      >
        {children}
      </button>
    </div>
  );
};

//Tipagem das propriedades (yarn add prop-types)
DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  hideOnResize: PropTypes.bool,
};

export default DefaultButton;
