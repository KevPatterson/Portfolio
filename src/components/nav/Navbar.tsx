import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';
import { useTranslation } from '../../context/LanguajeContext';

const Navbar = () => {
  const { language, setLanguage } = useTranslation();
  const isEnglish = language === 'en';

  const toggleLanguage = () => {
    setLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <nav className="mb-8 flex items-center justify-between py-8">
      <div className="flex items-center flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <img src={logo} alt="logo" className="relative mx-2 w-12 h-12 rounded-xl border border-slate-700/30 group-hover:border-slate-600/50 transition-all duration-300"/>
        </motion.div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group shadow-lg hover:shadow-xl" 
          href="https://www.linkedin.com/in/kevin-patterson-098a5b366"
          target="_blank"
          rel="noopener noreferrer"
          title='Linkedin'
        >
          <FaLinkedin className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group shadow-lg hover:shadow-xl" 
          href="https://github.com/KevPatterson/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          title='Github'
        >
          <FaGithub className="text-slate-300 group-hover:text-white transition-colors duration-300" />
        </motion.a>
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isEnglish ? 'en' : 'es'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-base font-medium text-slate-200"
            >
              {isEnglish ? 'EN' : 'ES'}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </nav>
    
  );
};

export default Navbar;