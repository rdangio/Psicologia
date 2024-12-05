import { NavData } from "../Nav/NavData";
import DefaultButton from "../Button/index";
import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";
import Logo from "../Logo/Logo";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import ReponsiveMenu from "./ReponsiveMenu";
import { Link as ScrollLink } from "react-scroll"; // Para scroll interno
import { Link as RouterLink } from "react-router-dom"; // Para rotas internas (React Router DOM)

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // Hook para monitorar o tamanho da janela
  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth >= 1024); // Exibir botão somente em telas grandes
      if (window.innerWidth >= 768) {
        setOpen(false); // Fecha o menu em telas grandes
      }
    };

    handleResize(); // Verifica inicialmente
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <>
      <CentralizedContainer className="w-[600px] ml-0">
        <nav className="fixed  z-10 w-[97%] ">
          {/* aqui é o tamanho da div nav  */}
          <div className="w-[120%] sm:w-[208%] md:w-[100%] mt-3 flex items-center sm:gap-[1rem] md:gap-[4rem] lg:gap-[2.8rem] rounded-lg bg-c-turquoise-5 h-14 sm:h-20 md:px-[4.9rem] lg:px-2 lg:py-5 sm:px-7 px-5 justify-between">
            {/* Logo Session */}
            {/* <div className="flex items-center"> */}
              <Logo showSubtitle={false} />
            {/* </div> */}

            {/* Menu Session */}
            {/* <div className="hidden items-center gap-3 md:flex"> */}
              <ul className="hidden md:flex items-center justify-between md:gap-4 text-center font-semibold text-c-turquoise-1">
                {NavData.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.type === "internal" ? (
                        // Scroll interno (para uma seção específica na mesma página)
                        <ScrollLink
                          to={item.to}
                          smooth={true}
                          offset={-120}
                          duration={500}
                          className="inline-block cursor-pointer px-4 py-1 sm:text-fs-h6 lg:text-fs-h5 hover:text-c-turquoise-3 md:px-1"
                          onClick={() => setOpen(false)} // Fecha o menu ao clicar
                        >
                          {item.title}
                        </ScrollLink>
                      ) : item.type === "router" ? (
                        // Links internos usando React Router
                        <RouterLink
                          to={item.to}
                          className="inline-block px-4 py-1 sm:text-fs-h6 lg:text-fs-h5 hover:text-c-turquoise-3 md:px-1"
                          onClick={() => setOpen(false)} // Fecha o menu ao clicar
                        >
                          {item.title}
                        </RouterLink>
                      ) : (
                        // Links externos absolutos
                        <a
                          href={item.to}
                          target=""
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-1 sm:text-fs-h6 lg:text-fs-h5  hover:text-c-turquoise-3 md:px-1"
                          onClick={() => setOpen(false)} // Fecha o menu ao clicar
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            {/* </div> */}

            {/* Button Session */}
            {showButton && (
              <DefaultButton hideOnResize={false}>
                Agendar Sessão
              </DefaultButton>
            )}

            {/* Moobile Menu Session */}
            <button
              className="block md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
            >
              <MdMenu className="text-3xl text-c-turquoise-1" />
            </button>
          </div>
        </nav>
      </CentralizedContainer>

      {/* Mobile Sidebar Session */}
      <ReponsiveMenu open={open} closeMenu={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
