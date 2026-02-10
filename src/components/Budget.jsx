import React from 'react';
import { motion } from 'framer-motion';

const Budget = () => {
  return (
    <section id="budget" className="py-20 flex items-center justify-center scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="container mx-auto px-4 max-w-4xl"
      >
        <div className="bg-primary/90 backdrop-blur-md rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <p className="text-3xl md:text-5xl font-bold font-montserrat mb-8 relative z-10">
            Se interessou por nossos serviços?
            </p>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto relative z-10">
                Estamos prontos para elevar o nível da sua marca. Entre em contato e vamos criar algo incrível juntos.
            </p>
            <motion.a
            href="https://api.whatsapp.com/send?phone=5511952426762&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20gratuito%20para%20minha%20empresa%2Fnegocio!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg relative z-10"
            >
            Fazer orçamento via WhatsApp
            </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Budget;
