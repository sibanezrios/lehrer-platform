import Reveal from "./Reveal";
import "./Thoughts.css";

const platforms = [
  { label: "Instagram", href: "https://instagram.com/mightylanguages", Icon: InstagramIcon },
  {
    label: "Facebook",
    href: "https://facebook.com/groups/aprender.aleman.sin.limites",
    Icon: FacebookIcon,
  },
  { label: "Twitch", href: "https://twitch.tv/mightygameplays", Icon: TwitchIcon },
  { label: "YouTube", href: "https://www.youtube.com/@MightyDayson", Icon: YoutubeIcon },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="30%" stopColor="#FA7E1E" />
          <stop offset="60%" stopColor="#D62976" />
          <stop offset="85%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#ig-grad)" />
      <rect x="7" y="7" width="10" height="10" rx="3" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.8" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="15.3" cy="8.7" r="0.9" fill="#fff" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M14 21v-8.2h2.4l.4-2.8H14V8.2c0-.8.2-1.3 1.4-1.3h1.5V4.4c-.3 0-1.1-.1-2-.1-2.1 0-3.5 1.3-3.5 3.6V10H9v2.8h2.4V21H14z"
        fill="#fff"
      />
    </svg>
  );
}

function TwitchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#9146FF" />
      <path
        d="M7 6h11v7.5l-2.8 2.8h-2.6L10.6 19v-2.7H7z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="11.2" y1="9" x2="11.2" y2="12.3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="14.3" y1="9" x2="14.3" y2="12.3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#FF0000" />
      <polygon points="10 8 17 12 10 16 10 8" fill="#fff" />
    </svg>
  );
}

export default function Thoughts() {
  return (
    <section className="thoughts-section" id="community">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Únete a mi comunidad
        </Reveal>

        <Reveal as="p" className="community-text">
          Miles de estudiantes ya aprenden conmigo a través de mis redes sociales. Allí
          encontrarás lecciones, consejos, recursos gratuitos, recomendaciones y contenido
          diseñado para ayudarte a mejorar tu alemán, inglés, francés o español, estés donde
          estés.
        </Reveal>

        <Reveal as="p" className="community-text">
          Explora mis plataformas, sígueme y forma parte de una comunidad que aprende un
          nuevo idioma todos los días.
        </Reveal>

        <Reveal as="div" className="community-links">
          {platforms.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="community-link"
              aria-label={p.label}
            >
              <p.Icon />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
