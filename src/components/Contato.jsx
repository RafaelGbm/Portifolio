import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const contactItems = [
  {
    label: "E-mail",
    value: "rafaelgasparmartins@icloud.com",
    shortValue: "Enviar mensagem",
    icon: Mail,
    type: "route",
    to: "/contato-email",
    index: "01",
  },
  {
    label: "Telefone",
    value: "(11) 91948-4001",
    shortValue: "(11) 91948-4001",
    icon: Phone,
    type: "tel",
    href: "tel:11919484001",
    index: "02",
  },
  {
    label: "GitHub",
    value: "github.com/RafaelGbm",
    shortValue: "RafaelGbm",
    icon: Github,
    type: "external",
    href: "https://github.com/RafaelGbm",
    index: "03",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rafael-gaspar-dev",
    shortValue: "rafael-gaspar-dev",
    icon: Linkedin,
    type: "external",
    href: "https://www.linkedin.com/in/rafael-gaspar-dev/",
    index: "04",
  },
];

function ContactCard({ item, delay }) {
  const Icon = item.icon;

  const content = (
    <div className="group relative border border-[#1e1e1e] p-8 flex flex-col justify-between h-full min-h-[200px] hover:border-violet-500/40 hover:bg-[#0d0d0d] transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Index number — decorative */}
      <span className="absolute top-6 right-6 font-mono text-[#1a1a1a] group-hover:text-[#222] text-5xl font-black leading-none select-none transition-colors duration-300">
        {item.index}
      </span>

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-300 mb-8">
        <Icon className="text-violet-400" size={20} />
      </div>

      {/* Label + value */}
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-2">
          {item.label}
        </div>
        <div className="text-[#f0f0f0] font-semibold text-sm group-hover:text-white transition-colors duration-200 flex items-center gap-2">
          {item.shortValue}
          <ArrowUpRight size={14} className="text-[#333] group-hover:text-violet-400 transition-colors shrink-0" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      {item.type === "route" ? (
        <Link to={item.to} className="block h-full">{content}</Link>
      ) : (
        <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">{content}</a>
      )}
    </motion.div>
  );
}

export default function Contato() {
  return (
    <section id="contato" className="py-24 px-6 lg:px-16">
      <SectionHeader number="06" label="contato" title="Fale comigo" />
      <p className="text-[#444] text-sm max-w-sm leading-relaxed -mt-8 mb-10">
        Disponível para oportunidades, freelas e colaborações. Escolha o canal que preferir.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactItems.map((item, i) => (
          <ContactCard key={i} item={item} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
