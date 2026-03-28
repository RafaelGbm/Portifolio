import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] px-6 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex gap-5">
        <a
          href="https://github.com/RafaelGbm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#444] hover:text-violet-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-gaspar-549470204"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#444] hover:text-violet-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:rafaelgasparmartins@icloud.com"
          className="text-[#444] hover:text-violet-400 transition-colors"
          aria-label="E-mail"
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="font-mono text-[11px] uppercase tracking-widest text-[#333]">
        © {new Date().getFullYear()} Rafael Gaspar
      </p>
    </footer>
  );
}
