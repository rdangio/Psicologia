import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import Logo from "../components/Logo";
import { NavDataResponsive } from "./NavDataResponsive";
import { NavData } from "./NavData";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
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
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        {/* Logo -------> */}
        <div className="flex items-center flex-1">
          <span>
            <Logo />
          </span>
        </div>
        {/* Logo <------- */}

        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden items-center">
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
            <ul className="flex gap-8 mr-16 text-[18px]">
              {NavData.map((item, index) => (
                <Link key={index} spy={true} smooth={true} to={item.to}>
                  <li className={item.cName}>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
