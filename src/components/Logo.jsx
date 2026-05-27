import { useRoute } from "../lib/router.jsx";

const PULSE_ROUTES = ["/plattform", "/app", "/methoden"];

export default function Logo() {
  const { path } = useRoute();
  const inPulseEnvironment = PULSE_ROUTES.some(
    (r) => path === r || path.startsWith(r + "/")
  );

  return (
    <a
      href="/"
      className="inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
      aria-label={inPulseEnvironment ? "PULSE by 2CHuB" : "2CHuB"}
    >
      <span className="inline-flex items-center gap-0.5">
        <img
          src="/logo-2chub2.svg"
          alt="2CHuB"
          className="h-6 md:h-7 w-auto"
          draggable={false}
        />
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 500,
            fontSize: "0.95rem",
            letterSpacing: "0.08em",
            color: "var(--ink)",
          }}
        >
          2CHuB
        </span>
      </span>
      {inPulseEnvironment && (
        <>
          <span
            className="w-px self-stretch my-1"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 500,
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              color: "var(--ink)",
            }}
          >
            PULSE
          </span>
        </>
      )}
    </a>
  );
}
