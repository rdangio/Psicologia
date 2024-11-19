import { NavData } from "../Nav/NavData";
import DefaultButton from "../Button/index";
import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import Logo from "../Logo/Logo";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ReponsiveMenu from "./ReponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <CentralizedContainer>
      <nav>
        <div className="container flex items-center justify-between py-8">
          {/* Logo Session */}
          <div className="z-30 flex flex-1 items-center">
            <Logo showSubtitle={false} />
          </div>

          {/* Menu Session */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 font-semibold text-c-turquoise-5">
              {NavData.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      className="inline-block px-3 py-1 hover:text-c-turquoise-3"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Button Session */}
          <div className="ml-8 flex items-center gap-4">
            <DefaultButton hideOnResize={true}>Agende sua Sessão</DefaultButton>
          </div>

          {/* Moobile Menu Session */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Session */}
      <ReponsiveMenu open={open} />
    </CentralizedContainer>
  );
};

export default Navbar;
