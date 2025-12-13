import React from 'react';
import { motion } from 'framer-motion';

const Budget = () => {
  return (
    <section id="budget" className="py-20 bg-primary text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <p className="text-3xl md:text-4xl font-bold font-montserrat mb-8">
          Se interessou por nossos serviços?
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5511952426762&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20gratuito%20para%20minha%20empresa%2Fnegocio!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition duration-300 shadow-lg"
        >
          Fazer orçamento via WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default Budget;
