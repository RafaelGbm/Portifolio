import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  const inner = (
    <div className="bg-[#080808] p-7 flex items-start justify-between group hover:bg-[#0d0d0d] transition-colors duration-200 cursor-pointer h-full">
      <div className="flex items-start gap-4">
        <Icon className="text-violet-400 mt-0.5 shrink-0" size={18} />
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#444] mb-2">
            {item.label}
          </div>
          <div className="text-[#f0f0f0] text-sm font-medium">{item.value}</div>
        </div>
      </div>
      <ArrowUpRight
        size={15}
        className="text-[#2a2a2a] group-hover:text-violet-400 transition-colors shrink-0 mt-1"
      />
    </div>
  );

  const wrapped =
    item.type === "route" ? (
      <Link to={item.to} className="block h-full">
        {inner}
      </Link>
    ) : (
      <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
        {inner}
      </a>
    );

  return (
    <motion.div
      className="border border-[#1e1e1e]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      {wrapped}
    </motion.div>
  );
}

export default function Contato() {
  return (
    <section id="contato" className="py-24 px-6 lg:px-16">
      {/* Section header with number */}
      <div className="relative mb-16">
        <span className="absolute -top-10 left-0 font-black text-[7rem] leading-none text-[#111] select-none pointer-events-none">
          06
        </span>
        <div className="relative">
          <div className="font-mono text-xs uppercase tracking-widest text-[#444] mb-4">
            // contato
          </div>
          <h2
            className="font-black text-[#f0f0f0] leading-tight tracking-tighter mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Fale comigo
          </h2>
          <p className="text-[#444] text-sm max-w-lg">
            Disponível para estágio e projetos. Se tiver uma oportunidade interessante, manda uma mensagem.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        {contactItems.map((item, i) => (
          <ContactCard key={i} item={item} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
