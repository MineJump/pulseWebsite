import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

type CellValue = "check" | "dash" | string;

interface MatrixRow {
  labelDe: string;
  labelEn: string;
  group?: boolean;
  cells: [CellValue, CellValue, CellValue, CellValue];
}

const ROWS: MatrixRow[] = [
  { labelDe: "Volumen", labelEn: "Participants", group: true, cells: ["bis 100", "bis 400", "bis 1.000", "bis 400"] },
  { labelDe: "ESM / EMA", labelEn: "ESM / EMA", cells: ["check", "check", "check", "check"] },
  { labelDe: "Core Sensing-Module", labelEn: "Core Sensing Modules", cells: ["check", "check", "check", "dash"] },
  { labelDe: "Alle 14 Sensing-Module", labelEn: "All 14 Sensing Modules", cells: ["dash", "check", "check", "dash"] },
  { labelDe: "Multi-Studien-Setup", labelEn: "Multi-Study Setup", cells: ["dash", "check", "check", "dash"] },
  { labelDe: "White-Label-App", labelEn: "White-Label App", cells: ["dash", "check", "check", "dash"] },
  { labelDe: "Research-Dashboard", labelEn: "Research Dashboard", cells: ["dash", "check", "check", "dash"] },
  { labelDe: "Erweiterte Exporte", labelEn: "Advanced Exports", cells: ["dash", "check", "check", "dash"] },
  { labelDe: "Erweiterte Analytik", labelEn: "Advanced Analytics", cells: ["dash", "dash", "check", "dash"] },
  { labelDe: "API-Integrationen", labelEn: "API Integrations", cells: ["dash", "dash", "check", "dash"] },
  { labelDe: "Dediziertes SLA", labelEn: "Dedicated SLA", cells: ["dash", "dash", "check", "dash"] },
  { labelDe: "Mehrnutzung möglich", labelEn: "Overage available", cells: ["dash", "25 €/TN", "dash", "10 €/TN"] },
];

const PLAN_IDS = ["explore", "professional", "research", "ema-only"];

function Cell({ value, highlight }: { value: CellValue; highlight: boolean }) {
  if (value === "check") {
    return (
      <span
        className="inline-flex items-center justify-center w-5 h-5 rounded-full"
        style={{ backgroundColor: highlight ? "rgba(255,146,66,0.15)" : "rgba(13,35,66,0.07)" }}
      >
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
          <path d="M1 4.5L4 7.5L10 1" stroke={highlight ? "#FF9242" : "#43C6AC"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (value === "dash") {
    return <span style={{ color: "var(--text-dim)", fontSize: 18, lineHeight: 1 }}>—</span>;
  }
  return (
    <span
      className="text-xs font-medium"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        color: highlight ? "#FF9242" : "var(--text-muted)",
      }}
    >
      {value}
    </span>
  );
}

export function PricingMatrix() {
  const { t, language } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fp = t.featuresPage;
  const plans = fp.plans;

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full overflow-x-auto"
    >
      <table className="w-full min-w-[520px] border-collapse">
        <thead>
          <tr>
            <th className="text-left pb-4 pr-6 w-[40%]">
              <span className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}>
                {language === "de" ? "Feature" : "Feature"}
              </span>
            </th>
            {plans.map((plan) => {
              const isHighlight = plan.id === "professional";
              return (
                <th key={plan.id} className="pb-4 px-3 text-center" style={{ width: "15%" }}>
                  <div className="flex flex-col items-center gap-1">
                    {isHighlight && (
                      <span
                        className="text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full mb-0.5"
                        style={{
                          backgroundColor: "rgba(255,146,66,0.12)",
                          color: "#FF9242",
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {fp.badge}
                      </span>
                    )}
                    <span
                      className="text-sm font-semibold"
                      style={{ color: isHighlight ? "#FF9242" : "var(--ink)" }}
                    >
                      {plan.name}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {plan.price}
                    </span>
                  </div>
                </th>
              );
            })}
          </tr>
          {/* Column highlight borders */}
          <tr aria-hidden="true">
            <td />
            {PLAN_IDS.map((id) => (
              <td
                key={id}
                style={{
                  height: 2,
                  backgroundColor: id === "professional" ? "#FF9242" : "var(--border)",
                  borderRadius: 1,
                  padding: 0,
                }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, ri) => (
            <motion.tr
              key={ri}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: ri * 0.04 }}
              style={{
                borderBottom: "1px solid var(--border)",
                backgroundColor: row.group ? "rgba(13,35,66,0.025)" : "transparent",
              }}
            >
              <td className="py-3 pr-6">
                <span
                  className={`text-sm ${row.group ? "font-medium" : ""}`}
                  style={{ color: row.group ? "var(--ink)" : "var(--text-muted)" }}
                >
                  {language === "de" ? row.labelDe : row.labelEn}
                </span>
              </td>
              {row.cells.map((cell, ci) => {
                const isHighlight = PLAN_IDS[ci] === "professional";
                return (
                  <td
                    key={ci}
                    className="py-3 px-3 text-center"
                    style={{
                      backgroundColor: isHighlight ? "rgba(255,146,66,0.03)" : "transparent",
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <Cell value={cell} highlight={isHighlight} />
                    </div>
                  </td>
                );
              })}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
