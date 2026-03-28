import { useState, useEffect } from "react";
import { menuItems } from "../data/menuItems";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ activeSection, onMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#080808]/85 backdrop-blur-md border-b border-[#141414]" />

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-px bg-[#1a1a1a] w-full">
        <div
          className="h-full bg-violet-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="relative px-6 lg:px-16 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold cursor-pointer select-none font-mono tracking-tight text-[#f0f0f0]"
        >
          RG<span className="text-violet-500">.</span>
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onMenuClick(item.id)}
              className={`text-xs uppercase tracking-widest font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-violet-400"
                  : "text-[#444] hover:text-[#f0f0f0]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#555] hover:text-white transition-colors p-1"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#080808] border-b border-[#141414] px-6 py-6 flex flex-col gap-5 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {menuItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => {
                  onMenuClick(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-xs uppercase tracking-widest text-left font-medium transition-colors duration-200 ${
                  activeSection === item.id ? "text-violet-400" : "text-[#444]"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
