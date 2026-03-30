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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left: text */}
        <motion.div className="lg:col-span-7 flex flex-col" {...fadeUp(0)}>
          <h3 className="text-5xl lg:text-6xl font-black text-[#f0f0f0] mb-8 leading-[0.95] tracking-tighter">
            Desenvolvedor<br />
            <span className="text-violet-400">Full Stack</span>
          </h3>

          <p className="text-[#666] leading-relaxed text-base mb-10">
            29 anos, apaixonado por tecnologia e soluções digitais. Cursando{" "}
            <span className="text-[#ccc] font-medium">Engenharia de Software na FIAP</span> — 5º semestre.
            Busco oportunidades como desenvolvedor júnior para aplicar habilidades em React, React Native,
            Spring Boot, Java, Python, Blockchain e Big Data.
          </p>

          <div className="flex flex-col mb-10">
            <div className="border-t border-[#1e1e1e] py-4 flex items-center gap-5">
              <MapPin className="text-violet-400 shrink-0" size={15} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#444] w-24 shrink-0">Localização</span>
              <span className="text-[#f0f0f0] font-semibold text-sm">São Paulo, SP · Brasil</span>
            </div>
            <div className="border-t border-b border-[#1e1e1e] py-4 flex items-center gap-5">
              <GraduationCap className="text-violet-400 shrink-0" size={15} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#444] w-24 shrink-0">Formação</span>
              <span className="text-[#f0f0f0] font-semibold text-sm">Eng. Software — FIAP · 5º sem.</span>
            </div>
          </div>

          <button
            onClick={downloadCV}
            className="self-start inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-violet-500 text-[#888] hover:text-[#f0f0f0] text-sm font-medium py-3 px-6 transition-all duration-200"
          >
            <Download size={14} />
            Currículo
          </button>
        </motion.div>

        {/* Right: photo + stats */}
        <motion.div className="lg:col-span-5 flex flex-col items-center gap-6 lg:items-center" {...fadeUp(0.15)}>

          {/* Circular photo */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-violet-500/30 shrink-0">
            <img
              src={perfil}
              alt="Rafael Gaspar"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 40%" }}
            />
          </div>

          <div className="text-center">
            <div className="text-white font-bold text-lg tracking-tight">Rafael Gaspar</div>
            <div className="text-violet-400 text-xs font-mono mt-1">Full Stack Dev</div>
          </div>

          {/* Stats */}
          <div className="w-full grid grid-cols-4 divide-x divide-[#1e1e1e]">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl font-black text-violet-400 leading-none mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#444]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
