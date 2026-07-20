export default function ArrowButton({ href, children, light = false, target, ...rest }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener" : undefined}
      className={`arrow-button ${light ? "light" : ""}`}
      {...rest}
    >
      <span>{children}</span>
      <span className="arrow-circle">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
