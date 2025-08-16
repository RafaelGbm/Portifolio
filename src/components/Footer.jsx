import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/40 text-white py-8 border-t border-purple-900">
      <div className="px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="https://github.com/RafaelGbm" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-purple-400 transition-colors" title="GitHub">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/rafael-gaspar-549470204" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-purple-400 transition-colors" title="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="mailto:rafaelgasparmartins@icloud.com" className="text-white/60 hover:text-purple-400 transition-colors" title="E-mail">
            <Mail size={28} />
          </a>
        </div>
        <div className="text-white/60 text-sm md:text-base text-center">
          © {new Date().getFullYear()} Rafael Gaspar. Desenvolvido com React, Vite e muito ☕
        </div>
      </div>
    </footer>
  );
}