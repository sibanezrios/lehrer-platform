import Reveal from "./Reveal";
import ArrowButton from "./ArrowButton";
import "./Projects.css";

const projects = [
  {
    title: "Damas",
    desc: "Agency Framer Template",
    href: "#work-damas",
    image:
      "https://framerusercontent.com/images/VNXQLcPHw9VbVzy6BDpZ8pUsaU.png?width=1160&height=800",
    objectPosition: "50.3% 5.5%",
  },
  {
    title: "Najm",
    desc: "SaaS Framer Template",
    href: "#work-najm",
    image:
      "https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?width=1160&height=800",
  },
  {
    title: "Kavi",
    desc: "AI Framer Template",
    href: "#work-kavi",
    image:
      "https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?width=1160&height=800",
  },
  {
    title: "PostWing",
    desc: "Social Media Scheduler",
    href: "#work-postwing",
    image:
      "https://framerusercontent.com/images/1C3zqERGdc7pqPIbDxtBaD4VGiQ.png?width=4096&height=2824",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <Reveal as="h2" className="section-title">
            Featured
            <br />
            Projects
          </Reveal>
          <ArrowButton href="#">View All Work</ArrowButton>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal as="a" className="project-card" href={project.href} key={project.title}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt=""
                  style={{ objectPosition: project.objectPosition || "center" }}
                />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
