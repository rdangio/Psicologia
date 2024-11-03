import Form from "../Form";
import Logo from "../Logo/Logo";
import { FooterData } from "./FooterData";

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer className="w-full bg-c-turquoise-5">
      <div className="container flex flex-col flex-wrap justify-between px-10 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap md:justify-around sm:items-center">
        <Logo showSubtitle={true} showSocialMedia={true} />

        <div className="xs:w-60">
          <div className="flex flex-col flex-grow mt-10 text-center md:mt-10 md:text-left md:justify-end lg:mt-5 lg:justify-center">
            <h2 className="text-sm font-medium tracking-widest text-c-turquoise-1 uppercase title-font">
              Sobre
            </h2>
            <ul className="mt-3 list-none">
              <li className="mb-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-c-turquoise-4 cursor-pointer"
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

        <div className="flex text-center w-96 items-center md:mt-5 sm:mt-10">
          {/* Formulário */}
          <Form />
        </div>
      </div>
      <div className="bg-gray-300 w-full">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-c-turquoise-5 capitalize xs:text-center">
            &copy; {Year} RD Dev&Design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
