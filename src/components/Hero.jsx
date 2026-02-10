import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden scroll-mt-24">

      <div className="z-10 flex flex-col items-center px-4 pointer-events-none">
        {/* Logo Animation */}
        <motion.img
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring' }}
          src="/img/Simbolo_laranja.png"
          alt="Logo Symbol"
          className="w-32 md:w-48 mb-8 drop-shadow-2xl"
        />

        {/* Name Animation */}
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          src="/img/Nome_shift_preto.png"
          alt="Shift Criativo"
          className="w-64 md:w-96 mb-6 drop-shadow-lg"
        />

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex space-x-6 mb-12 pointer-events-auto"
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
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 1.2, duration: 1 }}
           className="mt-8 pointer-events-auto"
        >
          <p className="font-montserrat text-2xl md:text-3xl text-gray-800 font-bold mb-4 tracking-wide">
            Transformando ideias em <span className="text-primary">realidade visual</span>
          </p>
          <motion.a
            href="#projects"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block mt-4"
          >
            <img src="/img/seta.png" alt="Arrow Down" className="w-8 md:w-10 filter invert opacity-50" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
