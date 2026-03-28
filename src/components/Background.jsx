import { useEffect, useRef } from "react";

const GRID_SIZE = 40;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;

    // ── Grid cells ──
    let gridCols, gridRows;
    let cells = []; // { brightness, target, timer }

    const initGrid = () => {
      gridCols = Math.ceil(w / GRID_SIZE) + 1;
      gridRows = Math.ceil(h / GRID_SIZE) + 1;
      cells = Array.from({ length: gridCols * gridRows }, () => ({
        brightness: 0,
        target: 0,
        timer: Math.random() * 200,
      }));
    };

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initGrid();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    let raf;

    const draw = () => {
      raf = requestAnimationFrame(draw);

      ctx.clearRect(0, 0, w, h);

      // ────────────────────────────────────────
      // Layer 1 — Pulsing grid
      // ────────────────────────────────────────
      cells.forEach((cell, i) => {
        // Randomly pick a new brightness target
        cell.timer--;
        if (cell.timer <= 0) {
          // Most cells stay dark, a few light up
          cell.target = Math.random() < 0.08 ? Math.random() * 0.55 + 0.1 : 0;
          cell.timer = Math.random() * 300 + 80;
        }

        // Smooth lerp toward target
        cell.brightness = lerp(cell.brightness, cell.target, 0.018);

        if (cell.brightness < 0.005) return;

        const col = i % gridCols;
        const row = Math.floor(i / gridCols);
        const x = col * GRID_SIZE;
        const y = row * GRID_SIZE;

        // Horizontal line
        ctx.strokeStyle = `rgba(139,92,246,${cell.brightness * 0.6})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + GRID_SIZE, y);
        ctx.stroke();

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + GRID_SIZE);
        ctx.stroke();

        // Intersection dot
        ctx.fillStyle = `rgba(167,139,250,${cell.brightness})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
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
