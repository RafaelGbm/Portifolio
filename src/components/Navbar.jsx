import { useState } from "react";
import { menuItems } from "../data/menuItems";

export default function Navbar({ activeSection, onMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-lg text-white z-50 shadow-lg">
      {/* Container principal - removido max-w-7xl mx-auto */}
      <div className="px-6 lg:px-12 flex justify-between items-center py-6">
        {/* Logo */}
        <h1
          onClick={handleHomeClick}
          className="text-2xl md:text-3xl font-bold cursor-pointer select-none"
        >
          Rafael
          <span className="text-purple-600 text-3xl md:text-4xl">.</span>
        </h1>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onMenuClick(item.id)}
              className={`font-medium transition-colors duration-300 hover:text-purple-400 ${
                activeSection === item.id ? "text-purple-400" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl p-3 rounded-md hover:bg-purple-600 transition"
          >
            {isMenuOpen ? "❌" : "☰"}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile - removido max-w-7xl mx-auto */}
      {isMenuOpen && (
        <div className="md:hidden px-6 lg:px-12 bg-black/50 backdrop-blur-lg flex flex-col gap-4 py-4 transition-all duration-300">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onMenuClick(item.id);
                setIsMenuOpen(false);
              }}
              className={`font-medium text-lg transition-colors duration-300 hover:text-purple-400 ${
                activeSection === item.id ? "text-purple-400" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}