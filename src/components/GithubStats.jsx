export default function GithubStats() {
  return (
    <section
      id="github-stats"
      className="py-24 text-white text-center "
    >
      <h3 className="text-3xl font-bold mb-12 text-white bg-clip-text">
        GitHub Stats
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Card de Perfil */}
        <div className="bg-white/10 p-8 rounded-xl shadow-lg
                       hover:shadow-purple-700 transform hover:scale-105
                       transition-all duration-300 flex flex-col items-center">
          <div className="p-6 h-full flex flex-col">
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Estatísticas Gerais</h4>
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=RafaelGbm&show_icons=true&theme=tokyonight&count_private=true&bg_color=1a0b2e&title_color=a855f7&text_color=e879f9&icon_color=c084fc"
                className="w-auto rounded-lg"
                alt="GitHub Stats"
              />
            </div>
          </div>
        </div>
        
        {/* Card de Linguagens */}
        <div className="bg-white/10 p-8 rounded-xl shadow-lg
                       hover:shadow-purple-700 transform hover:scale-105
                       transition-all duration-300 flex flex-col items-center">
          <div className="p-6 h-full flex flex-col">
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Linguagens Mais Usadas</h4>
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=RafaelGbm&show_icons=true&theme=tokyonight&layout=compact&bg_color=1a0b2e&title_color=a855f7&text_color=e879f9"
                className="w-96 rounded-lg"
                alt="Top Languages"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Card adicional com streak stats */}
      <div className="mt-10 max-w-2xl mx-auto px-6 lg:px-12">
        <div className="bg-white/10 p-8 rounded-xl shadow-lg
                       hover:shadow-purple-700 transform hover:scale-105
                       transition-all duration-300 flex flex-col items-center">
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Sequência de Contribuições</h4>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=RafaelGbm&theme=tokyonight&background=1a0b2e&ring=a855f7&fire=e879f9&currStreakLabel=c084fc"
              className="w-full rounded-lg"
              alt="GitHub Streak"
            />
          </div>
        </div>
      </div>
    </section>
  );
}