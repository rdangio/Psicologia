import { Link } from "react-scroll";
import { SlArrowUp } from "react-icons/sl";

import Logo from "../Logo/Logo";
import AboutIcon from "../Icons/AboutIcon";
import EmailIcon from "../Icons/EmailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";

const whatsappLink = `https://wa.me/5514997030269?text=Olá, Cláudia! Estou entrando em contato para agendar um atendimento.`;

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer id="contato" className="relative w-[100%] bg-c-turquoise-5">
      {/* Seta para subir */}
      <Link
        to="top"
        smooth={true}
        duration={500}
        className="absolute right-5 top-5 cursor-pointer text-white hover:text-c-turquoise-3"
      >
        <SlArrowUp size={20} />
      </Link>

      <div className="flex flex-col items-center justify-center p-10 sm:flex-row sm:justify-around sm:gap-8 lg:justify-center">
        <div className="">
          <Logo showSubtitle={true} />
        </div>

        {/* Traço vertical que separa o logo dos ícones */}
        <div className="hidden h-40 w-[1px] rounded-full bg-c-turquoise-1 shadow-md md:block lg:mx-12"></div>

        {/* Links de contato */}
        <div className="mt-10 flex flex-col gap-3 sm:mt-0">
          {/* Quem sou? */}
          <div className="flex items-center gap-2">
            <Link to="about" smooth={true} duration={500}>
              <AboutIcon />
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-fs-h6 text-gray-600 hover:text-c-turquoise-4"
            >
              Quem sou?
            </Link>
          </div>

          {/* E-mail */}
          <div className="flex items-center gap-2">
            <a href="mailto:claudia.iroma@hotmail.com">
              <EmailIcon />
            </a>
            <a
              href="mailto:claudia.iroma@hotmail.com"
              className="text-fs-h6 text-gray-600 hover:text-c-turquoise-4"
            >
              E-mail
            </a>
          </div>

          {/* Telefone */}
          <div className="flex items-center gap-2">
            <a href={whatsappLink} target="_blank">
              <PhoneIcon />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fs-h6 text-gray-600 hover:text-c-turquoise-4"
            >
              Telefone
            </a>
          </div>
        </div>

        {/* Traço vertical que separa o logo dos ícones */}
        <div className="hidden h-40 w-[1px] rounded-full bg-c-turquoise-1 shadow-md md:block lg:mx-12"></div>

        {/* Links redes sociais */}
        <div className="mt-10 flex flex-col items-center gap-1 sm:mt-0">
          <p className="text-fs-h6 uppercase text-c-turquoise-1">
            Me siga nas redes sociais
          </p>
          <div className="flex justify-end gap-4 px-6">
            <a href="https://www.facebook.com/claudia.dangio" target="_blank">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/claudia_dangio" target="_blank">
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/claudia-dangi%C3%B3-21100469/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>

            <a href={whatsappLink} target="_blank">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full bg-c-turquoise-2 py-[.4rem] text-center font-roboto-bold text-c-turquoise-5">
        <p> © {Year} RD Dev&Design</p>
      </div>
    </footer>
  );
};

export default Footer;
