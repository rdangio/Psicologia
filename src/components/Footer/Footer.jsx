import Form from "../Form";
import Logo from "../Logo/Logo";
import { FooterData } from "./FooterData";

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer id="contato"  className="w-[100%] mx-auto m-0 bg-c-turquoise-5">
      <div className="flex flex-col items-center justify-between pt-8">
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

          {/* Formulário */}
          <Form />
      </div>
      <div className="w-full bg-c-turquoise-2 p-4 text-center font-roboto-bold text-c-turquoise-5">
          <p>&copy; {Year} RD Dev&Design</p>
      </div>
    </footer>
  );
};

export default Footer;
