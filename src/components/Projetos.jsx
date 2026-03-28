import { Github, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import firesentinel from "/firesentinel-print.png";
import FEclub from "/FEclub.png";
import Melodia from "/Melodia.png";
import portalFilmes from "/PortalFilmes.png";
import ecoTrend from "/Ecotrend.png";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "FireSentinel",
    description: "Sistema CLI com IA para prever queimadas e coletar informações de sensores IoT: cadastro, leitura, análise de dados e gerenciamento de ocorrências.",
    image: firesentinel,
    github: "https://github.com/Pedro-Camacho/FireSentinel",
    site: "https://fire-sentinel.vercel.app",
    tags: ["Python", "IoT", "IA"],
    featured: true,
  },
  {
    title: "FE-Club",
    description: "Jogo que aproxima fãs da Fórmula E — gerenciar equipes, competir globalmente, explorar tecnologias sustentáveis e interagir com a comunidade.",
    image: FEclub,
    github: "https://github.com/RafaelDuarteF/fe-club-react",
    site: "https://fe-club-react.vercel.app",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Melodia",
    description: "Plataforma de streaming de música com playlists personalizadas, descoberta de artistas e interface responsiva.",
    image: Melodia,
    github: "https://github.com/RafaelDuarteF/melodia",
    site: "https://melodia-gamma.vercel.app",
    tags: ["HTML", "SASS", "Bootstrap"],
  },
  {
    title: "PortalFilmes",
    description: "Portal que usa a API do TMDB para exibir filmes e séries com detalhes, trailers e listas pessoais.",
    image: portalFilmes,
    github: "https://github.com/RafaelGbm/Portal-Filmes",
    site: "https://portal-filmes-alpha.vercel.app",
    tags: ["React", "API"],
  },
  {
    title: "EcoTrend",
    description: "E-commerce focado em produtos sustentáveis nas categorias de casa, tecnologia, roupas e beleza.",
    image: ecoTrend,
    github: "https://github.com/Monteiro77/EcoTrend",
    site: "https://eco-trend-nine.vercel.app",
    tags: ["React", "E-commerce"],
  },
];

function ProjectRow({ proj, index }) {
  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className="group border-t border-[#1e1e1e] py-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center hover:border-violet-500/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
    >
      {/* Number */}
      <div className={`hidden lg:flex lg:col-span-1 ${isEven ? "lg:order-1" : "lg:order-3"}`}>
        <span className="font-mono text-[#1e1e1e] group-hover:text-[#2a2a2a] text-4xl font-black leading-none transition-colors duration-300 select-none">
          {num}
        </span>
      </div>

      {/* Image */}
      <div className={`order-1 lg:col-span-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div
          className="relative overflow-hidden bg-[#111] border border-[#1e1e1e] group-hover:border-violet-500/30 transition-colors duration-300"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-[filter] duration-500"
          />
          {proj.featured && (
            <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest text-black bg-violet-400 px-2 py-0.5">
              destaque
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className={`order-2 lg:col-span-7 ${isEven ? "lg:order-3" : "lg:order-2"}`}>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {proj.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] uppercase tracking-widest text-violet-400 border border-violet-500/20 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-[#f0f0f0] font-black text-xl md:text-2xl tracking-tight mb-2 group-hover:text-white transition-colors duration-200">
          {proj.title}
        </h3>

        <p className="text-[#444] group-hover:text-[#666] text-sm leading-relaxed mb-4 transition-colors duration-200 max-w-md">
          {proj.description}
        </p>

        <div className="flex gap-2">
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[#2a2a2a] hover:border-violet-500 text-[#666] hover:text-[#f0f0f0] text-xs font-mono py-2 px-3 transition-all duration-200"
          >
            <Github size={11} />
            GitHub
          </a>
          {proj.site && (
            <a
              href={proj.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-violet-500 hover:bg-violet-400 text-white text-xs font-mono py-2 px-3 transition-colors duration-200"
            >
              <Globe size={11} />
              Ver projeto
              <ArrowUpRight size={10} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projetos() {
  return (
    <section id="projetos" className="py-24 px-6 lg:px-16">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
        <div className="flex-1">
          <SectionHeader number="03" label="projetos" title="Trabalhos" />
        </div>
        <span className="font-mono text-[#2a2a2a] text-sm pb-2">
          0{projects.length} projetos
        </span>
      </div>

      <div className="max-w-5xl">
        {projects.map((proj, idx) => (
          <ProjectRow key={idx} proj={proj} index={idx} />
        ))}

        {/* Projeto secreto */}
        <motion.div
          className="border-t border-[#1e1e1e] py-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <div className="hidden lg:flex lg:col-span-1">
            <span className="font-mono text-[#1e1e1e] text-4xl font-black leading-none select-none">
              {String(projects.length + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="lg:col-span-4">
            <div
              className="relative overflow-hidden bg-[#0d0d0d] border border-dashed border-[#2a2a2a]"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-[#2a2a2a] border-t-violet-500/50 animate-spin" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#2a2a2a]">
                  em desenvolvimento
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex gap-1.5 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-violet-400/50 border border-violet-500/10 px-2 py-0.5">
                React Native
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#333] border border-[#1e1e1e] px-2 py-0.5">
                mobile
              </span>
            </div>

            <h3 className="text-[#333] font-black text-xl md:text-2xl tracking-tight mb-2">
              Projeto Confidencial
            </h3>

            <p className="text-[#2a2a2a] text-sm leading-relaxed mb-4 max-w-md">
              Algo que estou construindo com muito cuidado. Ainda não é hora — mas em breve.
            </p>

            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#2a2a2a]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              work in progress
            </div>
          </div>
        </motion.div>

        <div className="border-t border-[#1e1e1e]" />
      </div>
    </section>
  );
}
