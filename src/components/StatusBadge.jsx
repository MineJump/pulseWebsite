import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";

const STATUS_URL = "https://2chub.statuspage.io";
const STATUS_API = "https://2chub.statuspage.io/api/v2/status.json";

const COLORS = {
  none: "#22c55e",
  minor: "#f59e0b",
  major: "#f97316",
  critical: "#dc2626",
  maintenance: "#3b82f6",
  unknown: "#9ca3af",
};

export default function StatusBadge() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const [indicator, setIndicator] = useState("unknown");

  useEffect(() => {
    let alive = true;
    fetch(STATUS_API, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && d?.status?.indicator) setIndicator(d.status.indicator);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const color = COLORS[indicator] || COLORS.unknown;
  const labels = t.footer?.status || {};
  const label = labels[indicator] || labels.unknown || "Status";

  return (
    <a
      href={STATUS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm py-2 focus-halo rounded-sm transition-colors"
      style={{
        color: "var(--text-dim)",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
      aria-label={`${label} — Status-Page öffnen`}
    >
      <span
        className="relative inline-flex items-center justify-center"
        style={{ width: 10, height: 10 }}
        aria-hidden="true"
      >
        <motion.span
          className="absolute rounded-full"
          style={{
            width: 10,
            height: 10,
            backgroundColor: color,
          }}
          animate={
            reduced
              ? undefined
              : { opacity: [0.35, 0.85, 0.35], scale: [1, 1.7, 1] }
          }
          transition={
            reduced
              ? undefined
              : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <span
          className="relative rounded-full"
          style={{ width: 7, height: 7, backgroundColor: color }}
        />
      </span>
      <span>{label}</span>
    </a>
  );
}
