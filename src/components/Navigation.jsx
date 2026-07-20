import { useState } from "react";
import "./Navigation.css";

const links = [
  { label: "Conoce mi experiencia", href: "#bio-section" },
  { label: "Descubre mis clases", href: "#services" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Recursos gratuitos", href: "#thoughts" },
  { label: "Contáctame", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className={`nav-links${open ? " nav-links-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="nav-burger"
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </>
  );
}
