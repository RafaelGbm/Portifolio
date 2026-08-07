import { Github, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import firesentinel from "/firesentinel-print.png";
import FEclub from "/FEclub.png";
import Melodia from "/Melodia.png";
import portalFilmes from "/PortalFilmes.png";
import ecoTrend from "/Ecotrend.png";
import centimeterx from "/centimeterx.png";
import onevoice from "/onevoice.png";
import fordvinshare from "/fordvinshare.png";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    title: "One Voice",
    description:
      "App para gestão de ministérios de louvor. O coração é o algoritmo de escala automática de músicos — monta as escalas respeitando indisponibilidades e o perfil de cada membro. Inclui setlists com transposição de tom, biblioteca de músicas e dados em tempo real com Supabase.",
    image: onevoice,
    github: "https://github.com/RafaelGbm/OneVoice",
    tags: ["React Native", "TypeScript", "Supabase"],
    featured: true,
    mockup: true,
  },
  {
    title: "CentimeterX",
    description:
      "App de campo para topografia de alta precisão (GNSS/RTK). Desenvolvi a coleta georreferenciada de ocorrências, a gestão de rovers e a estimativa da estação-base mais próxima, consumindo um backend próprio em Spring Boot.",
    image: centimeterx,
    github: "https://github.com/RafaelGbm/Centimeter-X",
    tags: ["React Native", "Expo", "Spring Boot"],
    mockup: true,
  },
  {
    title: "FordVINShare",
    description:
      "App multiplataforma para o desafio Ford (FIAP): na mesma base, uma frente Cliente (garantia, agendamento, concessionárias, chat com IA) e uma Analista (KPIs de VIN Share, leads em risco, segmentação preditiva). Consome backend Java/Spring Boot no Azure, com login JWT e modo offline via React Query.",
    image: fordvinshare,
    github: "https://github.com/RafaelGbm/FordVINShare",
    tags: ["React Native", "TypeScript", "React Query"],
    mockup: true,
  },
  {
    title: "FireSentinel",
    description: "Desenvolvi o módulo de IA para previsão de queimadas e a integração com sensores IoT — coleta de dados em tempo real, análise de risco e disparo de alertas via CLI em Python.",
    image: firesentinel,
    github: "https://github.com/Pedro-Camacho/FireSentinel",
    site: "https://fire-sentinel.vercel.app",
    tags: ["Python", "IoT", "IA"],
    featured: true,
  },
];

const others = [
  {
    title: "PortalFilmes",
    description: "Consome a API do TMDB para exibir filmes e séries com detalhes e trailers. Implementei sistema de favoritos persistido localmente — sem backend, sem perder dados entre sessões.",
    image: portalFilmes,
    github: "https://github.com/RafaelGbm/Portal-Filmes",
    site: "https://portal-filmes-alpha.vercel.app",
    tags: ["React", "API"],
  },
  {
    title: "FE-Club",
    description: "Meu primeiro projeto em React — foco total em construir um front-end polido e funcional. Aprendi componentização, estado e roteamento enquanto entregava uma interface de jogo completa.",
    image: FEclub,
    github: "https://github.com/RafaelDuarteF/fe-club-react",
    site: "https://fe-club-react.vercel.app",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Melodia",
    description: "Interface de streaming construída com SASS e Bootstrap — arquitetura pensada para escalar com uma API real. Foco em UI consistente e experiência fluida de navegação entre playlists.",
    image: Melodia,
    github: "https://github.com/RafaelDuarteF/melodia",
    site: "https://melodia-gamma.vercel.app",
    tags: ["HTML", "SASS", "Bootstrap"],
  },
  {
    title: "EcoTrend",
    description: "E-commerce com carrinho funcional, gerenciamento de estado dos produtos e catálogo por categorias. Foco na experiência de compra — do browse ao checkout.",
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
      className="group border-t border-[#1e1e1e] py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center hover:border-violet-500/30 transition-colors duration-300"
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
      <div className={`order-1 lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        {proj.mockup ? (
          <div className="relative" style={{ aspectRatio: "3/2" }}>
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-full object-contain brightness-90 group-hover:brightness-100 transition-[filter] duration-500"
            />
            {proj.featured && (
              <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest text-black bg-violet-400 px-2 py-0.5">
                destaque
              </div>
            )}
          </div>
        ) : (
          <div
            className="relative overflow-hidden bg-[#111] border border-[#1e1e1e] group-hover:border-violet-500/30 transition-colors duration-300"
            style={{ aspectRatio: "3/2" }}
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
        )}
      </div>

      {/* Content */}
      <div className={`order-2 lg:col-span-6 ${isEven ? "lg:order-3" : "lg:order-2"}`}>
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

        <h3 className="text-[#f0f0f0] font-black text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-white transition-colors duration-200">
          {proj.title}
        </h3>

        <p className="text-[#444] group-hover:text-[#666] text-sm leading-relaxed mb-6 transition-colors duration-200 max-w-lg">
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

function OtherCard({ proj }) {
  return (
    <motion.div
      className="group flex flex-col border border-[#1e1e1e] hover:border-violet-500/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden bg-[#111]" style={{ aspectRatio: "16/9" }}>
        <img
          src={proj.image}
          alt={proj.title}
          className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-100 transition-[filter] duration-500"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {proj.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] uppercase tracking-widest text-violet-400 border border-violet-500/20 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-[#f0f0f0] font-bold text-base tracking-tight mb-3 group-hover:text-white transition-colors duration-200">
          {proj.title}
        </h3>

        <div className="flex flex-wrap gap-2 mt-auto">
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[#2a2a2a] hover:border-violet-500 text-[#666] hover:text-[#f0f0f0] text-[11px] font-mono py-1.5 px-2.5 transition-all duration-200"
          >
            <Github size={11} />
            GitHub
          </a>
          {proj.site && (
            <a
              href={proj.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-violet-500 hover:bg-violet-400 text-white text-[11px] font-mono py-1.5 px-2.5 transition-colors duration-200"
            >
              <Globe size={11} />
              Ver
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
    <section id="projetos" className="py-16 px-6 lg:px-16">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-4">
        <div className="flex-1">
          <SectionHeader number="03" label="projetos" title="Trabalhos" />
        </div>
        <span className="font-mono text-[#2a2a2a] text-sm pb-2">
          {String(highlights.length + others.length).padStart(2, "0")} projetos
        </span>
      </div>

      <div className="max-w-[68rem]">
        {highlights.map((proj, idx) => (
          <ProjectRow key={idx} proj={proj} index={idx} />
        ))}

        <div className="border-t border-[#1e1e1e] pt-10 mt-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#444]">
              Outros projetos
            </span>
            <div className="h-px flex-1 bg-[#1a1a1a]" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((proj) => (
              <OtherCard key={proj.title} proj={proj} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
