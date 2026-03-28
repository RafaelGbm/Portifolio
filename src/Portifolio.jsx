import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SobreMim from "./components/SobreMim";
import Projetos from "./components/Projetos";
import Certificados from "./components/Certificados";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import GithubStats from "./components/GithubStats";
import Skills from "./components/Skills";
import Background from "./components/Background";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "home";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 80) current = s.getAttribute("id");
    });
    setActiveSection(current);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Background />
      <div style={{ position: "relative", zIndex: 1 }}>
      <Navbar activeSection={activeSection} onMenuClick={scrollToSection} />
      <Home />
      <SobreMim />
      <Skills />
      <Projetos />
      <Certificados />
      <GithubStats />
      <Contato />
      <Footer />
      </div>
    </>
  );
}
