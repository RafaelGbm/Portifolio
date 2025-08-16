import React from "react";
import { Star, GitCommit, GitPullRequest, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const stats = [
  { label: "Total Stars Earned", value: 6, icon: <Star className="w-6 h-6 text-yellow-400" /> },
  { label: "Total Commits (2025)", value: 60, icon: <GitCommit className="w-6 h-6 text-blue-400" /> },
  { label: "Total PRs", value: 0, icon: <GitPullRequest className="w-6 h-6 text-green-400" /> },
  { label: "Total Issues", value: 0, icon: <AlertCircle className="w-6 h-6 text-red-400" /> },
  { label: "Contributed to (last year)", value: 6 },
];

const languages = [
  { name: "Java", value: 59.3, color: "#F7DF1E" },
  { name: "JavaScript", value: 15.68, color: "#EFD81D" },
  { name: "HTML", value: 13.49, color: "#E44D26" },
  { name: "CSS", value: 8.45, color: "#264DE4" },
  { name: "Python", value: 3.09, color: "#3776AB" },
];

export default function GithubStats() {
  return (
    <section id="github-stats" className="py-24 text-white text-center">
      <h3 className="text-3xl font-bold mb-12">GitHub Stats</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Card de Estatísticas */}
        <div className="bg-white/10 p-8 rounded-xl shadow-lg hover:shadow-purple-700 transform hover:scale-105 transition-all duration-300">
          <h4 className="text-xl font-bold mb-4">Rafael Gaspar's GitHub Stats</h4>
          <ul className="space-y-4 text-gray-200">
            {stats.map((stat, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <span className="flex items-center gap-3">{stat.icon} {stat.label}</span>
                <span className="font-semibold">{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card de Linguagens */}
        <div className="bg-white/10 p-8 rounded-xl shadow-lg hover:shadow-purple-700 transform hover:scale-105 transition-all duration-300">
          <h4 className="text-xl font-bold mb-4">Most Used Languages</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={languages} layout="vertical" margin={{ left: 80, right: 20 }}>
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                tick={{ fill: "#fff", fontSize: 14, width: 120 }} 
                interval={0} 
              />
              <Tooltip />
              <Bar dataKey="value">
                {languages.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
}
