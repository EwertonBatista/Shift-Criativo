import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-20 bg-transparent py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <div className="flex items-center">
          <img src="/img/simbolo branco.png" alt="Shift Criativo Logo" className="w-10 h-10 md:w-12 md:h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li><a href="#home" className="hover:text-gray-200 cursor-pointer transition">Inicio</a></li>
          <li><a href="#about" className="hover:text-gray-200 cursor-pointer transition">Sobre</a></li>
          <li><a href="#footer" className="hover:text-gray-200 cursor-pointer transition">Contato</a></li>
          <li>
            <a href="#budget" className="bg-secondary px-4 py-2 rounded-full hover:bg-white hover:text-primary transition shadow-md">
              Orçamentos
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-primary/95 backdrop-blur-sm p-4 z-20 shadow-xl rounded-b-xl"
        >
          <ul className="flex flex-col space-y-4 text-center text-white font-semibold">
            <li onClick={() => setIsOpen(false)}><a href="#home" className="block hover:text-gray-200 cursor-pointer">Inicio</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#about" className="block hover:text-gray-200 cursor-pointer">Sobre</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#footer" className="block hover:text-gray-200 cursor-pointer">Contato</a></li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#budget" className="block w-full bg-secondary py-2 rounded-lg hover:bg-white hover:text-primary transition">
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
