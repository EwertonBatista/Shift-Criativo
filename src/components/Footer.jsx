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
    <footer id="footer" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-gray-800 p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Entre em Contato</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                {...register("name", { required: true })}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none"
                placeholder="Seu nome"
              />
              {errors.name && <span className="text-red-500 text-sm">Campo obrigatório</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none"
                placeholder="seu@email.com"
              />
              {errors.email && <span className="text-red-500 text-sm">Campo obrigatório</span>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea
                rows="4"
                {...register("message", { required: true })}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-primary focus:outline-none"
                placeholder="Como podemos ajudar?"
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">Campo obrigatório</span>}
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300">
              Enviar Mensagem
            </button>
          </form>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <img src="/img/simbolo branco.png" alt="Logo" className="w-20 mb-6" />
          <p className="text-gray-400 mb-4">
            Shift Criativo® 2025<br/>
            “Sua mudança criativa começa aqui”
          </p>
          <div className="flex space-x-4">
             <a href="https://www.instagram.com/shiftcriativo/?hl=pt-br" className="text-gray-400 hover:text-white transition">Instagram</a>
             <a href="#" className="text-gray-400 hover:text-white transition">Behance</a>
             <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            Powered by <a href="#" className="hover:text-primary">Ewerton Batista</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
