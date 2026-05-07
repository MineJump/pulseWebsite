import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface MarqueeStripProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function MarqueeStrip({ items, speed = 40, className = "" }: MarqueeStripProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const content = items.join("     //     ");

  return (
    <div
      className={`overflow-hidden whitespace-nowrap border-y py-5 ${className}`}
      style={{ borderColor: "var(--border)" }}
      aria-hidden="true"
    >
      <div
        className="inline-flex gap-16 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: prefersReducedMotion ? "paused" : "running",
        }}
      >
        <span
          className="text-sm uppercase tracking-[0.2em]"
          style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {content}
        </span>
        <span
          className="text-sm uppercase tracking-[0.2em]"
          style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {content}
        </span>
      </div>
    </div>
  );
}
