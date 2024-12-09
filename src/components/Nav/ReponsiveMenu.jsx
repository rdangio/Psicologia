import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { NavData } from "./NavData";
import { Link as RouterLink } from "react-router-dom"; // Importação do React Router
import { Link as ScrollLink } from "react-scroll"; // Para scroll interno
import CentralizedContainer from "../CentralizedContainer/CentralizedContainer";

const ReponsiveMenu = ({ open, closeMenu }) => {
  return (
    <CentralizedContainer className="">
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-16 z-20 h-screen w-full"
          >
            {/* ml-[12.5rem] mr-[1rem] mt-[.4rem] w-[11rem] 
            sm:ml-[20rem] sm:mt-8 sm:w-[16rem] sm:text-fs-h6 */}
            <div className="rounded-3xl rounded-tr-none bg-c-turquoise-5 py-5 text-fs-h6 font-semibold uppercase text-c-turquoise-1 
            
            ml-[40.5%] mt-[1.5%] w-[55%] 
            sm:ml-[56%] sm:mt-[4.5%] sm:w-[40%] sm:text-fs-h6
            
            md:hidden">
              <ul className="flex flex-col items-center justify-center gap-10">
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
                          onClick={closeMenu} // Fecha o menu ao clicar
                          className="inline-block cursor-pointer px-4 py-1 hover:text-c-turquoise-3 md:px-1"
                        >
                          {item.title}
                        </ScrollLink>
                      ) : item.type === "router" ? (
                        // Links internos usando React Router
                        <RouterLink
                          to={item.to}
                          onClick={closeMenu} // Fecha o menu ao clicar
                          className="inline-block px-4 py-1 hover:text-c-turquoise-3 md:px-1"
                        >
                          {item.title}
                        </RouterLink>
                      ) : (
                        // Links externos absolutos
                        <a
                          href={item.to}
                          target=""
                          rel="noopener noreferrer"
                          onClick={closeMenu} // Fecha o menu ao clicar
                          className="inline-block px-4 py-1 hover:text-c-turquoise-3 md:px-1"
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CentralizedContainer>
  );
};

//Tipagem das propriedades (yarn add prop-types)
ReponsiveMenu.propTypes = {
  open: PropTypes.bool,
  closeMenu: PropTypes.func,
};

export default ReponsiveMenu;
