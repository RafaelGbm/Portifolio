import { motion } from "framer-motion";
import { MapPin, GraduationCap, Download } from "lucide-react";
import perfil from "../assets/perfil.jpg";
import SectionHeader from "./SectionHeader";
import { fadeUp, downloadCV } from "../utils";

const stats = [
  { value: "29",  label: "Anos" },
  { value: "5º",  label: "Semestre FIAP" },
  { value: "6+",  label: "Tecnologias" },
  { value: "5+",  label: "Projetos" },
];

export default function SobreMim() {
  return (
    <section id="sobre" className="py-24 px-6 lg:px-16">
      <SectionHeader number="01" label="sobre mim" title="Quem sou" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">

        {/* Photo */}
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
            <div className="text-white font-bold text-2xl tracking-tight">Rafael Gaspar</div>
            <div className="text-violet-600 text-sm font-mono mt-1 font-semibold">Full Stack Dev</div>
          </div>
          <div className="absolute top-4 right-4 w-2 h-2 bg-violet-500" />
        </motion.div>

        {/* Bio */}
        <motion.div
          className="md:col-span-2 bg-[#111] border border-[#1e1e1e] p-8 flex flex-col justify-between"
          {...fadeUp(0.1)}
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-[#f0f0f0] mb-5 leading-tight">
              Desenvolvedor<br />
              <span className="text-violet-400">Full Stack</span>
            </h3>
            <p className="text-[#777] leading-relaxed mb-7 text-base">
              29 anos, apaixonado por tecnologia e soluções digitais. Cursando{" "}
              <span className="text-[#ccc] font-medium">Engenharia de Software na FIAP</span> — 5º semestre.
              Busco oportunidades como desenvolvedor júnior para aplicar habilidades em React, React Native,
              Spring Boot, Java, Python, Blockchain e Big Data.
            </p>
          </div>
          <button
            onClick={downloadCV}
            className="self-start inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-violet-500 text-[#888] hover:text-[#f0f0f0] text-sm font-medium py-3 px-6 transition-all duration-200"
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
          <div className="bg-[#111] border border-[#1e1e1e] p-6 flex items-center gap-5 hover:border-violet-500/30 transition-colors duration-200">
            <div className="w-10 h-10 flex items-center justify-center bg-violet-500/10 shrink-0">
              <MapPin className="text-violet-400" size={20} />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-1">Localização</div>
              <div className="text-[#f0f0f0] font-semibold text-base">São Paulo, SP</div>
              <div className="text-[#555] text-sm">Brasil</div>
            </div>
          </div>
          <div className="bg-[#111] border border-[#1e1e1e] p-6 flex items-center gap-5 hover:border-violet-500/30 transition-colors duration-200">
            <div className="w-10 h-10 flex items-center justify-center bg-violet-500/10 shrink-0">
              <GraduationCap className="text-violet-400" size={20} />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-1">Formação</div>
              <div className="text-[#f0f0f0] font-semibold text-base">Eng. Software — FIAP</div>
              <div className="text-[#555] text-sm">5º Semestre · 2024–2027</div>
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
              className="bg-[#111] border border-[#1e1e1e] p-8 text-center hover:border-violet-500/30 transition-colors duration-200 group"
            >
              <div className="text-5xl font-black text-violet-400 mb-3 group-hover:text-violet-300 transition-colors">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#555]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
