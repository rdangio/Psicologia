import { NavData } from "../Nav/NavData";
import DefaultButton from "../Button/index";
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
      <div className="flex justify-center">
        <nav className="fixed z-10 w-[104%] sm:w-[101%]">
          {/* aqui é o tamanho da div nav  */}
          <div className="mt-3 flex h-14 items-center justify-between rounded-lg bg-c-turquoise-5 px-3 
          sm:h-20 sm:w-[100%] sm:px-5
          md:gap-[2rem] md:px-[2rem] md:w-[100%]
          lg:gap-[2rem] lg:px-4
          xl:gap-[2.8rem] xl:px-8 xl:py-5">
            {/* Logo Session */}
            <Logo showSubtitle={false} />

            {/* Menu Session */}
            <ul className="hidden items-center justify-between text-center font-semibold text-c-turquoise-1 md:flex md:gap-4">
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
                        className="inline-block cursor-pointer px-4 py-1 hover:text-c-turquoise-3 sm:text-fs-h6 md:px-1 lg:text-fs-h5"
                        onClick={() => setOpen(false)} // Fecha o menu ao clicar
                      >
                        {item.title}
                      </ScrollLink>
                    ) : item.type === "router" ? (
                      // Links internos usando React Router
                      <RouterLink
                        to={item.to}
                        className="inline-block px-4 py-1 hover:text-c-turquoise-3 sm:text-fs-h6 md:px-1 lg:text-fs-h5"
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
                        className="inline-block px-4 py-1 hover:text-c-turquoise-3 sm:text-fs-h6 md:px-1 lg:text-fs-h5"
                        onClick={() => setOpen(false)} // Fecha o menu ao clicar
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Button Session */}
            {showButton && (
              <DefaultButton hideOnResize={false}>Agendar Sessão</DefaultButton>
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
      </div>

      {/* Mobile Sidebar Session */}
      <ReponsiveMenu open={open} closeMenu={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
