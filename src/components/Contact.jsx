import { useState } from "react";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your backend / email service of choice.
    console.log("Contact form submitted:", form);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div className="contact-main">
          <div className="contact-title-desc">
            <Reveal as="h2" className="section-title">
              ¡Comencemos tu aprendizaje!
            </Reveal>
            <Reveal as="p" className="contact-desc">
              ¿Tienes preguntas o te gustaría recibir más información sobre las clases?
              Completa el formulario y me pondré en contacto contigo para conocer tus
              objetivos, resolver tus dudas y ayudarte a encontrar el plan de aprendizaje que
              mejor se adapte a tus necesidades. Será un gusto acompañarte en este nuevo reto.
            </Reveal>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Nombre</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Escribe tu nombre"
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label className="form-field">
            <span>Correo electrónico</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Escribe tu correo electrónico"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label className="form-field">
            <span>Cuéntame sobre tus objetivos</span>
            <textarea
              name="project"
              required
              placeholder="¿Qué idioma quieres aprender y para qué?"
              value={form.project}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
