export function downloadCV() {
  const link = document.createElement("a");
  link.href = "/CV.pdf";
  link.download = "Rafael_Gaspar_CV.pdf";
  link.click();
}

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});
