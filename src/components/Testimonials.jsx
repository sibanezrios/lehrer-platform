import Reveal from "./Reveal";
import "./Testimonials.css";

// Los testimonios se editan desde el CMS en /admin (Decap CMS), que guarda
// cada uno como un archivo JSON en content/testimonials/.
const testimonialModules = import.meta.glob("../../content/testimonials/*.json", {
  eager: true,
});

const testimonials = Object.values(testimonialModules)
  .map((mod) => mod.default ?? mod)
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function StarRating({ rating = 5 }) {
  return (
    <div className="testimonial-stars" role="img" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1.5}
          aria-hidden="true"
        >
          <path d="M12 2 14.9 8.6 22 9.3 16.7 14 18.2 21 12 17.4 5.8 21 7.3 14 2 9.3 9.1 8.6Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Ellos ya comenzaron.
          <br />
          Ahora es tu turno.
        </Reveal>
        <Reveal as="p" className="testimonials-intro">
          Nada genera más confianza que la experiencia de quienes ya han alcanzado sus
          objetivos. Conoce las opiniones y resultados de mis estudiantes, descubre cómo ha
          sido su proceso de aprendizaje y da el primer paso para escribir tu propia historia
          de éxito.
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal as="div" className="testimonial-card" key={i}>
              <StarRating rating={t.rating} />
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
