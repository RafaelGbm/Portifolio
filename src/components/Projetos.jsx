import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import firesentinel from "/firesentinel-print.png";
import FEclub from "/FEclub.png";
import Melodia from "/Melodia.png";

import portalFilmes from "/PortalFilmes.png";
import ecoTrend from "/Ecotrend.png";

const projects = [
  {
    title: "FireSentinel",
    description:
      "Sistema CLI com IA para prever queimadas e coletar informações de sensores IoT: cadastro, leitura, análise de dados e gerenciamento de ocorrências.",
    image: firesentinel,
    github: "https://github.com/Pedro-Camacho/FireSentinel",
    site: "https://fire-sentinel.vercel.app",
    tag: "Python · IoT · IA",
    featured: true,
  },
  {
    title: "FE-Club",
    description:
      "Jogo que aproxima fãs da Fórmula E — gerenciar equipes, competir globalmente, explorar tecnologias sustentáveis e interagir com a comunidade.",
    image: FEclub,
    github: "https://github.com/RafaelDuarteF/fe-club-react",
    site: "https://fe-club-react.vercel.app",
    tag: "React · Tailwind",
  },
  {
    title: "Melodia",
    description:
      "Plataforma de streaming de música com playlists personalizadas, descoberta de artistas e interface responsiva.",
    image: Melodia,
    github: "https://github.com/RafaelDuarteF/melodia",
    site: "https://melodia-gamma.vercel.app",
    tag: "HTML · SASS · Bootstrap",
  },
  {
    title: "PortalFilmes",
    description:
      "Portal que usa a API do TMDB para exibir filmes e séries com detalhes, trailers e listas pessoais.",
    image: portalFilmes,
    github: "https://github.com/RafaelGbm/Portal-Filmes",
    site: "https://portal-filmes-alpha.vercel.app",
    tag: "React · API",
  },
  {
    title: "EcoTrend",
    description:
      "E-commerce focado em produtos sustentáveis nas categorias de casa, tecnologia, roupas e beleza.",
    image: ecoTrend,
    github: "https://github.com/Monteiro77/EcoTrend",
    site: "https://eco-trend-nine.vercel.app",
    tag: "React · E-commerce",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-24 px-6 lg:px-16">
      {/* Section header with number */}
      <div className="relative mb-16">
        <span className="absolute -top-10 left-0 font-black text-[7rem] leading-none text-[#111] select-none pointer-events-none">
          03
        </span>
        <div className="relative flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#444] mb-4">
              // projetos
            </div>
            <h2
              className="font-black text-[#f0f0f0] leading-tight tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Trabalhos
            </h2>
          </div>
          {/* Project count */}
          <div className="font-mono text-[#333] text-sm self-end pb-2">
            0{projects.length} projetos

          </div>
        </div>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className={`group relative overflow-hidden bg-[#111] border border-[#1e1e1e] ${
              proj.featured ? "lg:col-span-2" : ""
            }`}
            style={{ minHeight: proj.featured ? "420px" : "280px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07, duration: 0.5 }}
          >
            {/* Featured badge */}
            {proj.featured && (
              <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest text-black bg-violet-400 px-2 py-1">
                destaque
              </div>
            )}

            {/* Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
            />

            {/* Default: title + tag at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/90 via-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300">
              <div className="flex items-end justify-between gap-3">
                <h4 className="text-white font-bold text-base leading-tight">{proj.title}</h4>
                <span className="font-mono text-[10px] uppercase tracking-widest text-violet-400 shrink-0">
                  {proj.tag}
                </span>
              </div>
            </div>

            {/* Hover: description + buttons */}
            <div className="absolute inset-0 bg-black/90 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-8 h-0.5 bg-violet-500 mb-4" />
                <h4 className={`text-white font-black tracking-tight mb-1 leading-tight ${proj.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                  {proj.title}
                </h4>
                <span className="font-mono text-[10px] uppercase tracking-widest text-violet-400 block mb-3">{proj.tag}</span>
                <p className={`text-[#ccc] leading-relaxed mb-5 ${proj.featured ? "text-sm md:text-base max-w-xl" : "text-sm line-clamp-3"}`}>
                  {proj.description}
                </p>
                <div className="flex gap-2">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-violet-500 hover:bg-violet-400 text-white text-xs font-medium py-2 px-4 transition-colors duration-200"
                  >
                    <Github size={12} />
                    GitHub
                  </a>
                  {proj.site && (
                    <a
                      href={proj.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-[#444] hover:border-white text-[#888] hover:text-white text-xs font-medium py-2 px-4 transition-all duration-200"
                    >
                      <Globe size={12} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
