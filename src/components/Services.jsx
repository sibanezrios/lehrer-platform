import Reveal from "./Reveal";
import "./Services.css";

const services = [
  { title: "🇩🇪 Alemán" },
  { title: "🇬🇧 Inglés" },
  { title: "🇫🇷 Francés" },
  { title: "🇪🇸 Español para extranjeros" },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Idiomas
        </Reveal>

        <div className="services-list">
          {services.map((service) => (
            <Reveal as="div" className="service-card" key={service.title}>
              <h3 className="service-title">{service.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
