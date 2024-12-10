import Form from "../Form";
import Logo from "../Logo/Logo";
import { FooterData } from "./FooterData";

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer id="contato"  className="w-full bg-c-turquoise-5">
      <div className="md:flex-no-wrap container mx-auto flex flex-col flex-wrap justify-between px-10 py-10 sm:items-center md:flex-row md:items-center md:justify-around lg:items-start">
        <Logo showSubtitle={true} showSocialMedia={true} />

        <div className="xs:w-60">
          <div className="mt-10 flex flex-grow flex-col text-center md:mt-10 md:justify-end md:text-left lg:mt-5 lg:justify-center">
            <h2 className="title-font text-sm font-medium uppercase tracking-widest text-c-turquoise-1">
              Sobre
            </h2>
            <ul className="mt-3 list-none">
              <li className="mb-3">
                <a
                  href="#"
                  className="cursor-pointer text-gray-400 hover:text-c-turquoise-4"
                >
                  Quem Sou?
                </a>
              </li>
              {FooterData.map((item, index) => (
                <li key={index} className={item.cName}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-96 items-center text-center sm:mt-10 md:mt-5">
          {/* Formulário */}
          <Form />
        </div>
      </div>
      <div className="w-full bg-gray-300">
        <div className="container mx-auto px-5 py-4">
          <p className="text-sm capitalize text-c-turquoise-5 xs:text-center">
            &copy; {Year} RD Dev&Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
