import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../../lib/hooks.js";

// px sizes: md = 20, lg = 24  (match the old w-5/w-6 container sizes)
const CELL_CHECK = {
  md: { px: 20, cx: 10, cy: 10, r: 9,  path: "M6.1 10.2L8.7 12.8L13.9 7.2", sw: 1.4 },
  lg: { px: 24, cx: 12, cy: 12, r: 11, path: "M7.3 12.3L10.4 15.3L16.7 8.7", sw: 1.5 },
};

function Cell({ value, highlight, size = "md", compact = false }) {
  const dashSize = size === "lg" ? 20 : 18;
  if (value === "check") {
    const { px, cx, cy, r, path, sw } = CELL_CHECK[size] ?? CELL_CHECK.md;
    const color = highlight ? "var(--accent)" : "var(--text-muted)";
    return (
      <span
        className="inline-flex items-center justify-center"
        style={{ width: px, height: px }}
      >
        <svg width={px} height={px} viewBox={`0 0 ${px} ${px}`} fill="none">
          <circle cx={cx} cy={cy} r={r} stroke={color} strokeWidth="1" fill="none" />
          <path
            d={path}
            stroke={color}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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
      className="font-medium text-center"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        color: highlight ? "var(--accent)" : "var(--text-muted)",
        fontSize: compact ? 9 : 12,
        display: compact ? "block" : "inline",
        width: compact ? "100%" : undefined,
        lineHeight: compact ? 1.3 : undefined,
        wordBreak: compact ? "break-word" : undefined,
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
  const [activeIndices, setActiveIndices] = useState([defaultIdx]);
  function togglePlan(idx) {
    setActiveIndices(prev => {
      if (prev.includes(idx)) {
        if (prev.length === 1) return prev; // keep at least 1 selected
        return prev.filter(i => i !== idx);
      }
      if (prev.length >= 3) return prev; // cap at 3
      return [...prev, idx].sort((a, b) => a - b);
    });
  }

  if (!matrix || !plans) return null;

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

      {/* === Mobile multi-select comparison (< lg) === */}
      <div className="lg:hidden">
        {/* Plan selector: toggle pills, up to 3 */}
        <div className="mb-5">
          <div
            className="flex flex-wrap gap-2 mb-2"
            role="group"
            aria-label="Pläne vergleichen"
          >
            {plans.map((plan, idx) => {
              const isSelected = activeIndices.includes(idx);
              const isHighlight = !!plan.highlight;
              const canAdd = isSelected || activeIndices.length < 3;
              return (
                <button
                  key={plan.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => togglePlan(idx)}
                  className="px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.14em] transition-all focus-halo"
                  style={{
                    backgroundColor: isSelected
                      ? isHighlight ? "var(--accent)" : "var(--ink)"
                      : "var(--bg-elev)",
                    color: isSelected ? "#fff" : "var(--ink)",
                    border: `1px solid ${
                      isSelected
                        ? isHighlight ? "var(--accent)" : "var(--ink)"
                        : "var(--border)"
                    }`,
                    opacity: !canAdd ? 0.35 : 1,
                    pointerEvents: !canAdd ? "none" : undefined,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: isSelected ? 500 : 400,
                  }}
                >
                  {plan.name}
                </button>
              );
            })}
          </div>
          <p
            className="text-[10px] uppercase tracking-[0.12em]"
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {activeIndices.length} / 3 {matrix.compareHint}
          </p>
        </div>

        {/* Comparison table */}
        {(() => {
          const colW = activeIndices.length <= 1 ? 80 : activeIndices.length === 2 ? 56 : 44;
          const cellSize = activeIndices.length === 1 ? "lg" : "md";
          return (
            <div>
              {/* Plan column headers */}
              <div
                className="flex items-end pb-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex-1 min-w-0" />
                {activeIndices.map(idx => {
                  const plan = plans[idx];
                  const isHighlight = !!plan.highlight;
                  return (
                    <div
                      key={plan.id}
                      className="flex items-end justify-center overflow-hidden"
                      style={{ width: colW, flexShrink: 0 }}
                    >
                      <span
                        className="block text-[10px] font-medium text-center leading-tight w-full truncate px-0.5"
                        title={plan.name}
                        style={{
                          color: isHighlight ? "var(--accent)" : "var(--ink)",
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {plan.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Feature rows */}
              <ul className="space-y-0">
                {matrix.rows.map((row, ri) => (
                  <li
                    key={`${row.label}-${ri}`}
                    className={`flex items-center py-3 ${
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
                      className={`text-sm leading-snug flex-1 min-w-0 pr-2 ${
                        row.group ? "font-medium" : ""
                      }`}
                      style={{
                        color: row.group ? "var(--ink)" : "var(--text-muted)",
                      }}
                    >
                      {row.label}
                    </span>
                    {activeIndices.map(idx => {
                      const plan = plans[idx];
                      return (
                        <div
                          key={plan.id}
                          className="flex items-center justify-center flex-shrink-0 overflow-hidden"
                          style={{ width: colW }}
                        >
                          <Cell
                            value={row.cells[idx]}
                            highlight={!!plan.highlight}
                            size={cellSize}
                            compact={activeIndices.length > 1}
                          />
                        </div>
                      );
                    })}
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </div>
    </motion.div>
  );
}
