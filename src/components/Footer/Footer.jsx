import Form from "../Form";
import Logo from "../Logo/Logo";
import { FooterData } from "./FooterData";
import { Description } from "../Description/Description";

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer id="contato" className="mx-auto w-[100%] bg-c-turquoise-5">
      <div className="flex flex-col items-center 
      lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[10%]">
        <div className="flex flex-col items-center justify-between pt-8 
        md:pt-2 md:flex-row md:justify-center md:gap-16 
        lg:flex-col lg:items-center lg:gap-4"> 
          <Logo showSubtitle={true} showSocialMedia={true} />
          <div className="mt-10 flex flex-col text-center  
          lg:mt-5 lg:items-center">
            <Description className="uppercase text-c-turquoise-1 sm:text-fs-h6 lg:text-fs-h5">
            Como me encontrar
            </Description>
            <ul className="mt-2 list-none">
              {/* <li className="mb-2">
                <a
                  href="#"
                  className="cursor-pointer text-c-turquoise-1 hover:text-c-turquoise-6"
                >

                </a>
              </li> */}
              {FooterData.map((item, index) => (
                <li key={index} className={item.cName}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário */}
        </div>
        <Form />
      </div>
      <div className="w-full bg-c-turquoise-2 py-[.4rem] text-center font-roboto-bold text-c-turquoise-5">
        <p>&copy; {Year} RD Dev&Design</p>
      </div>
    </footer>
  );
};

export default Footer;
