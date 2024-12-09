// import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
// import { Title }  from "../Titles/Titles";

import Form from "../Form";
import Logo from "../Logo/Logo";
import { FooterData } from "./FooterData";
import { Description } from "../Description/Description";

const Footer = () => {
  //Const para atualizar o ano junto ao rodapé
  const Year = new Date().getFullYear();

  return (
    <footer id="contato" className="w-[100%] bg-c-turquoise-5">
      <div className="flex flex-col justify-between items-center px-5 py-10">
        <Logo showSubtitle={true} showSocialMedia={false} />
        <div className="w-[100%]">
          <div className="mt-10 flex flex-col justify-center text-center md:mt-10 md:justify-end md:text-left lg:mt-5 lg:justify-center">
            <Description className="text-c-turquoise-1 text-center">
              Como me encontrar
            </Description>
            <ul className="mt-3 list-none justify-center">
              {FooterData.map((item, index) => (
                <li key={index} className={item.cName}>
                  <span className="flex gap-2">
                    {item.icon} {item.icon2}
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-96 items-center text-center sm:mt-10 md:mt-5"></div>
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
