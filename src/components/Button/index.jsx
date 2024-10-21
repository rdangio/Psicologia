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
        className="whitespace-nowrap 
        bg-transparent 
        text-c-text2 
        font-semibold
        border
        py-1 sm:py-2 
        px-1 sm:px-2
        text-xs sm:text-base
        border-white
        hover:bg-c-hover1
        active:bg-c-active1
        rounded-xl 
        transition-all"
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
