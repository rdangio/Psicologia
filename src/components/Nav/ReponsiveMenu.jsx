import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ReponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-24 z-20 h-screen w-full"
        >
          <div className="m-6 rounded-3xl bg-c-turquoise-4 p-10 text-xl font-semibold uppercase text-c-turquoise-5">
            <ul className="flex flex-col items-center justify-center gap-10">
              <li>Home</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Projetos</li>
              <li>Contatos</li>
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
