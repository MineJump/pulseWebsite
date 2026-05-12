import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

const SEPARATOR = (
  <span
    className="w-1 h-1 rounded-full flex-shrink-0"
    style={{ backgroundColor: "var(--border)" }}
    aria-hidden="true"
  />
);

export function TrustBar() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const items = t.testimonials.items;

  const content = (
    <span className="inline-flex items-center gap-6">
      {/* LMU Logo */}
      <span className="inline-flex items-center gap-2.5 flex-shrink-0">
        <img
          src="/LMU_Muenchen_Logo.svg"
          alt="LMU München"
          className="h-5 w-auto"
          style={{ opacity: 0.35, filter: "grayscale(1)" }}
        />
      </span>
      {SEPARATOR}
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-6 flex-shrink-0">
          <span
            className="text-xs uppercase tracking-[0.18em] whitespace-nowrap"
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {item}
          </span>
          {i < items.length - 1 && SEPARATOR}
        </span>
      ))}
      {/* spacer before repeat */}
      <span className="w-10 flex-shrink-0" aria-hidden="true" />
    </span>
  );

  return (
    <div
      className="w-full overflow-hidden border-y py-4"
      style={{ borderColor: "var(--border)" }}
      aria-label="Trust signals"
    >
      <div
        className="inline-flex animate-marquee"
        style={{
          animationDuration: "32s",
          animationPlayState: prefersReducedMotion ? "paused" : "running",
        }}
      >
        {content}
        {content}
      </div>
    </div>
  );
}
