import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { NavData } from "./NavData";
import { Link as RouterLink } from "react-router-dom"; // Importação do React Router

const ReponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-16 z-20 h-screen w-full"
        >
          <div className="m-8 rounded-3xl bg-c-turquoise-5 p-10 text-xl font-semibold uppercase text-c-turquoise-1">
            <ul className="flex flex-col items-center justify-center gap-10">
              {NavData.map((item) => {
                return (
                  <li key={item.id}>
                    {item.external ? (
                      // Link externo
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 hover:text-c-turquoise-3"
                      >
                        {item.title}
                      </a>
                    ) : (
                      // Link interno
                      <RouterLink
                        to={item.url}
                        className="inline-block px-3 py-1 hover:text-c-turquoise-3"
                      >
                        {item.title}
                      </RouterLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

//Tipagem das propriedades (yarn add prop-types)
ReponsiveMenu.propTypes = {
  open: PropTypes.bool,
};

export default ReponsiveMenu;
