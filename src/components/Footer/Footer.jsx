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
      <div className="flex flex-col items-center justify-between pt-8">
        <Logo showSubtitle={true} showSocialMedia={false} />
        <div className="w-[100%]">
          <div className="mt-4 flex flex-col justify-center text-center md:mt-6 md:justify-end lg:mt-5 ">
            <Description className="text-center text-c-turquoise-1">
              Como me encontrar
            </Description>
            <ul className="py-3 list-none justify-center">
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
