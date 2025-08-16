import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Code, Download } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

export default function SobreMim() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Rafael_Gaspar_CV.pdf";
    link.click();
  };

  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col lg:flex-row items-center text-white px-6 lg:px-12 py-24 gap-12"
    >
      {/* Texto à esquerda */}
      <div className="flex-1 space-y-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold flex items-center gap-3"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          <User className="text-purple-400" size={40} />
          Sobre Mim
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-white/80 leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Olá! Me chamo{" "}
          <span className="text-purple-400 font-semibold">Rafael Gaspar</span>, tenho 29 anos e sou um desenvolvedor{" "}
          <span className="text-purple-400 font-semibold">Full Stack</span>{" "}
          apaixonado por tecnologia e inovação.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-white/80 leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
        >
          Atualmente estou no{" "}
          <span className="text-purple-400 font-semibold">4º semestre</span> de Engenharia de Software na{" "}
          <span className="text-purple-400 font-semibold">FIAP</span>, desenvolvendo conhecimentos em React, Spring Boot,
          Java, Python, Blockchain e Big Data.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-white/80 leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={textVariants}
        >
          Busco constantemente{" "}
          <span className="text-purple-400 font-semibold">oportunidades de estágio</span> e projetos desafiadores para
          aplicar minhas habilidades, contribuir com soluções inovadoras e expandir minha experiência profissional.
        </motion.p>

        <motion.button
          onClick={handleDownloadCV}
          className="inline-flex items-center gap-3 bg-purple-600 text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(139, 92, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={22} />
          Baixar Currículo
        </motion.button>
      </div>

      {/* Infos em cards à direita */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Card Localização */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/30">
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="text-purple-400" size={24} />
            <h4 className="font-semibold text-xl">Localização</h4>
          </div>
          <p className="text-gray-300 text-lg">São Paulo, SP - Brasil</p>
        </div>

        {/* Card Formação */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/30">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="text-purple-400" size={24} />
            <h4 className="font-semibold text-xl">Formação</h4>
          </div>
          <p className="text-gray-300 text-lg">Engenharia de Software - FIAP</p>
          <p className="text-gray-400 mt-2">4º Semestre</p>
        </div>

        {/* Card Especialização */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/30">
          <div className="flex items-center gap-4 mb-4">
            <Code className="text-purple-400" size={24} />
            <h4 className="font-semibold text-xl">Especialização</h4>
          </div>
          <p className="text-gray-300 text-lg">Full Stack Development</p>
          <p className="text-gray-400 mt-2">React • Spring Boot • Java • Python • Blockchain</p>
        </div>

        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">29</div>
            <div className="text-gray-400">Anos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">4º</div>
            <div className="text-gray-400">Semestre</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
            <div className="text-gray-400">Tecnologias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-400">Dedicação</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
