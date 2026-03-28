import { useEffect, useRef } from "react";

const CHARS = "01{}[]()<>=/\\;:.@#$%+-_|~";
const randChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];
const rand = (a, b) => Math.random() * (b - a) + a;

const LAYERS = [
  // Back — tiny, glacial, barely visible
  { fontSize: 11, speed: [0.012, 0.025], headAlpha: 0.25, violetChance: 0.02 },
  // Mid — normal size, slow drift
  { fontSize: 14, speed: [0.03,  0.055], headAlpha: 0.5,  violetChance: 0.05 },
  // Front — larger, slightly faster, brightest
  { fontSize: 16, speed: [0.06,  0.1],   headAlpha: 0.85, violetChance: 0.08 },
];

function buildColumns(layer, w, h) {
  const cols = Math.floor(w / layer.fontSize);
  return Array.from({ length: cols }, () => ({
    y: rand(0, h / layer.fontSize),
    speed: rand(layer.speed[0], layer.speed[1]),
    violet: Math.random() < layer.violetChance,
  }));
}

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h, layerCols;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      layerCols = LAYERS.map((l) => buildColumns(l, w, h));
      // Fill black on resize to avoid flash
      ctx.fillStyle = "#080808";
      ctx.fillRect(0, 0, w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf;

    const draw = () => {
      raf = requestAnimationFrame(draw);

      // Fade trail — semi-transparent black overlay
      // Lower alpha = longer, smoother trail
      ctx.fillStyle = "rgba(8,8,8,0.045)";
      ctx.fillRect(0, 0, w, h);

      LAYERS.forEach((layer, li) => {
        ctx.font = `${layer.fontSize}px 'Courier New', monospace`;

        layerCols[li].forEach((col, ci) => {
          const x = ci * layer.fontSize;
          const y = col.y * layer.fontSize;

          // Head character — bright
          if (col.violet) {
            ctx.fillStyle = `rgba(196,168,255,${layer.headAlpha})`;
          } else {
            ctx.fillStyle = `rgba(255,255,255,${layer.headAlpha})`;
          }
          ctx.fillText(randChar(), x, y);

          col.y += col.speed;

          if (y > h && Math.random() > 0.97) {
            col.y = 0;
            col.violet = Math.random() < layer.violetChance;
            col.speed = rand(layer.speed[0], layer.speed[1]);
          }
        });
      });
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
