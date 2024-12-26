import PropTypes from "prop-types";

const Logo = ({ showSubtitle }) => {
  // Encontra o objeto com `socialLinks` dentro de `FooterData`

  return (
    <div className="flex items-center gap-2">
      <img
        className="mt-[.65rem] w-20 min-w-[80px] sm:mt-[1.3rem] sm:w-24 sm:min-w-[100px]"
        src={"/Logos/logo-psico-preto.webp"}
        alt="logo"
      />

      <div className="text-center sm:text-left">
        <p className="sm:text-md whitespace-nowrap text-center font-eurofucence text-sm text-c-turquoise-1">
          C L Á U D I A <br />
          D A N G I Ó <br />
        </p>
        {showSubtitle && (
          <span className="whitespace-nowrap font-florencesans text-[8px] text-c-turquoise-1 sm:text-[10px]">
            PSICÓLOGA - CRP 06 / 136891
          </span>
        )}
      </div>
    </div>
  );
};

//Tipagem das propriedades (yarn add prop-types)
Logo.propTypes = {
  showSubtitle: PropTypes.bool,
};

Logo.defaultProps = {
  showSubtitle: false,
};

export default Logo;
