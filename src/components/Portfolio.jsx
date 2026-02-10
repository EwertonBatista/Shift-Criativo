import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, src: '/img/01.png', alt: 'Project 1' },
  { id: 2, src: '/img/02.png', alt: 'Project 2' },
  { id: 3, src: '/img/03.png', alt: 'Project 3' },
  { id: 4, src: '/img/04.png', alt: 'Project 4' },
  { id: 5, src: '/img/05.png', alt: 'Project 5' },
  { id: 6, src: '/img/06.png', alt: 'Project 6' },
  { id: 7, src: '/img/07.png', alt: 'Project 7' },
  { id: 8, src: '/img/08.png', alt: 'Project 8' },
  { id: 9, src: '/img/09.jpg', alt: 'Project 9' },
  { id: 10, src: '/img/10.png', alt: 'Project 10' },
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-20 min-h-screen scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center text-primary mb-16 font-montserrat drop-shadow-sm"
        >
            Meus Trabalhos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 20px 30px rgba(249, 108, 3, 0.3)" }}
              className="rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20"
            >
              <img src={project.src} alt={project.alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
