import { motion } from "framer-motion";

export default function GithubStats() {
  const user = "RafaelGbm";

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&count_private=true&hide_border=true&bg_color=0f0f0f&title_color=a78bfa&text_color=888888&icon_color=7c3aed&ring_color=7c3aed`;

  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=0f0f0f&title_color=a78bfa&text_color=888888`;

  const streakUrl = `https://streak-stats.demolab.com/?user=${user}&hide_border=true&background=0f0f0f&ring=7c3aed&fire=a78bfa&currStreakLabel=a78bfa&sideLabels=666666&dates=444444&currStreakNum=f0f0f0&sideNums=f0f0f0&stroke=0f0f0f`;

  return (
    <section id="github-stats" className="py-24 px-6 lg:px-16">
      {/* Section header with number */}
      <div className="relative mb-16">
        <span className="absolute -top-10 left-0 font-black text-[7rem] leading-none text-[#111] select-none pointer-events-none">
          05
        </span>
        <div className="relative">
          <div className="font-mono text-xs uppercase tracking-widest text-[#444] mb-4">
            // github
          </div>
          <h2
            className="font-black text-[#f0f0f0] leading-tight tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Atividade
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
        {/* General stats */}
        <motion.div
          className="bg-[#0f0f0f] border border-[#1e1e1e] p-6 flex flex-col gap-3 hover:border-violet-500/30 transition-colors duration-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#444]">
            estatísticas gerais
          </div>
          <img
            src={statsUrl}
            alt="GitHub Stats"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        {/* Top languages */}
        <motion.div
          className="bg-[#0f0f0f] border border-[#1e1e1e] p-6 flex flex-col gap-3 hover:border-violet-500/30 transition-colors duration-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#444]">
            linguagens mais usadas
          </div>
          <img
            src={langsUrl}
            alt="Top Languages"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        {/* Streak */}
        <motion.div
          className="md:col-span-2 bg-[#0f0f0f] border border-[#1e1e1e] p-6 flex flex-col gap-3 hover:border-violet-500/30 transition-colors duration-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#444]">
            sequência de contribuições
          </div>
          <img
            src={streakUrl}
            alt="GitHub Streak"
            className="w-full max-w-2xl mx-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
