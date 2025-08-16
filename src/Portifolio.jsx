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

import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "home";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    setActiveSection(current);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} onMenuClick={scrollToSection} />

      <div data-aos="fade-up" data-aos-delay="100">
        <Home />
      </div>

      <div data-aos="fade-right" data-aos-delay="200">
        <SobreMim />
      </div>

      <div data-aos="fade-left" data-aos-delay="200">
        <Skills />
      </div>

      <div data-aos="zoom-in" data-aos-delay="150">
        <Projetos />
      </div>

      <div data-aos="fade-right" data-aos-delay="150">
        <Certificados />
      </div>

      <div data-aos="fade-up" data-aos-delay="150">
        <GithubStats />
      </div>

      <div data-aos="zoom-in" data-aos-delay="100">
        <Contato />
      </div>

      <div data-aos="fade-up" data-aos-delay="50">
        <Footer />
      </div>
    </>
  );
}
