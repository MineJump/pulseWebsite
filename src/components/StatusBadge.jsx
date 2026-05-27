import { useEffect, useState } from "react";
import { useLang } from "../lib/i18n.jsx";

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
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
      aria-label={`${label} — Status-Page öffnen`}
    >
      <span
        className="inline-block rounded-full flex-shrink-0"
        style={{ width: 7, height: 7, backgroundColor: color }}
        aria-hidden="true"
      />
      <span>{label}</span>
    </a>
  );
}
