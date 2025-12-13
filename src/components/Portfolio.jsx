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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12 font-montserrat">Meus Trabalhos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              className="rounded-2xl overflow-hidden shadow-md cursor-pointer"
            >
              <img src={project.src} alt={project.alt} className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
