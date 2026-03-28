import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const contactItems = [
  {
    label: "E-mail",
    value: "rafaelgasparmartins@icloud.com",
    icon: Mail,
    type: "route",
    to: "/contato-email",
  },
  {
    label: "Telefone",
    value: "(11) 91948-4001",
    icon: Phone,
    type: "tel",
    href: "tel:11919484001",
  },
  {
    label: "GitHub",
    value: "github.com/RafaelGbm",
    icon: Github,
    type: "external",
    href: "https://github.com/RafaelGbm",
  },
  {
    label: "LinkedIn",
    value: "rafael-gaspar-549470204",
    icon: Linkedin,
    type: "external",
    href: "https://www.linkedin.com/in/rafael-gaspar-549470204/",
  },
];

function ContactCard({ item, delay }) {
  const Icon = item.icon;

  const content = (
    <div className="p-8 flex flex-col justify-between gap-6 h-full group hover:bg-[#0f0f0f] transition-colors duration-200 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 flex items-center justify-center bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors duration-200">
          <Icon className="text-violet-400" size={22} />
        </div>
        <ArrowUpRight
          size={18}
          className="text-[#2a2a2a] group-hover:text-violet-400 transition-colors"
        />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-2">
          {item.label}
        </div>
        <div className="text-[#f0f0f0] font-semibold text-sm leading-snug truncate">
          {item.value}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      className="bg-[#111] border border-[#1e1e1e] hover:border-violet-500/40 transition-colors duration-200"
      initial={{ opacity: 0, y: 14 }}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        {contactItems.map((item, i) => (
          <ContactCard key={i} item={item} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
