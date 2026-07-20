import { useRef } from "react";
import Reveal from "./Reveal";
import ScrollPortrait from "./ScrollPortrait";
import "./Hero.css";

function GetStartedButton({ href, children, target, ...rest }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener" : undefined}
      className="get-started"
      {...rest}
    >
      <span className="get-started-text">{children}</span>
      <span className="get-started-box" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 17 17 7M9 7h8v8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export default function Hero() {
  const portraitStartRef = useRef(null);
  const portraitEndRef = useRef(null);

  return (
    <>
      <section className="hero-section" id="hero-section">
        <div className="container hero-inner">
          <div className="hero-title-row">
            <img src="/hero-icon.png" alt="" className="hero-lion-icon" />

            <div className="hero-title-wrap">
              <h1 className="hero-title">
                <span className="hero-title-line">
                  Mighty
                  <img src="/sparkle-icon.png" alt="" className="hero-sparkle-icon" />
                </span>
                <br />
                languages
              </h1>
            </div>
          </div>

          <div className="portrait-slot portrait-slot-start" ref={portraitStartRef} />
        </div>
      </section>

      <section className="bio-section" id="bio-section">
        <div className="container bio-inner">
          <div className="bio-col bio-col-left">
            <Reveal as="h2" className="section-heading">
              Hey!
            </Reveal>
            <Reveal as="p" className="bio-lead">
              Soy Dayson, licenciado en Idiomas y docente profesional, formado para la
              enseñanza de lenguas extranjeras.
            </Reveal>
          </div>

          <span className="portrait-slot portrait-slot-end" ref={portraitEndRef} />

          <div className="bio-col bio-col-right">
            <Reveal as="div">
              <p className="bio-p">
                ¿Buscas clases personalizadas de alemán, inglés, francés o español para
                extranjeros?
              </p>
              <p className="bio-p">
                Cuento con experiencia en clases personalizadas, grupos, instituciones
                educativas y universidad, ofreciendo una metodología práctica y
                adaptada a las necesidades de cada estudiante.
              </p>
            </Reveal>
            <GetStartedButton href="https://framer.link/nnhGcWR" target="_blank">
              Get Started
            </GetStartedButton>
          </div>
        </div>
      </section>

      <ScrollPortrait startRef={portraitStartRef} endRef={portraitEndRef} />
    </>
  );
}
