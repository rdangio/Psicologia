import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import { NavData } from "./NavData";
import Logo from "../Logo/Logo";
import DefaultButton from "../Button";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    // Menu responsivo ------->
    <div className="absolute left-0 right-0 top-14 block w-full bg-c-turquoise-5 transition lg:hidden">
      <ul className="p-6 text-center text-xl">
        {NavData.map((item, index) => (
          <Link key={index} spy={true} smooth={true} to={item.to}>
            <li className={item.cResponsive + "mb-4"}>{item.title}</li>
          </Link>
        ))}
        {/* Botão dentro do menu responsivo */}
        <div className="mt-2 flex justify-center">
          <DefaultButton>Agende sua Sessão</DefaultButton>
        </div>
      </ul>
    </div>
  );
  // Menu responsivo <-------

  return (
    <nav className="flex w-full justify-center">
      <div className="fixed top-4 z-50 flex h-16 w-[80%] rounded-lg bg-c-turquoise-5 px-4 py-4 text-fs-button text-c-turquoise-1 shadow-2xl sm:h-20 sm:px-8 lg:py-5">
        {/* Logo -------> */}
        <div className="z-30 flex flex-1 items-center">
          <Logo showSubtitle={false} />
        </div>
        {/* Logo <------- */}

        {/* Menu -------> */}
        <div className="items center z-10 hidden items-center justify-end md:flex lg:flex lg:flex-1">
          <div className="hidden items-center justify-end md:flex lg:flex lg:flex-1">
            <ul className="mr-2 flex gap-4 sm:mr-8 sm:gap-8">
              {NavData.map((item, index) => (
                <Link key={index} spy={true} smooth={true} to={item.to}>
                  <li className={item.cName}>{item.title}</li>
                </Link>
              ))}
            </ul>
            <DefaultButton hideOnResize={true}>Agende sua Sessão</DefaultButton>
          </div>
        </div>
        {/* Menu <------- */}

        {/* Menu responsivo recolhido -------> */}
        <div>{click && content}</div>
        <button className="block transition sm:hidden" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
        {/* Menu responsivo recolhido <------- */}
      </div>
    </nav>
  );
};

export default Nav;
