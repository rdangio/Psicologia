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

  // Função para abrir o WhatsApp ao clicar no botão
  const handleWhatsappClick = () => {
    const whatsappLink = `https://wa.me/5514997030269?text=Olá, Cláudia! Estou entrando em contato para agendar um atendimento.`;
    window.open(whatsappLink, "_blank");
  };

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
      <div id="top" className="flex justify-center">
        {/*         
        <div className="h-[4.3rem] sm:h-[4.6rem] xl:h-[4.3rem]"></div>
        <nav className="fixed z-10 w-full"> */}

        <div className="h-[4.3rem] sm:h-[4.6rem] xl:h-[4.3rem]"></div>
        <nav className="fixed z-10 w-full">
          {/* aqui é o tamanho da div nav  */}
          <div className="mt-0 flex h-[4.3rem] items-center justify-between bg-c-turquoise-5 px-5 shadow-lg shadow-gray-600 sm:h-20 sm:w-[100%] sm:px-8 md:w-[100%] md:gap-[2rem] md:px-[2rem] lg:gap-[2rem] lg:px-7 xl:gap-[2.8rem] xl:px-12 xl:py-5">
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
              <DefaultButton
                hideOnResize={false}
                onClickAction={handleWhatsappClick}
              >
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
      </div>

      {/* Mobile Sidebar Session */}
      <ReponsiveMenu open={open} closeMenu={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
