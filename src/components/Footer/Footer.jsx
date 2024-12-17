import Logo from "../Logo/Logo";
import HomeIcon from "../Icons/HomeIcon";
import AboutIcon from "../Icons/AboutIcon";
import EmailIcon from "../Icons/EmailIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import HoverEmail from "./HoverEmail";

const whatsappLink = `https://wa.me/5514997030269?text=Olá, Cláudia! Estou entrando em contato para agendar um atendimento.`;

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer id="contato" className="w-[100%] bg-c-turquoise-5">
      <div className="flex flex-col items-center justify-between pt-8">
        <Logo showSubtitle={true} sm:showSocialMedia={true} />

        <div className="flex items-center p-10">
          {/* Ícones */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <HomeIcon />
              <a href="/" className="text-gray-600 hover:text-c-turquoise-4">
                Home
              </a>
            </div>

            <div className="flex items-center gap-2">
              <AboutIcon />
              <a href="/" className="text-gray-600 hover:text-c-turquoise-4">
                Quem sou?
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a href="">
                <EmailIcon />
              </a>
              <a href="/" className="text-gray-600 hover:text-c-turquoise-4">
                <HoverEmail label="E-mail" info="claudia.iroma@hotmail.com" />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-c-turquoise-4"
              >
                Telefone
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-300">
        <div className="container mx-auto px-5 py-2">
          <p className="text-sm capitalize text-c-turquoise-5 xs:text-center">
            &copy; {Year} RD Dev&Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
