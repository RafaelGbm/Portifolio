export default function SectionHeader({ number, label, title, flip = false }) {
  return (
    <div className="relative mb-16 overflow-visible">
      {/* Decorative number — alternates side */}
      <span
        className={`absolute -top-10 hidden sm:block font-black text-[7rem] leading-none text-[#111] select-none pointer-events-none ${
          flip ? "right-0" : "left-0"
        }`}
      >
        {number}
      </span>

      {/* Title block — always left */}
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          {/* Accent line — right side on flip */}
          {flip && <div className="flex-1 h-px bg-[#1e1e1e]" />}
          <span className="font-mono text-xs uppercase tracking-widest text-[#444]">
            // {label}
          </span>
          {!flip && <div className="w-12 h-px bg-[#1e1e1e]" />}
        </div>

        <h2
          className="font-black text-[#f0f0f0] leading-tight tracking-tighter"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
