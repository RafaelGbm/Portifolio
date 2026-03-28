import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

// Two rows going in opposite directions
const row1 = [...skills, ...skills, ...skills];
const row2 = [...skills].reverse().concat([...skills].reverse(), [...skills].reverse());

function MarqueeRow({ items, reverse = false, speed = 40 }) {
  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-3 w-max py-1"
        style={{
          animation: `marquee-${reverse ? "reverse" : "forward"} ${speed}s linear infinite`,
        }}
      >
        {items.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-[#111] border border-[#1e1e1e] px-4 py-2.5 shrink-0 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-200 cursor-default group"
          >
            <img
              src={skill.icon}
              alt={skill.title}
              className="w-4 h-4 object-contain"
              draggable={false}
            />
            <span className="text-sm text-[#555] group-hover:text-[#f0f0f0] font-medium transition-colors duration-200 whitespace-nowrap">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      {/* Section header */}
      <div className="px-6 lg:px-16">
        <div className="relative mb-16">
          <span className="absolute -top-10 left-0 font-black text-[7rem] leading-none text-[#111] select-none pointer-events-none">
            02
          </span>
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-widest text-[#444] mb-4">
              // stack
            </div>
            <h2
              className="font-black text-[#f0f0f0] leading-tight tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Tecnologias
            </h2>
          </div>
        </div>
      </div>

      {/* Marquee rows */}
      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <MarqueeRow items={row1} reverse={false} speed={35} />
        <MarqueeRow items={row2} reverse={true} speed={28} />
      </motion.div>
    </section>
  );
}
