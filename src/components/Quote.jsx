import { useEffect, useMemo, useRef, useState } from "react";
import "./Quote.css";

const BAND = 0.3;

export default function Quote({ text }) {
  const words = useMemo(() => text.split(" "), [text]);
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    function update() {
      tickingRef.current = false;
      const node = sectionRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const startLine = viewportH * 0.85;
      const endLine = viewportH * 0.25;
      const total = startLine - endLine + rect.height;
      const value = Math.min(1, Math.max(0, (startLine - rect.top) / total));
      setProgress(value);
    }

    function onScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const n = words.length;

  return (
    <section className="quote-section" ref={sectionRef}>
      <div className="container">
        <p className="quote-text">
          {words.map((word, i) => {
            const start = n > 1 ? (i / (n - 1)) * (1 - BAND) : 0;
            const wordProgress = Math.min(1, Math.max(0, (progress - start) / BAND));
            const alpha = 0.1 + 0.9 * wordProgress;
            return (
              <span key={i} className="quote-word" style={{ color: `rgba(0, 0, 0, ${alpha.toFixed(3)})` }}>
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
