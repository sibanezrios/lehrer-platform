import { useState } from "react";
import Reveal from "./Reveal";
import "./Contact.css";

const socials = [
  { label: "X", href: "https://x.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];

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
              Let&rsquo;s talk.
            </Reveal>
            <Reveal as="p" className="contact-desc">
              Have a project or need help? Fill out the form, and we&apos;ll get back to you
              soon.
            </Reveal>
          </div>

          <div className="contact-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="social-icon"
                aria-label={s.label}
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label className="form-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label className="form-field">
            <span>Your Project</span>
            <textarea
              name="project"
              required
              placeholder="Tell us about your project"
              value={form.project}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
