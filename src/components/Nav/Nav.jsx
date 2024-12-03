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
      <nav className="fixed left-0 top-3 z-50 w-full">
        <CentralizedContainer>
          <div className="flex w-full items-center justify-between gap-4 rounded-lg bg-c-turquoise-5 px-6 py-4 shadow-lg sm:h-20 lg:px-12 lg:py-5 h-[60px]">
            {/* Logo Session */}
            <div className="flex items-center">
              <Logo showSubtitle={false} />
            </div>

            {/* Menu Session */}
            <div className="hidden items-center gap-8 md:flex">
              <ul className="flex items-center gap-6 font-semibold text-c-turquoise-1 justify-between text-center">
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
                          className="inline-block px-4 py-1 hover:text-c-turquoise-3 md:px-1 cursor-pointer"
                          onClick={() => setOpen(false)} // Fecha o menu ao clicar
                        >
                          {item.title}
                        </ScrollLink>
                      ) : item.type === "router" ? (
                        // Links internos usando React Router
                        <RouterLink
                          to={item.to}
                          className="inline-block px-4 py-1 hover:text-c-turquoise-3 md:px-1"
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
                          className="inline-block px-4 py-1 hover:text-c-turquoise-3 md:px-1"
                          onClick={() => setOpen(false)} // Fecha o menu ao clicar
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Button Session */}
            {showButton && (
              <DefaultButton hideOnResize={false}>
                Agende sua Sessão
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
        </CentralizedContainer>
      </nav>

      {/* Mobile Sidebar Session */}
      <ReponsiveMenu open={open} closeMenu={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
