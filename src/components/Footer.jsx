import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] px-6 lg:px-16 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

        {/* Brand */}
        <div>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-xl font-bold text-[#f0f0f0] cursor-pointer select-none mb-1"
          >
            <span className="text-violet-500">/</span>GASPAR<span className="text-violet-500">_</span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#333]">
            Rafael Gaspar · Full Stack Dev
          </p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/RafaelGbm"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-[#333] hover:text-violet-400 transition-colors font-mono text-[11px] uppercase tracking-widest"
          >
            <Github size={14} />
            GitHub
            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-gaspar-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-[#333] hover:text-violet-400 transition-colors font-mono text-[11px] uppercase tracking-widest"
          >
            <Linkedin size={14} />
            LinkedIn
            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="mailto:rafaelgasparmartins@icloud.com"
            className="group flex items-center gap-1.5 text-[#333] hover:text-violet-400 transition-colors font-mono text-[11px] uppercase tracking-widest"
          >
            <Mail size={14} />
            E-mail
            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Year */}
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#222]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
