import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import { NavData } from "./NavData";
import { NavDataResponsive } from "./NavDataResponsive";
import Logo from "../Logo/Logo";
import DefaultButton from "../Button";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-600 transition">
      <ul className="text-center text-xl p-20">
        {NavDataResponsive.map((item, index) => (
          <Link key={index} spy={true} smooth={true} to={item.to}>
            <li className={item.cName}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="bg-nav border-b-slate-500 border-b-2 shadow-2xl fixed w-[80%] h-20 flex justify-between z-50 text-white lg:py-5 px-20 py-4">
      {/* Logo -------> */}
      <div className="flex items-center flex-1 z-30">
        <span>
          <Logo />
        </span>
      </div>
      {/* Logo <------- */}

      <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden items-center z-10">
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 mr-16 text-[18px]">
            {NavData.map((item, index) => (
              <Link key={index} spy={true} smooth={true} to={item.to}>
                <li className={item.cName}>{item.title}</li>
              </Link>
            ))}
          </ul>
          <DefaultButton>Agende sua Sessão</DefaultButton>
        </div>
      </div>

      <div>{click && content}</div>
      <button className="block sm:hidden transition" onClick={handleClick}>
        {click ? <FaTimes /> : <CiMenuFries />}
      </button>
    </nav>
  );
};

export default Nav;
