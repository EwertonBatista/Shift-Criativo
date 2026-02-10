import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Mensagem enviada com sucesso! (Simulação)');
  };

  return (
    <footer id="footer" className="relative py-16 text-white overflow-hidden scroll-mt-24">
       {/* Dark background for footer */}
       <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg -z-10 clip-path-slant"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 pt-12">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-montserrat">Entre em Contato</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Nome</label>
              <input
                {...register("name", { required: true })}
                className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition"
                placeholder="Seu nome"
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">Campo obrigatório</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition"
                placeholder="seu@email.com"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">Campo obrigatório</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Telefone</label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Mensagem</label>
              <textarea
                rows="4"
                {...register("message", { required: true })}
                className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition"
                placeholder="Como podemos ajudar?"
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm mt-1">Campo obrigatório</span>}
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition duration-300"
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <img src="/img/simbolo branco.png" alt="Logo" className="w-24 mb-6 opacity-80" />
          <p className="text-gray-400 mb-6 text-lg">
            Shift Criativo® 2025<br/>
            <span className="italic text-primary">“Sua mudança criativa começa aqui”</span>
          </p>
          <div className="flex space-x-6">
             <a href="https://www.instagram.com/shiftcriativo/?hl=pt-br" className="text-gray-400 hover:text-white transition transform hover:scale-110">Instagram</a>
             <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">Behance</a>
             <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">Facebook</a>
          </div>
          <div className="mt-12 text-sm text-gray-600">
            Powered by <a href="#" className="hover:text-primary transition">Ewerton Batista</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
