import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center justify-center scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 transition group-hover:rotate-6"></div>
            <img src="/img/iconteste.png" alt="Creative Mind" className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 text-center md:text-left bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-montserrat">Quem Somos</h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6 font-medium">
            A <span className="text-primary font-bold">Shift Criativo</span> é um estúdio de design focado em transformar ideias em realidade visual.
            Com uma abordagem moderna e centrada no usuário, criamos identidades visuais, layouts web e experiências digitais que marcam presença.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Acreditamos que o design é mais do que estética; é sobre funcionalidade e comunicação.
            Cada projeto é tratado com paixão e dedicação para entregar resultados que superam expectativas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
