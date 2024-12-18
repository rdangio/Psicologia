import Logo from "../Logo/Logo";
import HomeIcon from "../Icons/HomeIcon";
import AboutIcon from "../Icons/AboutIcon";
import EmailIcon from "../Icons/EmailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";

const whatsappLink = `https://wa.me/5514997030269?text=Olá, Cláudia! Estou entrando em contato para agendar um atendimento.`;

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer id="contato" className="w-[100%] bg-c-turquoise-5">
      <div className="flex flex-col items-center justify-between p-10 sm:flex-row sm:justify-evenly lg:justify-center">
        <div>
          <Logo showSubtitle={true} sm:showSocialMedia={true} />

          {/* Ícones redes sociais */}
          <div className="mt-4 flex justify-end gap-4 px-6">
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

        {/* Traço vertical que separa o logo dos ícones */}
        <div className="bg-c-turquoise-1 sm:mt-4 sm:h-40 sm:w-[1px] sm:rounded-full sm:shadow-md lg:mx-14"></div>

        {/* Ícones */}
        <div className="mt-10 flex items-center sm:mt-0">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <a href="/">
                <HomeIcon />
              </a>
              <a
                href="/"
                className="text-fs-h6 text-gray-600 hover:text-c-turquoise-4"
              >
                Home
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href="#">
                <AboutIcon />
              </a>
              <a
                href=""
                className="text-fs-h6 text-gray-600 hover:text-c-turquoise-4"
              >
                Quem sou?
              </a>
            </div>

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
        </div>
      </div>
      <div className="w-full bg-c-turquoise-2 py-[.4rem] text-center font-roboto-bold text-c-turquoise-5">
        <p> © {Year} RD Dev&Design</p>
      </div>
    </footer>
  );
};

export default Footer;
