import Reveal from "./Reveal";
import ArrowButton from "./ArrowButton";
import "./Thoughts.css";

const posts = [
  {
    title: "Building Trust Through Clear Design",
    date: "May 5, 2025",
    desc: "How thoughtful visual choices create a stronger sense of reliability for modern brands.",
    image:
      "https://framerusercontent.com/images/lxtBXj3G7Bloek83WxPY1ZUuw0Q.png?width=640&height=360",
    href: "#blog-designers-prepare-for-the-future",
  },
  {
    title: "The Role of Art Direction in Branding",
    date: "Jun 16, 2025",
    desc: "Why visual direction helps brands create emotion and a distinct point of view.",
    image:
      "https://framerusercontent.com/images/ic9k42rYytbJtnRUJXdcNxCHSc.png?width=640&height=359",
    href: "#blog-professional-website-2025",
  },
  {
    title: "How Creative Teams Build Brand Systems",
    date: "Jun 16, 2025",
    desc: "A look at the workflows that keep branding consistent across every touchpoint.",
    image:
      "https://framerusercontent.com/images/MWSFsHfw8FDzKSMZllibGDMY4CU.png?width=640&height=360",
    href: "#blog-brand-systems",
    desktopOnly: true,
  },
];

export default function Thoughts() {
  return (
    <section className="thoughts-section" id="thoughts">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Thoughts
        </Reveal>

        <div className="thoughts-grid">
          {posts.map((post) => (
            <Reveal
              as="a"
              className={`post-card ${post.desktopOnly ? "desktop-only" : ""}`}
              href={post.href}
              key={post.title}
            >
              <div className="post-image-wrap">
                <img src={post.image} alt="" />
                <div className="post-overlay" />
              </div>
              <div className="post-content">
                <p className="post-date">{post.date}</p>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-desc">{post.desc}</p>
              </div>
            </Reveal>
          ))}

          <Reveal as="div" className="all-posts-card">
            <p className="all-posts-text">
              See how we shape brands with clarity and craft&mdash;explore our blog
            </p>
            <ArrowButton href="#blog" light>
              View All Work
            </ArrowButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
