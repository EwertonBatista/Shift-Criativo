import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm py-4 px-4 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-800">
        <div className="flex items-center cursor-pointer">
           {/* Use orange logo for brand identity on light header */}
          <img src="/img/Simbolo_laranja.png" alt="Shift Criativo Logo" className="w-10 h-10 md:w-12 md:h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-bold font-montserrat items-center">
          <li><a href="#home" className="hover:text-primary cursor-pointer transition">Inicio</a></li>
          <li><a href="#about" className="hover:text-primary cursor-pointer transition">Sobre</a></li>
          <li><a href="#projects" className="hover:text-primary cursor-pointer transition">Trabalhos</a></li>
          <li><a href="#footer" className="hover:text-primary cursor-pointer transition">Contato</a></li>
          <li>
            <a href="#budget" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-orange-600 transition shadow-lg transform hover:-translate-y-1">
              Orçamentos
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl"
        >
          <ul className="flex flex-col p-6 space-y-6 text-center text-gray-800 font-bold font-montserrat">
            <li onClick={() => setIsOpen(false)}><a href="#home" className="block hover:text-primary">Inicio</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#about" className="block hover:text-primary">Sobre</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#projects" className="block hover:text-primary">Trabalhos</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#footer" className="block hover:text-primary">Contato</a></li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#budget" className="block w-full bg-primary text-white py-3 rounded-xl shadow-md hover:bg-orange-600 transition">
                Orçamentos
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
