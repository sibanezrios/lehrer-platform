import Reveal from "./Reveal";
import "./Features.css";

const included = [
  "Clases 100 % online desde cualquier lugar del mundo.",
  "Plan de aprendizaje personalizado según tu nivel, objetivos y ritmo.",
  "Materiales digitales cuidadosamente seleccionados para cada estudiante.",
  "Preparación para exámenes internacionales y certificaciones oficiales.",
  "Clases individuales o para grupos.",
  "Horarios flexibles para adaptarse a tu disponibilidad.",
  "Seguimiento continuo para medir tu progreso y resolver tus dudas.",
  "Metodología práctica enfocada en la comunicación y el uso real del idioma.",
  "Recursos adicionales para continuar aprendiendo fuera de clase.",
  "Acompañamiento cercano durante todo tu proceso de aprendizaje.",
];

const audience = [
  "Estudiantes escolares y universitarios que desean fortalecer su aprendizaje.",
  "Profesionales que buscan ampliar sus oportunidades laborales o desarrollar nuevas competencias.",
  "Personas que planean estudiar, trabajar, viajar o vivir en el extranjero.",
  "Empresas que desean fortalecer las competencias lingüísticas de sus equipos.",
  "Personas que simplemente quieren aprender un nuevo idioma por interés personal o crecimiento cultural.",
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="checklist-block">
          <Reveal as="h2" className="section-title">
            ¿Qué encontrarás en mis clases?
          </Reveal>

          <div className="checklist-panel">
            <div className="checklist-grid">
              {included.map((item) => (
                <div className="checklist-row" key={item}>
                  <span className="check-badge" aria-hidden="true">
                    ✓
                  </span>
                  <p className="checklist-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="audience-block">
          <Reveal as="h2" className="section-title">
            ¿Para quién son las clases?
          </Reveal>

          <div className="audience-grid">
            {audience.map((item) => (
              <Reveal as="div" className="audience-card" key={item}>
                <p className="audience-text">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
