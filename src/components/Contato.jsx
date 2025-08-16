import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <section id="contato" className="py-24 text-white text-center">
      <h3 className="text-3xl font-bold mb-12">Contato</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 lg:px-12 justify-center">

        {/* E-mail */}
        <Link
          to="/contato-email"
          className="relative bg-white/10 rounded-xl p-8 flex items-center justify-center shadow-lg 
                     hover:shadow-purple-700 hover:scale-105 transition-all duration-300 w-32 h-32 mx-auto group"
        >
          <Mail size={36} className="text-purple-400" />
          <span className="absolute bottom-full mb-2 px-3 py-1 text-sm rounded bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition">
            rafaelgasparmartins@icloud.com
          </span>
        </Link>

        {/* Telefone */}
        <a
          href="tel:11919484001"
          className="relative bg-white/10 rounded-xl p-8 flex items-center justify-center shadow-lg 
                     hover:shadow-purple-700 hover:scale-105 transition-all duration-300 w-32 h-32 mx-auto group"
        >
          <Phone size={36} className="text-purple-400" />
          <span className="absolute bottom-full mb-2 px-3 py-1 text-sm rounded bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition">
            (11) 91948-4001
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/RafaelGbm"
          target="_blank"
          rel="noreferrer"
          className="relative bg-white/10 rounded-xl p-8 flex items-center justify-center shadow-lg 
                     hover:shadow-purple-700 hover:scale-105 transition-all duration-300 w-32 h-32 mx-auto group"
        >
          <Github size={36} className="text-purple-400" />
          <span className="absolute bottom-full mb-2 px-3 py-1 text-sm rounded bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition">
            github.com/RafaelGbm
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rafael-gaspar-549470204/"
          target="_blank"
          rel="noreferrer"
          className="relative bg-white/10 rounded-xl p-8 flex items-center justify-center shadow-lg 
                     hover:shadow-purple-700 hover:scale-105 transition-all duration-300 w-32 h-32 mx-auto group"
        >
          <Linkedin size={36} className="text-purple-400" />
          <span className="absolute bottom-full mb-2 px-3 py-1 text-sm rounded bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition">
            linkedin.com/in/rafael-gaspar-549470204/
          </span>
        </a>

      </div>
    </section>
  );
}
