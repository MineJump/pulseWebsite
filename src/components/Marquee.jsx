import { usePrefersReducedMotion } from "../lib/hooks.js";

export default function Marquee({ items, speed = 40, className = "" }) {
  const reduced = usePrefersReducedMotion();
  const text = items.join("     //     ");
  const mask = {
    maskImage:
      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  };
  return (
    <div
      className={`overflow-hidden whitespace-nowrap py-6 ${className}`}
      style={mask}
      aria-hidden="true"
    >
      <div
        className="inline-flex gap-16 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: reduced ? "paused" : "running",
        }}
      >
        <span
          className="text-sm uppercase tracking-[0.2em]"
          style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {text}
        </span>
        <span
          className="text-sm uppercase tracking-[0.2em]"
          style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
