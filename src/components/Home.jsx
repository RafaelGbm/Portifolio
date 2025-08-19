import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import perfil from "../assets/perfil.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const TypeWriter = ({ words, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentWord.length) {
        // Digitando
        setDisplayText(currentWord.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      } else if (!isDeleting && currentCharIndex === currentWord.length) {
        // Pausa no final da palavra antes de apagar
        setTimeout(() => setIsDeleting(true), 300);
      } else if (isDeleting && currentCharIndex > 0) {
        // Apagando
        setDisplayText(currentWord.slice(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      } else if (isDeleting && currentCharIndex === 0) {
        // Mudança para próxima palavra
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setTimeout(() => setCurrentCharIndex(0), 50);
      }
    }, delay + (isDeleting ? 8 : 20));

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, isDeleting, words, delay]);

  // Separar o texto do ponto para colorir
  const textWithoutDot = displayText.replace('.', '');
  const showDot = displayText.includes('.');

  return (
    <span>
      {textWithoutDot}
      {showDot && <span className="text-purple-600">.</span>}
      <motion.span
        className="text-purple-600"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
      >
        |
      </motion.span>
    </span>
  );
};

export default function Home() {
  return (
    <section
      id="home"
      className="pt-32 min-h-screen flex flex-col lg:flex-row items-center text-white px-6 lg:px-12 py-24 gap-12"
    >
      {/* Texto à esquerda */}
      <div className="flex-1 space-y-6">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          <TypeWriter words={["Rafael", "Gaspar."]} delay={500} />
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/80 leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Olá! Sou <span className="text-purple-400 font-semibold">Rafael Gaspar</span>, desenvolvedor{" "}
          <span className="text-purple-400 font-semibold">Full Stack</span> apaixonado por tecnologia, inovação e criação de soluções digitais modernas.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-white/80 leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
        >
          Tenho experiência e conhecimentos em <span className="text-purple-400 font-semibold">React, Spring Boot, Java, Python, Blockchain, Big Data, Unreal Engine com C#</span>. Busco oportunidades de estágio e projetos desafiadores para aplicar minhas habilidades, contribuir com soluções inovadoras e expandir minha experiência profissional.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-white/80 leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={textVariants}
        >
          Minha missão é criar experiências digitais eficientes e modernas, sempre com dedicação, criatividade e paixão pelo que faço.
        </motion.p>
      </div>

      {/* Foto à direita com animação */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={perfil}
          alt="Rafael Gaspar"
          className="w-64 h-64 sm:w-72 sm:h-72 rounded-full shadow-2xl border-4 border-purple-600 object-cover"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}