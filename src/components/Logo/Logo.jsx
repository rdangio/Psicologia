import PropTypes from "prop-types";
import { FooterData } from "../Footer/FooterData";

const Logo = ({ showSubtitle, showSocialMedia }) => {
  // Encontra o objeto com `socialLinks` dentro de `FooterData`
  const contactData = FooterData.find((data) => data.socialLinks);

  return (
    <div className="flex items-center gap-3 min-w-[150px] mt-4">
      <div>
        <img
          className="w-24 sm:w-28 min-w-[80px] sm:min-w-[100px]"
          src={"/src/assets/Logos/logo-psico-preto.webp"}
          alt="logo"
        />
      </div>

      <div className="text-center sm:text-left">
        <p className="font-eurofucence text-center text-sm sm:text-xl whitespace-nowrap text-c-turquoise-1">
          C L Á U D I A <br />
          D A N G I Ó <br />
        </p>
        {showSubtitle && (
          <span className="font-florencesans text-[8px] sm:text-[10px] whitespace-nowrap text-c-turquoise-1">
            PSICÓLOGA - CRP 06 / 136891
          </span>
        )}

        {/* Ícones das redes sociais */}
        {showSocialMedia && (
          <div className="flex justify-center space-x-4 mt-2">
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
