import { useEffect, useRef, useState } from "react";
import "./ScrollPortrait.css";

const START_RADIUS = 20;
const END_RADIUS = 24;

export default function ScrollPortrait({ startRef, endRef }) {
  const [style, setStyle] = useState({ opacity: 0 });
  const [flip, setFlip] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function update() {
      tickingRef.current = false;
      const startEl = startRef.current;
      const endEl = endRef.current;
      if (!startEl || !endEl) return;

      const startRect = startEl.getBoundingClientRect();
      const endRect = endEl.getBoundingClientRect();

      const scrollY = window.scrollY;
      const triggerLine = window.innerHeight * 0.45;
      const startTopAbs = startRect.top + scrollY;
      const endTopAbs = endRect.top + scrollY;
      const startScroll = Math.max(0, startTopAbs - triggerLine);
      const endScroll = Math.max(startScroll + 1, endTopAbs - triggerLine);
      const progress = Math.min(1, Math.max(0, (scrollY - startScroll) / (endScroll - startScroll)));

      const lerp = (a, b) => a + (b - a) * progress;

      setStyle({
        opacity: 1,
        top: lerp(startRect.top, endRect.top),
        left: lerp(startRect.left, endRect.left),
        width: lerp(startRect.width, endRect.width),
        height: lerp(startRect.height, endRect.height),
        borderRadius: `${lerp(START_RADIUS, END_RADIUS)}px`,
      });
      setFlip(prefersReduced ? 1 : progress);
    }

    function onScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    }

    update();
    document.fonts?.ready?.then(update);

    const startEl = startRef.current;
    const endEl = endRef.current;
    const ro = new ResizeObserver(update);
    if (startEl) ro.observe(startEl);
    if (endEl) ro.observe(endEl);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [startRef, endRef]);

  // Front face (black photo) starts facing the viewer; back face (red photo)
  // is rotated -180deg so it only becomes visible once the flip completes.
  const frontDeg = flip * 180;
  const backDeg = -180 + flip * 180;

  const faceStyle = (deg) => ({
    borderRadius: style.borderRadius,
    transform: `rotateY(${deg}deg)`,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  });

  return (
    <div className="scroll-portrait" style={{ ...style, perspective: 1200 }}>
      <div className="scroll-portrait-face" style={faceStyle(backDeg)}>
        <img src="/profile-red.png" alt="" aria-hidden="true" className="scroll-portrait-img" />
      </div>
      <div className="scroll-portrait-face" style={faceStyle(frontDeg)}>
        <img src="/profile-black.png" alt="Majd" className="scroll-portrait-img" />
      </div>
    </div>
  );
}
