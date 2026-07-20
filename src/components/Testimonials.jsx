import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { sanityClient, urlForImage } from "../lib/sanity";
import "./Testimonials.css";

// Los testimonios se editan desde Sanity Studio (carpeta studio/, o
// https://majd-testimonios.sanity.studio una vez desplegado), en el
// documento "testimonial" con site == "majd-portfolio".
const FALLBACK_TESTIMONIALS = [
  {
    _id: "fallback-1",
    text: "Aquí puedes escribir la opinión de un estudiante sobre su experiencia en tus clases.",
    name: "Nombre del estudiante",
    role: "Clases de inglés",
    rating: 5,
  },
  {
    _id: "fallback-2",
    text: "Aquí puedes escribir la opinión de otro estudiante sobre su experiencia en tus clases.",
    name: "Nombre del estudiante",
    role: "Clases de alemán",
    rating: 5,
  },
  {
    _id: "fallback-3",
    text: "Aquí puedes escribir la opinión de otro estudiante sobre su experiencia en tus clases.",
    name: "Nombre del estudiante",
    role: "Preparación para examen internacional",
    rating: 5,
  },
];

const QUERY = `*[_type == "testimonial" && site == "majd-portfolio"] | order(_createdAt asc){
  _id, name, role, text, rating, photo
}`;

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
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    if (!sanityClient) return;

    let cancelled = false;
    sanityClient.fetch(QUERY).then((data) => {
      if (!cancelled && data?.length) setTestimonials(data);
    });

    return () => {
      cancelled = true;
    };
  }, []);

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
          {testimonials.map((t) => (
            <Reveal as="div" className="testimonial-card" key={t._id}>
              <StarRating rating={t.rating} />
              <p className="testimonial-quote">{t.text}</p>
              <div className="testimonial-author">
                {t.photo ? (
                  <img
                    src={urlForImage(t.photo).width(80).height(80).url()}
                    alt=""
                    className="testimonial-avatar testimonial-avatar-photo"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="testimonial-avatar" aria-hidden="true">
                    {initials(t.name)}
                  </span>
                )}
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
