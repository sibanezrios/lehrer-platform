import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import "./Projects.css";

const reasons = [
  {
    title: "Experiencia en distintos entornos educativos",
    desc: "He impartido clases personalizadas, grupales, en instituciones educativas y en el ámbito universitario, trabajando con estudiantes de diferentes edades, niveles y objetivos.",
  },
  {
    title: "Metodología personalizada",
    desc: "Cada plan de aprendizaje se adapta a tu nivel, tus intereses y las metas que deseas alcanzar, para que avances de forma organizada y efectiva.",
  },
  {
    title: "Materiales y recursos exclusivos",
    desc: "Selecciono y preparo materiales digitales, ejercicios y recursos específicos para cada estudiante, complementando las clases con herramientas que facilitan el aprendizaje.",
  },
  {
    title: "Aprendizaje práctico",
    desc: "Las clases están orientadas a desarrollar las habilidades necesarias para comunicarte con seguridad en situaciones reales, combinando gramática, vocabulario, comprensión y expresión.",
  },
  {
    title: "Acompañamiento continuo",
    desc: "Durante todo el proceso recibirás orientación, retroalimentación y seguimiento para evaluar tu progreso, resolver tus dudas y mantener una evolución constante.",
  },
];

const ROTATE_MS = 5000;

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % reasons.length);
    }, ROTATE_MS);

    return () => clearInterval(timerRef.current);
  }, []);

  function goTo(i) {
    setActive(i);
    clearInterval(timerRef.current);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    timerRef.current = setInterval(() => {
      setActive((cur) => (cur + 1) % reasons.length);
    }, ROTATE_MS);
  }

  function goPrev() {
    goTo((active - 1 + reasons.length) % reasons.length);
  }

  function goNext() {
    goTo((active + 1) % reasons.length);
  }

  const reason = reasons[active];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <Reveal as="h2" className="section-title">
            ¿Por qué aprender conmigo?
          </Reveal>
        </div>

        <div className="reasons-carousel">
          <div className="reasons-row">
            <button type="button" className="reasons-arrow" aria-label="Razón anterior" onClick={goPrev}>
              <ChevronIcon />
            </button>

            <div className="reason-card" key={active}>
              {reason.title && <h3 className="reason-title">{reason.title}</h3>}
              <p className="reason-desc">{reason.desc}</p>
            </div>

            <button
              type="button"
              className="reasons-arrow reasons-arrow-next"
              aria-label="Siguiente razón"
              onClick={goNext}
            >
              <ChevronIcon />
            </button>
          </div>

          <div className="reasons-dots" role="tablist" aria-label="Razones para aprender conmigo">
            {reasons.map((r, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                className={`reasons-dot ${i === active ? "is-active" : ""}`}
                aria-label={r.title || "Presentación"}
                aria-selected={i === active}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
