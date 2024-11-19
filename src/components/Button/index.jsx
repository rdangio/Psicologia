import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DefaultButton = ({
  className = "",
  children,
  hideOnResize,
  ...props
}) => {
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
        className={`${className} hidden whitespace-nowrap rounded-md border-2 border-white bg-c-turquoise-5 px-3 py-2 font-semibold text-white duration-200 hover:bg-c-turquoise-6 active:bg-c-turquoise-3 xs:block sm:block 2xl:block`}
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
  className: PropTypes.string,
};

export default DefaultButton;
