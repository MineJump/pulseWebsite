import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useLang } from "../../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../../lib/hooks.js";

function Cell({ value, highlight, size = "md" }) {
  const sizeClass = size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const dashSize = size === "lg" ? 20 : 18;
  if (value === "check") {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-full ${sizeClass}`}
        style={{
          backgroundColor: highlight
            ? "rgba(255,146,66,0.15)"
            : "rgba(15,13,41,0.07)",
        }}
      >
        <svg
          width={size === "lg" ? 13 : 11}
          height={size === "lg" ? 11 : 9}
          viewBox="0 0 11 9"
          fill="none"
        >
          <path
            d="M1 4.5L4 7.5L10 1"
            stroke={highlight ? "var(--accent)" : "currentColor"}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={highlight ? undefined : { color: "var(--ink)" }}
          />
        </svg>
      </span>
    );
  }
  if (value === "dash") {
    return (
      <span style={{ color: "var(--text-dim)", fontSize: dashSize, lineHeight: 1 }}>
        —
      </span>
    );
  }
  return (
    <span
      className="text-xs font-medium"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        color: highlight ? "var(--accent)" : "var(--text-muted)",
      }}
    >
      {value}
    </span>
  );
}

export default function PricingMatrix() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const p = t.preise;
  const plans = p.plans;
  const matrix = p.matrix;

  const defaultIdx = (() => {
    const i = plans?.findIndex((pl) => pl.highlight);
    return i >= 0 ? i : 0;
  })();
  const [activeIdx, setActiveIdx] = useState(defaultIdx);

  if (!matrix || !plans) return null;
  const activePlan = plans[activeIdx];

  return (
    <motion.div
      ref={ref}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* === Desktop table (lg+) === */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse">
          <thead>
            <tr>
              <th className="text-left pb-4 pr-6" style={{ width: "30%" }}>
                <span
                  className="text-xs uppercase tracking-[0.18em]"
                  style={{
                    color: "var(--text-dim)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {matrix.featureColLabel}
                </span>
              </th>
              {plans.map((plan) => {
                const isHighlight = !!plan.highlight;
                return (
                  <th
                    key={plan.id}
                    className="pb-4 px-3 text-center"
                    style={{ width: `${70 / plans.length}%` }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      {isHighlight && (
                        <span
                          className="text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full mb-0.5"
                          style={{
                            backgroundColor: "var(--accent-soft)",
                            color: "var(--accent)",
                            fontFamily: "'IBM Plex Mono', monospace",
                          }}
                        >
                          {p.badge}
                        </span>
                      )}
                      <span
                        className="text-sm font-semibold"
                        style={{
                          color: isHighlight ? "var(--accent)" : "var(--ink)",
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {plan.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{
                          color: "var(--text-dim)",
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {plan.price}
                      </span>
                    </div>
                  </th>
                );
              })}
            </tr>
            <tr aria-hidden="true">
              <td />
              {plans.map((plan) => (
                <td
                  key={plan.id}
                  style={{
                    height: 2,
                    backgroundColor: plan.highlight
                      ? "var(--accent)"
                      : "var(--border)",
                    borderRadius: 1,
                    padding: 0,
                  }}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.rows.map((row, ri) => (
              <motion.tr
                key={`${row.label}-${ri}`}
                initial={reduced ? { opacity: 1 } : { opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: ri * 0.04 }}
                style={{
                  borderBottom: "1px solid var(--border)",
                  backgroundColor: row.group
                    ? "rgba(15,13,41,0.025)"
                    : "transparent",
                }}
              >
                <td className="py-3 pr-6">
                  <span
                    className={`text-sm ${row.group ? "font-medium" : ""}`}
                    style={{
                      color: row.group ? "var(--ink)" : "var(--text-muted)",
                    }}
                  >
                    {row.label}
                  </span>
                </td>
                {row.cells.map((cell, ci) => {
                  const isHighlight = !!plans[ci]?.highlight;
                  return (
                    <td
                      key={ci}
                      className="py-3 px-3 text-center"
                      style={{
                        backgroundColor: isHighlight
                          ? "rgba(255,146,66,0.04)"
                          : "transparent",
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
      </div>

      {/* === Mobile tabs + feature list (< lg) === */}
      <div className="lg:hidden">
        {/* Plan tab pills — horizontally scrollable */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-5 -mx-2 px-2"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
          role="tablist"
          aria-label={matrix.featureColLabel}
        >
          {plans.map((plan, idx) => {
            const isActive = idx === activeIdx;
            const isHighlight = !!plan.highlight;
            return (
              <button
                key={plan.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(idx)}
                className="flex-shrink-0 px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.14em] transition-all focus-halo"
                style={{
                  scrollSnapAlign: "start",
                  backgroundColor: isActive
                    ? isHighlight
                      ? "var(--accent)"
                      : "var(--ink)"
                    : "var(--bg-elev)",
                  color: isActive ? "#fff" : "var(--ink)",
                  border: isActive
                    ? `1px solid ${isHighlight ? "var(--accent)" : "var(--ink)"}`
                    : "1px solid var(--border)",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {plan.name}
              </button>
            );
          })}
        </div>

        {/* Active plan header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlan.id}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div
              className="flex items-baseline gap-3 mb-1 flex-wrap"
            >
              <h3
                className="text-lg"
                style={{
                  color: "var(--ink)",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 500,
                }}
              >
                {activePlan.name}
              </h3>
              {activePlan.highlight && (
                <span
                  className="text-[9px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "var(--accent-soft)",
                    color: "var(--accent)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {p.badge}
                </span>
              )}
            </div>
            <p
              className="text-sm mb-5"
              style={{
                color: "var(--text-dim)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {activePlan.price}
              {activePlan.period ? ` ${activePlan.period}` : ""}
            </p>

            {/* Feature list */}
            <ul className="space-y-0">
              {matrix.rows.map((row, ri) => {
                const cellValue = row.cells[activeIdx];
                return (
                  <li
                    key={`${row.label}-${ri}`}
                    className={`flex items-center justify-between gap-4 py-3 ${
                      row.group ? "rounded-md px-3 -mx-3" : ""
                    }`}
                    style={{
                      borderBottom:
                        ri < matrix.rows.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                      backgroundColor: row.group
                        ? "rgba(15,13,41,0.025)"
                        : "transparent",
                    }}
                  >
                    <span
                      className={`text-sm leading-snug flex-1 ${
                        row.group ? "font-medium" : ""
                      }`}
                      style={{
                        color: row.group ? "var(--ink)" : "var(--text-muted)",
                      }}
                    >
                      {row.label}
                    </span>
                    <div className="flex-shrink-0 flex items-center justify-end">
                      <Cell
                        value={cellValue}
                        highlight={!!activePlan.highlight}
                        size="lg"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
