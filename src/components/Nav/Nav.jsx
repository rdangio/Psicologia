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
    <div className="lg:hidden block absolute top-14 w-full left-0 right-0 bg-c-nav transition">
      <ul className="text-center text-xl p-6">
        {NavData.map((item, index) => (
          <Link key={index} spy={true} smooth={true} to={item.to}>
            <li className={item.cResponsive + "mb-4"}>{item.title}</li>
          </Link>
        ))}
        {/* Botão dentro do menu responsivo */}
        <div className="flex justify-center mt-2">
          <DefaultButton>Agende sua Sessão</DefaultButton>
        </div>
      </ul>
    </div>
  );
  // Menu responsivo <-------

  return (
      <nav className="flex justify-center w-full">
        <div className="top-4 bg-c-nav fixed rounded-lg shadow-2xl w-[80%] h-16 sm:h-20 flex z-50 text-c-text2 lg:py-5 px-4 sm:px-8 py-4 text-fs-button">
          {/* Logo -------> */}
          <div className="flex items-center flex-1 z-30">
            <Logo />
          </div>
          {/* Logo <------- */}

          {/* Menu -------> */}
          <div className="lg:flex md:flex lg:flex-1 items center justify-end hidden items-center z-10">
            <div className="lg:flex md:flex lg:flex-1 items-center justify-end hidden">
              <ul className="flex gap-4 sm:gap-8 mr-2 sm:mr-8">
                {NavData.map((item, index) => (
                  <Link key={index} spy={true} smooth={true} to={item.to}>
                    <li className={item.cName}>{item.title}</li>
                  </Link>
                ))}
              </ul>
              <DefaultButton hideOnResize={true}>
                Agende sua Sessão
              </DefaultButton>
            </div>
          </div>
          {/* Menu <------- */}

          {/* Menu responsivo recolhido -------> */}
          <div>{click && content}</div>
          <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
          {/* Menu responsivo recolhido <------- */}
        </div>
      </nav>
  );
};

export default Nav;
