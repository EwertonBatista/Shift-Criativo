import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20 bg-repeat"
        style={{ backgroundImage: 'url("/img/Pattern-branco.png")', backgroundSize: '150px' }}
      ></div>

      <div className="z-10 flex flex-col items-center px-4">
        {/* Logo Animation */}
        <motion.img
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          src="/img/simbolo branco.png"
          alt="Logo Symbol"
          className="w-24 md:w-32 mb-8"
        />

        {/* Name Animation */}
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          src="/img/Nome shift branco.png"
          alt="Shift Criativo"
          className="w-64 md:w-96 mb-6"
        />

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex space-x-6 mb-12"
        >
          <a href="https://www.instagram.com/shiftcriativo/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300">
            <img src="/img/instalogo.png" alt="Instagram" className="w-10 h-10 shadow-lg rounded-lg" />
          </a>
          <a href="#" className="transform hover:scale-110 transition duration-300">
            <img src="/img/behancelogo.png" alt="Behance" className="w-10 h-10 shadow-lg rounded-lg" />
          </a>
        </motion.div>

        {/* Call to Action */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="mt-8"
        >
          <p className="font-montserrat text-2xl md:text-4xl text-white font-bold mb-4">Conheça meus projetos</p>
          <motion.a
            href="#projects"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block"
          >
            <img src="/img/seta.png" alt="Arrow Down" className="w-8 md:w-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
