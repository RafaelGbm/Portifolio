import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const certifications = [
  {
    name: "Design Thinking",
    institution: "FIAP",
    year: "2024",
    description: "Metodologia de inovação centrada no ser humano para resolução criativa de problemas.",
  },
  {
    name: "Blockchain Essentials",
    institution: "FIAP",
    year: "2023",
    description: "Fundamentos de blockchain, contratos inteligentes e aplicações descentralizadas.",
  },
  {
    name: "Formação Social e Sustentabilidade",
    institution: "FIAP",
    year: "2024",
    description: "Impacto social da tecnologia e práticas sustentáveis no desenvolvimento de software.",
  },
  {
    name: "Desenvolvimento Java Enterprise",
    institution: "FIAP",
    year: "2024",
    description: "Desenvolvimento de aplicações corporativas com Java EE, APIs REST e boas práticas de arquitetura.",
  },
  {
    name: "Big Data & Analytics",
    institution: "FIAP",
    year: "2023",
    description: "Coleta, processamento e análise de grandes volumes de dados para tomada de decisão.",
  },
];

export default function Certificados() {
  return (
    <section id="certificados" className="py-24 px-6 lg:px-16">
      <SectionHeader number="04" label="certificados" title="Certificações" flip />

      <div className="max-w-4xl">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="group border-t border-[#1e1e1e] py-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-violet-500/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
          >
            {/* Number */}
            <span className="font-mono text-[#1e1e1e] group-hover:text-[#2a2a2a] text-3xl font-black leading-none transition-colors duration-300 select-none shrink-0 w-12">
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-[#f0f0f0] font-black text-lg tracking-tight group-hover:text-white transition-colors duration-200 mb-1">
                {cert.name}
              </h4>
              <p className="text-[#444] group-hover:text-[#666] text-sm leading-relaxed transition-colors duration-200">
                {cert.description}
              </p>
            </div>

            {/* Meta */}
            <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 shrink-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-violet-400 border border-violet-500/20 px-2 py-0.5">
                {cert.institution}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#333]">
                {cert.year}
              </span>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[#1e1e1e]" />
      </div>
    </section>
  );
}
