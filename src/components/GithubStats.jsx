import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, Users, BookOpen, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { fadeUp } from "../utils";

const GITHUB_USER = "RafaelGbm";

async function fetchGithubData() {
  const [user, commitsSearch] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USER}`).then((r) => r.json()),
    fetch(`https://api.github.com/search/commits?q=author:${GITHUB_USER}`, {
      headers: { Accept: "application/vnd.github.cloak-preview+json" },
    }).then((r) => r.json()),
  ]);

  return { user, totalCommits: commitsSearch.total_count ?? 0 };
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
        { icon: BookOpen,  label: "Repositórios",  value: data.user.public_repos },
        { icon: Users,     label: "Seguidores",    value: data.user.followers },
        { icon: GitCommit, label: "Commits totais", value: data.totalCommits.toLocaleString("pt-BR") },
      ]
    : Array(3).fill(null);

  return (
    <section id="github-stats" className="py-24 px-6 lg:px-16">
      <SectionHeader number="05" label="github" title="Atividade" flip />

      {error && (
        <p className="text-[#444] text-sm font-mono">Não foi possível carregar os dados do GitHub.</p>
      )}

      {!error && (
        <div className="max-w-5xl flex flex-col gap-4">

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {statCards.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-[#111] border border-[#1e1e1e] p-6 flex flex-col gap-3 hover:border-violet-500/40 transition-colors duration-200"
                {...fadeUp(i * 0.07)}
              >
                {stat ? (
                  <>
                    <stat.icon size={18} className="text-violet-400" />
                    <div className="text-4xl font-black text-[#f0f0f0]">{stat.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#555]">
                      {stat.label}
                    </div>
                  </>
                ) : (
                  <div className="animate-pulse space-y-3">
                    <div className="w-5 h-5 bg-[#1e1e1e] rounded" />
                    <div className="w-16 h-8 bg-[#1e1e1e] rounded" />
                    <div className="w-24 h-3 bg-[#1e1e1e] rounded" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Streak */}
          <motion.div
              className="bg-[#111] border border-[#1e1e1e] p-6 flex flex-col hover:border-violet-500/40 transition-colors duration-200"
              {...fadeUp(0.3)}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#555] mb-5">
                sequência de contribuições
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={STREAK_URL}
                  alt="GitHub Streak"
                  className="w-full max-w-lg"
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
