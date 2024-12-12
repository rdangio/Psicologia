import PropTypes from "prop-types";
import { FooterData } from "../Footer/FooterData";

const Logo = ({ showSubtitle, showSocialMedia }) => {
  // Encontra o objeto com `socialLinks` dentro de `FooterData`
  const contactData = FooterData.find((data) => data.socialLinks);

  return (
    <div className="flex  items-center gap-2">

        <img
          className="mt-[.65rem] sm:mt-[1.3rem] w-20 min-w-[80px] sm:w-24 sm:min-w-[100px]"
          src={"/Logos/logo-psico-preto.webp"}
          alt="logo"
        />


      <div className="text-center sm:text-left">
        <p className="whitespace-nowrap text-center font-eurofucence text-sm text-c-turquoise-1 sm:text-md">
          C L Á U D I A <br />
          D A N G I Ó <br />
        </p>
        {showSubtitle && (
          <span className="whitespace-nowrap font-florencesans text-[8px] text-c-turquoise-1 sm:text-[10px]">
            PSICÓLOGA - CRP 06 / 136891
          </span>
        )}

        {/* Ícones das redes sociais */}
        {showSocialMedia && (
          <div className="mt-2 flex justify-center space-x-4">
            {contactData?.socialLinks?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={link.cName}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

//Tipagem das propriedades (yarn add prop-types)
Logo.propTypes = {
  showSubtitle: PropTypes.bool,
  showSocialMedia: PropTypes.bool,
};

Logo.defaultProps = {
  showSubtitle: false,
  showSocialMedia: false,
};

export default Logo;
