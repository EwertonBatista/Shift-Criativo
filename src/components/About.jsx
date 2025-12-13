import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img src="/img/iconteste.png" alt="Creative Mind" className="w-full max-w-md mx-auto rounded-3xl shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-primary mb-6 font-montserrat">Sobre a Shift Criativo</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A Shift Criativo é um estúdio de design focado em transformar ideias em realidade visual.
            Com uma abordagem moderna e centrada no usuário, criamos identidades visuais, layouts web e experiências digitais que marcam presença.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Acreditamos que o design é mais do que estética; é sobre funcionalidade e comunicação.
            Cada projeto é tratado com paixão e dedicação para entregar resultados que superam expectativas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
