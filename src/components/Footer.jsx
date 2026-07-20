import "./Footer.css";

const links = [
  { label: "Inicio", href: "#hero-section" },
  { label: "Sobre mí", href: "#bio-section" },
  { label: "Idiomas", href: "#services" },
  { label: "Trabajos", href: "#work" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <h2 className="footer-heading">
          Aprende idiomas
          <br />
          sin límites.
        </h2>

        <div className="footer-columns">
          <div className="footer-links-col">
            <h4 className="footer-label">/Enlaces rápidos</h4>
            <div className="footer-links">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-label">/Contacto</h4>
            <a href="mailto:dayson0509@gmail.com" className="footer-email">
              dayson0509@gmail.com
            </a>
          </div>
        </div>
      </div>

      <p className="footer-watermark">
        MIGHTY
        <br />
        LANGUAGES
      </p>
    </footer>
  );
}
