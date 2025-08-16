import { Github, Globe } from "lucide-react";
import firesentinel from "/firesentinel-print.png";
import FEclub from "/FEclub.png";
import Melodia from "/Melodia.png";
import oceanWatch from "/OceanWatch.png";
import portalFilmes from "/PortalFilmes.png";
import ecoTrend from "/Ecotrend.png";

export default function Projetos() {
  const projects = [
    {
      title: "FireSentinel",
      description:
        "Colaborei nesse projeto de Sistema CLI com IA para prever queimadas e coletar informações de sensores IoT: cadastro, leitura, análise de dados e gerenciamento de ocorrências.",
      image: firesentinel,
      github: "https://github.com/Pedro-Camacho/FireSentinel",
      site: "https://fire-sentinel.vercel.app",
    },
    {
      title: "FE-Club",
      description: "Colaborei nesse projeto, um jogo que aproxima fãs da Fórmula E, permitindo gerenciar equipes, competir globalmente, explorar tecnologias sustentáveis e interagir com a comunidade, transformando a paixão pelo automobilismo elétrico em uma experiência digital envolvente.",
      image: FEclub,
      github: "https://github.com/RafaelDuarteF/fe-club-react",
      site: "https://fe-club-react.vercel.app",
    },
    {
      title: "Melodia",
      description: "O Melodia é uma plataforma gratuita que colaborei, onde oferece uma experiência única de streaming de música, permitindo que os usuários criem playlists personalizadas e descubram novas músicas e artistas. O site foi desenvolvido utilizando HTML, SASS e Bootstrap para garantir uma interface responsiva e atraente.",
      image: Melodia,
      github: "https://github.com/RafaelDuarteF/melodia",
      site: "https://melodia-gamma.vercel.app",
    },
     {
      title: "OceanWatch",
      description: "Sistema de monitoramento ambiental voltado à preservação dos oceanos e recursos marinhos. O Ocean Watch busca promover a conscientização e facilitar a coleta e visualização de dados sobre o impacto ambiental no meio aquático.",
      image: oceanWatch,
      github: "https://github.com/RafaelGbm/Ocean-Watch",
      site: "https://ocean-watch.vercel.app",
    },
       {
      title: "PortalFilmes",
      description: "O Portal Filmes é um site que usa a API do The Movie DB para mostrar filmes e séries, permitindo ver detalhes, trailers e avaliações, além de gerenciar listas pessoais de “Assistidos” e “Para Ver Depois”, oferecendo uma experiência prática e moderna para descobrir conteúdos.",
      image: portalFilmes,
      github: "https://github.com/RafaelGbm/Portal-Filmes",
      site: "https://portal-filmes-alpha.vercel.app",
    },
      {
      title: "EcoTrend",
      description: "Eco Society é um e-commerce focado na venda de produtos sustentáveis nas categorias de casa, tecnologia, roupas e beleza. Nosso objetivo é promover o consumo consciente, oferecendo alternativas que respeitam o meio ambiente e ajudam a construir um futuro mais sustentável.",
      image: ecoTrend,
      github: "https://github.com/Monteiro77/EcoTrend",
      site: "https://eco-trend-nine.vercel.app",
    },
  ];

  return (
    <section id="projetos" className="py-24 text-white text-center">
      <h3 className="text-3xl font-bold mb-12">Projetos</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 lg:px-12">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white/10 rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-all duration-300 flex flex-col"
          >
            {/* Título acima da imagem */}
            <h4 className="text-xl md:text-2xl font-semibold p-4">{proj.title}</h4>

            {/* Imagem com overlay apenas para descrição */}
            <div className="relative w-full">
              <img
                src={proj.image}
                alt={`${proj.title} screenshot`}
                className="w-full h-72 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                <p className="text-gray-300 text-sm md:text-base">{proj.description}</p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-center gap-4 mt-4 mb-4 px-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm md:text-base font-medium transition-all"
              >
                <Github size={18} />
                GitHub
              </a>
              {proj.site && (
                <a
                  href={proj.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm md:text-base font-medium transition-all"
                >
                  <Globe size={18} />
                  Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
