import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Download } from "lucide-react";
import perfil from "../assets/perfil.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function SobreMim() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Rafael_Gaspar_CV.pdf";
    link.click();
  };

  const stats = [
    { value: "29", label: "Anos" },
    { value: "5º", label: "Semestre FIAP" },
    { value: "6+", label: "Tecnologias" },
    { value: "100%", label: "Dedicação" },
  ];

  return (
    <section id="sobre" className="py-24 px-6 lg:px-16">
      {/* Section header with large number */}
      <div className="relative mb-16">
        <span className="absolute -top-10 left-0 font-black text-[7rem] leading-none text-[#111] select-none pointer-events-none">
          01
        </span>
        <div className="relative">
          <div className="font-mono text-xs uppercase tracking-widest text-[#444] mb-4">
            // sobre mim
          </div>
          <h2
            className="font-black text-[#f0f0f0] leading-tight tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Quem sou
          </h2>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">

        {/* Photo block — tall, left column */}
        <motion.div
          className="md:row-span-2 bg-[#111] border border-[#1e1e1e] overflow-hidden relative group"
          style={{ minHeight: "420px" }}
          {...fadeUp(0)}
        >
          <img
            src={perfil}
            alt="Rafael Gaspar"
            className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 via-black/40 to-transparent">
            <div className="text-white font-bold text-xl">Rafael Gaspar</div>
            <div className="text-violet-400 text-sm font-mono mt-1">Full Stack Dev</div>
          </div>
          {/* Corner accent */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-violet-500" />
        </motion.div>

        {/* Bio block */}
        <motion.div
          className="md:col-span-2 bg-[#111] border border-[#1e1e1e] p-8"
          {...fadeUp(0.1)}
        >
          <h3 className="text-3xl md:text-4xl font-black text-[#f0f0f0] mb-5 leading-tight">
            Desenvolvedor<br />
            <span className="text-violet-400">Full Stack</span>
          </h3>
          <p className="text-[#666] leading-relaxed mb-7 text-sm md:text-base">
            29 anos, apaixonado por tecnologia e soluções digitais. Cursando{" "}
            <span className="text-[#ccc]">Engenharia de Software na FIAP</span> — 5º semestre.
            Busco oportunidades de estágio para aplicar habilidades em React, React Native,
            Spring Boot, Java, Python, Blockchain e Big Data.
          </p>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-violet-500 text-[#666] hover:text-[#f0f0f0] text-sm font-medium py-3 px-6 transition-all duration-200"
          >
            <Download size={14} />
            Currículo
          </button>
        </motion.div>

        {/* Info chips */}
        <motion.div
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          {...fadeUp(0.2)}
        >
          <div className="bg-[#111] border border-[#1e1e1e] p-6 flex items-start gap-4 hover:border-violet-500/30 transition-colors duration-200">
            <MapPin className="text-violet-400 mt-0.5 shrink-0" size={18} />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-1">Localização</div>
              <div className="text-[#f0f0f0] font-medium text-sm">São Paulo, SP — Brasil</div>
            </div>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] p-6 flex items-start gap-4 hover:border-violet-500/30 transition-colors duration-200">
            <GraduationCap className="text-violet-400 mt-0.5 shrink-0" size={18} />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-1">Formação</div>
              <div className="text-[#f0f0f0] font-medium text-sm">Eng. Software — FIAP</div>
              <div className="text-[#444] text-xs mt-0.5">5º Semestre · 2024–2027</div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4"
          {...fadeUp(0.3)}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#1e1e1e] p-8 text-center hover:border-violet-500/30 transition-colors duration-200"
            >
              <div className="text-4xl font-black text-violet-400 mb-2">{stat.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#444]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
