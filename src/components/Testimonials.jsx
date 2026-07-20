import Reveal from "./Reveal";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Templyo completely changed how I approach building sites in Framer. The templates are not just beautiful, they’re actually structured in a way that makes scaling so much easier.",
    name: "Yakoub Kashmiri",
    role: "Marketing Director",
    avatar:
      "https://framerusercontent.com/images/kAftuUN9iRKwIt9M6RqZo9NS314.jpg?width=3840&height=5275",
  },
  {
    quote:
      "I’ve tried dozens of Framer templates, but Templyo stands out. Everything feels intentional, from the layout to the smallest interactions.",
    name: "Daniel K.",
    role: "Indie Maker",
    avatar:
      "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?width=3220&height=3220",
  },
  {
    quote:
      "Templyo saved me weeks of work. I was able to launch my landing page in a day, and it still looks fully custom.",
    name: "Mark M.",
    role: "Startup Founder",
    avatar:
      "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg?width=2662&height=3993",
  },
  {
    quote:
      "The quality is insane. Clean structure, smooth animations, and super easy to customize. It feels like a premium product from start to finish.",
    name: "Omar H.",
    role: "Frontend Developer",
    avatar:
      "https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg?width=3648&height=3648",
  },
];

function StarRating() {
  return (
    <div className="testimonial-stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
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
          Testimonials
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <Reveal as="div" className="testimonial-card" key={t.name}>
              <StarRating />
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <img className="testimonial-avatar" src={t.avatar} alt={t.name} />
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
