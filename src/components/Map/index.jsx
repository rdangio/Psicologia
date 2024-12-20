import PropTypes from "prop-types";

const Map = ({ className = "" }) => {
  return (
    <>
      <div
        className={`${className} mt-10 h-full w-full border border-c-turquoise-5 sm:mt-0 sm:h-72 sm:border md:mt-4 md:border`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5815695966153!2d-48.55614798842151!3d-22.293834816169497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c75806b38724ad%3A0x90aaf1c8eac8e12b!2sR.%20Conde%20do%20Pinhal%2C%20186%20-%20Centro%2C%20Ja%C3%BA%20-%20SP%2C%2017201-040!5e0!3m2!1spt-BR!2sbr!4v1734352663773!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        />
      </div>
    </>
  );
};

//Tipagem da props
Map.propTypes = {
  className: PropTypes.string,
};

export default Map;
