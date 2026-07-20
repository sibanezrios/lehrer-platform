import "./Footer.css";

const links = [
  { label: "Home", href: "#hero-section" },
  { label: "About Me", href: "#bio-section" },
  { label: "Idiomas", href: "#services" },
  { label: "Works", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <h2 className="footer-heading">
          Scaling
          <br />
          Start-ups for Growth.
        </h2>

        <div className="footer-columns">
          <div className="footer-links-col">
            <h4 className="footer-label">/Quick links</h4>
            <div className="footer-links">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-label">/Contact</h4>
            <a href="mailto:mejed@templyo.io" className="footer-email">
              Mejed@Templyo.io
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
