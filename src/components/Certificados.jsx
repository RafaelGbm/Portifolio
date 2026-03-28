import { Award, Star, Database } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  { name: "Design Thinking", icon: Award, year: "2024" },
  { name: "Blockchain Essentials", icon: Star, year: "2023" },
  { name: "Formação Social e Sustentabilidade", icon: Award, year: "2024" },
  { name: "Big Data & Analytics", icon: Database, year: "2023" },
];

export default function Certificados() {
  return (
    <section id="certificados" className="py-24 px-6 lg:px-16">
      {/* Section header with number */}
      <div className="relative mb-16">
        <span className="absolute -top-10 left-0 font-black text-[7rem] leading-none text-[#111] select-none pointer-events-none">
          04
        </span>
        <div className="relative">
          <div className="font-mono text-xs uppercase tracking-widest text-[#444] mb-4">
            // certificados
          </div>
          <h2
            className="font-black text-[#f0f0f0] leading-tight tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Certificações
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        {certifications.map((cert, idx) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={idx}
              className="bg-[#111] border border-[#1e1e1e] p-6 flex items-center gap-5 group hover:border-violet-500/40 transition-all duration-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div className="text-violet-400 group-hover:text-violet-300 transition-colors shrink-0">
                <Icon size={22} />
              </div>
              <div className="min-w-0">
                <h4 className="text-[#f0f0f0] font-medium text-sm leading-snug">{cert.name}</h4>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#444] mt-1">
                  FIAP · {cert.year}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
