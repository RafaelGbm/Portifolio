import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Users, BookOpen, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { fadeUp } from "../utils";

const GITHUB_USER = "RafaelGbm";

async function fetchGithubData() {
  const [user, repos] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USER}`).then((r) => r.json()),
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`).then((r) => r.json()),
  ]);

  const totalStars = Array.isArray(repos)
    ? repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    : 0;

  return { user, totalStars };
}

const STREAK_URL = `https://streak-stats.demolab.com/?user=${GITHUB_USER}&hide_border=true&background=111111&ring=8b5cf6&fire=a78bfa&currStreakLabel=a78bfa&sideLabels=555555&dates=444444&currStreakNum=f0f0f0&sideNums=f0f0f0&stroke=1e1e1e`;

export default function GithubStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchGithubData()
      .then(setData)
      .catch(() => setError(true));
  }, []);

  const statCards = data
    ? [
        { icon: BookOpen, label: "Repositórios",  value: data.user.public_repos },
        { icon: Users,    label: "Seguidores",    value: data.user.followers },
        { icon: Star,     label: "Estrelas",      value: data.totalStars },
      ]
    : Array(3).fill(null);

  return (
    <section id="github-stats" className="py-24 px-6 lg:px-16">
      <SectionHeader number="05" label="github" title="Atividade" flip />

      {error && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="border border-[#1e1e1e] divide-y divide-[#1e1e1e] flex flex-col">
            {[{ icon: BookOpen, label: "Repositórios" }, { icon: Users, label: "Seguidores" }, { icon: Star, label: "Estrelas" }].map((s, i) => (
              <div key={i} className="flex items-center gap-5 p-6">
                <s.icon size={16} className="text-[#2a2a2a] shrink-0" />
                <div className="text-3xl font-black text-[#2a2a2a] leading-none">—</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#2a2a2a] ml-auto">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 border border-[#1e1e1e] p-6 flex flex-col items-center justify-center gap-3 min-h-[180px]">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#2a2a2a]">GitHub indisponível no momento</span>
            <a
              href={`https://github.com/RafaelGbm`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#444] hover:text-violet-400 text-xs font-mono transition-colors"
            >
              Ver perfil no GitHub <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      )}

      {!error && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Stat list */}
          <motion.div
            className="border border-[#1e1e1e] divide-y divide-[#1e1e1e] flex flex-col"
            {...fadeUp(0)}
          >
            {statCards.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-6 hover:bg-[#0d0d0d] transition-colors duration-200 group flex-1"
              >
                {stat ? (
                  <>
                    <stat.icon size={16} className="text-violet-400 shrink-0" />
                    <div className="text-3xl font-black text-[#f0f0f0] leading-none">{stat.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#555] ml-auto">
                      {stat.label}
                    </div>
                  </>
                ) : (
                  <div className="animate-pulse flex items-center gap-5 w-full">
                    <div className="w-4 h-4 bg-[#1e1e1e] rounded" />
                    <div className="w-12 h-7 bg-[#1e1e1e] rounded" />
                    <div className="w-20 h-3 bg-[#1e1e1e] rounded ml-auto" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Streak */}
          <motion.div
            className="lg:col-span-2 border border-[#1e1e1e] p-6 flex flex-col hover:border-violet-500/40 transition-colors duration-200"
            {...fadeUp(0.15)}
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-5">
              sequência de contribuições
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={STREAK_URL}
                alt="GitHub Streak"
                className="w-full max-w-2xl"
                loading="lazy"
              />
            </div>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 self-start inline-flex items-center gap-2 text-[#555] hover:text-violet-400 text-xs font-mono transition-colors"
            >
              Ver perfil no GitHub
              <ArrowUpRight size={12} />
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
}
