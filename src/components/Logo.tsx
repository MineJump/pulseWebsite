export function Logo() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
      aria-label="PULSE by 2CHUB"
    >
      <img
        src="/logo-2chub2.svg"
        alt="2CHUB"
        className="h-10 md:h-12 w-auto"
        draggable={false}
      />
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 500,
          fontSize: "1.1rem",
          letterSpacing: "0.08em",
          color: "var(--ink)",
        }}
      >
        2CHUB
      </span>
      <span
        className="w-px self-stretch"
        style={{ backgroundColor: "var(--border)" }}
        aria-hidden="true"
      />
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 500,
          fontSize: "1.1rem",
          letterSpacing: "0.08em",
          color: "var(--ink)",
        }}
      >
        PULSE
      </span>
    </a>
  );
}
