import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { downloadCV } from "../utils";

const TERMINAL_TEXTS = [
  "full-stack developer",
  "react enthusiast",
  "problem solver",
  "software engineer",
];

function TerminalLine() {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const pauseTimerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    const word = TERMINAL_TEXTS[wordIdx];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setText(word.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setPaused(true);
        pauseTimerRef.current = setTimeout(() => {
          setPaused(false);
          setDeleting(true);
        }, 2000);
      } else if (deleting && charIdx > 0) {
        setText(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % TERMINAL_TEXTS.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, paused, wordIdx]);

  useEffect(() => {
    return () => clearTimeout(pauseTimerRef.current);
  }, []);

  return (
    <div className="font-mono text-sm md:text-base flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="text-violet-500">$</span>
      <span className="text-violet-300">rafael</span>
      <span className="text-[#333]">--role</span>
      <span className="text-[#888]">
        &quot;{text}
        <span className="cursor-blink text-violet-400">|</span>
        &quot;
      </span>
    </div>
  );
}

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-28 pb-20 relative overflow-hidden"
    >
      <motion.div
        className="relative max-w-5xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#444] mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          disponível para oportunidades
        </div>

        <h1
          className="font-black leading-[0.88] tracking-tighter mb-3 select-none"
          style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)" }}
        >
          <span className="block text-[#f0f0f0]">RAFAEL</span>
          <span className="block text-stroke">GASPAR</span>
        </h1>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-12 bg-violet-500" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#333]">
            São Paulo · Brasil
          </span>
        </div>

        <div className="mb-16">
          <TerminalLine />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-medium py-3 px-6 transition-colors duration-200"
          >
            Ver projetos
            <ArrowDown size={14} />
          </button>
          <button
            onClick={downloadCV}
            className="inline-flex items-center gap-2 border border-[#2a2a2a] hover:border-violet-500 text-[#555] hover:text-[#f0f0f0] text-sm font-medium py-3 px-6 transition-all duration-200"
          >
            <Download size={14} />
            Currículo
          </button>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-6 lg:right-16 font-mono text-[10px] uppercase tracking-widest text-[#282828] select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        © 2025
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-6 lg:left-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="w-px h-14 bg-linear-to-b from-transparent to-[#2a2a2a]" />
        <span
          className="font-mono text-[10px] uppercase tracking-widest text-[#333]"
          style={{ writingMode: "vertical-lr" }}
        >
          scroll
        </span>
      </motion.div>
    </section>
  );
}
