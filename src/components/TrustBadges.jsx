import { useLang } from "../lib/i18n.jsx";

function starPoints(cx, cy, R = 2.5, r = 1.0) {
  return Array.from({ length: 10 }, (_, k) => {
    const a = (k * 36 - 90) * (Math.PI / 180);
    const rad = k % 2 === 0 ? R : r;
    return `${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

const EU_STARS = Array.from({ length: 12 }, (_, i) => {
  const a = (i * 30 - 90) * (Math.PI / 180);
  return { cx: 22 + 15 * Math.cos(a), cy: 22 + 15 * Math.sin(a) };
});

function DsgvoBadge({ t }) {
  return (
    <div className="flex items-center gap-3.5">
      <svg
        width="48"
        height="48"
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <circle cx="22" cy="22" r="22" fill="#0d2342" />
        {EU_STARS.map((s, i) => (
          <polygon key={i} points={starPoints(s.cx, s.cy)} fill="#ff9242" />
        ))}
        {/* Lock body */}
        <rect x="16" y="19.5" width="12" height="8.5" rx="2" fill="white" />
        {/* Lock shackle */}
        <path
          d="M18.5 19.5v-3.2a3.5 3.5 0 0 1 7 0V19.5"
          stroke="white"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Checkmark */}
        <path
          d="M19.5 23.5l2 2 3-3"
          stroke="#ff9242"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div>
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 700,
            color: "var(--ink)",
            fontSize: "1rem",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {t.dsgvo.title}
        </p>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {t.dsgvo.sub}
        </p>
      </div>
    </div>
  );
}

function GermanyBadge({ t }) {
  return (
    <div className="flex items-center gap-3.5">
      <div
        style={{
          width: "44px",
          height: "30px",
          borderRadius: "5px",
          overflow: "hidden",
          flexShrink: 0,
          outline: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ height: "33.33%", backgroundColor: "#000000" }} />
        <div style={{ height: "33.33%", backgroundColor: "#DD0000" }} />
        <div style={{ height: "33.34%", backgroundColor: "#FFCE00" }} />
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 600,
            color: "var(--ink)",
            fontSize: "0.82rem",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {t.germany.line1}
        </p>
        <p
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontWeight: 600,
            color: "var(--ink)",
            fontSize: "0.82rem",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {t.germany.line2}
        </p>
      </div>
    </div>
  );
}

function LmuBadge({ t }) {
  return (
    <div className="flex items-center gap-3.5">
      <img
        src="/LMU_Muenchen_Logo.svg"
        alt="LMU München"
        style={{ height: "38px", width: "auto", flexShrink: 0 }}
        draggable={false}
      />
      <p
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 600,
          color: "var(--ink)",
          fontSize: "0.85rem",
          lineHeight: 1.35,
          margin: 0,
        }}
      >
        {t.lmu.label}
      </p>
    </div>
  );
}

export default function TrustBadges() {
  const { t } = useLang();
  const tb = t.welcome.trustBar;
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
      className="w-full px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-10">
        <DsgvoBadge t={tb} />
        <div
          className="hidden sm:block w-px h-8"
          style={{ backgroundColor: "var(--border)" }}
          aria-hidden="true"
        />
        <GermanyBadge t={tb} />
        <div
          className="hidden sm:block w-px h-8"
          style={{ backgroundColor: "var(--border)" }}
          aria-hidden="true"
        />
        <LmuBadge t={tb} />
      </div>
    </div>
  );
}
