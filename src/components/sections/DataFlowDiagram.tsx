import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  MapPin, Waves, Monitor, Heart, Wifi,
  LayoutDashboard, BarChart2, Download, BookOpen,
  Activity, Footprints, Volume2, BatteryMedium, Phone,
  Keyboard, Watch, Music, Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

const CAT_COLORS = ["#FF9242", "#43C6AC", "#4B6BFB", "#8B5CF6", "#0D9488"];
const CAT_ICONS: LucideIcon[] = [MapPin, Waves, Monitor, Heart, Wifi];

const MODULE_ICONS: Record<string, LucideIcon> = {
  "Location Tracking": MapPin,
  "Pedometer": Footprints,
  "Activity Tracking": Activity,
  "Motion Sensor": Waves,
  "Ambient Sound & Light": Volume2,
  "Battery Monitoring": BatteryMedium,
  "Phone Call Events": Phone,
  "Screen Time & App Events": Monitor,
  "PULSE Keyboard": Keyboard,
  "Apple Health / Health Connect": Heart,
  "Garmin Smartwatch Integration": Watch,
  "Wi-Fi & Bluetooth": Wifi,
  "Music Tracking": Music,
  "Spotify History": Headphones,
};

const OUTPUT_COLOR = "#43C6AC";
const OUTPUT_ICONS: LucideIcon[] = [LayoutDashboard, BarChart2, Download, BookOpen];
const OUTPUT_LABELS_DE = ["Live Dashboard", "Analyse", "Export", "Publikationen"];
const OUTPUT_LABELS_EN = ["Live Dashboard", "Analysis", "Export", "Publications"];

// SVG coordinates
const VW = 960;
const VH = 480;
const LX = 110;   // left nodes x
const CX = 480;   // center x
const RX = 840;   // right nodes x
const CY = VH / 2; // 240

const LEFT_Y  = [80, 160, 240, 320, 400];   // 5 nodes, spacing 80, centred at 240
const RIGHT_Y = [108, 196, 284, 372];        // 4 nodes, spacing 88, centred at 240

const CTRL_L = (LX + CX) / 2;  // 295
const CTRL_R = (CX + RX) / 2;  // 660

function splitLabel(name: string): [string, string | null] {
  const idx = name.indexOf(" & ");
  if (idx === -1) return [name, null];
  return [name.slice(0, idx + 2), name.slice(idx + 3)];
}

export function DataFlowDiagram() {
  const { t, language } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<number | null>(null);

  const categories = t.methodenPage.sensingCategories;
  const outputLabels = language === "de" ? OUTPUT_LABELS_DE : OUTPUT_LABELS_EN;
  const inputHeader  = language === "de" ? "Sensor-Inputs" : "Sensor Inputs";
  const outputHeader = language === "de" ? "Research-Outputs" : "Research Outputs";

  function toggle(i: number) {
    setSelected(i === selected ? null : i);
  }

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 pb-4 md:pb-6">
      <div ref={ref} className="max-w-[1400px] mx-auto">

        {/* ── Desktop SVG ── */}
        <div className="hidden md:block">
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            width="100%"
            style={{ overflow: "visible" }}
            aria-label="PULSE data flow diagram"
          >
            {/* Section headers */}
            {[
              { x: LX, label: inputHeader },
              { x: RX, label: outputHeader },
            ].map(({ x, label }) => (
              <motion.text
                key={label}
                x={x}
                y={38}
                textAnchor="middle"
                fontSize={9}
                fill="var(--text-dim)"
                fontFamily="'IBM Plex Mono', monospace"
                letterSpacing="0.15em"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ textTransform: "uppercase" }}
              >
                {label}
              </motion.text>
            ))}

            {/* ── Curves: left → center ── */}
            {LEFT_Y.map((ly, i) => (
              <motion.path
                key={`lc-${i}`}
                d={`M ${LX},${ly} C ${CTRL_L},${ly} ${CTRL_L},${CY} ${CX},${CY}`}
                fill="none"
                stroke={CAT_COLORS[i]}
                strokeWidth={selected === i ? 2 : 1}
                strokeOpacity={selected === i ? 0.7 : 0.2}
                initial={prefersReducedMotion ? {} : { pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.09, ease: "easeInOut" }}
                style={{ transition: "stroke-opacity 0.2s, stroke-width 0.2s" }}
              />
            ))}

            {/* ── Curves: center → right ── */}
            {RIGHT_Y.map((ry, i) => (
              <motion.path
                key={`cr-${i}`}
                d={`M ${CX},${CY} C ${CTRL_R},${CY} ${CTRL_R},${ry} ${RX},${ry}`}
                fill="none"
                stroke={OUTPUT_COLOR}
                strokeWidth={1}
                strokeOpacity={0.2}
                initial={prefersReducedMotion ? {} : { pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.7, delay: 1.0 + i * 0.08, ease: "easeInOut" }}
              />
            ))}

            {/* ── Center node ── */}
            <motion.circle
              cx={CX} cy={CY} r={52}
              fill="var(--brand-blue)" fillOpacity={0.07}
              stroke="var(--brand-blue)" strokeWidth={1.5} strokeOpacity={0.35}
              initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            {["PULSE", "Platform"].map((txt, i) => (
              <motion.text
                key={txt}
                x={CX} y={CY - 6 + i * 18}
                textAnchor="middle"
                fontSize={i === 0 ? 15 : 9}
                fontWeight={i === 0 ? 600 : 400}
                fontFamily={i === 0 ? "Satoshi, sans-serif" : "'IBM Plex Mono', monospace"}
                fill="var(--brand-blue)"
                fillOpacity={i === 0 ? 0.9 : 0.45}
                letterSpacing={i === 1 ? "0.1em" : undefined}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.75 + i * 0.08 }}
              >
                {txt}
              </motion.text>
            ))}

            {/* ── Left nodes (clickable) ── */}
            {LEFT_Y.map((ly, i) => {
              const Icon = CAT_ICONS[i];
              const color = CAT_COLORS[i];
              const active = selected === i;
              const [line1, line2] = splitLabel(categories[i]?.name ?? "");
              return (
                <g
                  key={`ln-${i}`}
                  onClick={() => toggle(i)}
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={active}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(i)}
                >
                  <motion.circle
                    cx={LX} cy={ly} r={active ? 27 : 23}
                    fill={color} fillOpacity={active ? 0.18 : 0.1}
                    stroke={color} strokeWidth={active ? 2 : 1.5} strokeOpacity={active ? 0.9 : 0.5}
                    strokeDasharray={active ? "none" : "4 3"}
                    initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    style={{ transition: "r 0.15s, fill-opacity 0.15s, stroke-opacity 0.15s" }}
                  />
                  <foreignObject x={LX - 10} y={ly - 10} width={20} height={20}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20 }}>
                      <Icon size={13} style={{ color }} strokeWidth={1.8} />
                    </div>
                  </foreignObject>
                  {/* Label below node */}
                  <motion.text
                    x={LX} y={ly + 35}
                    textAnchor="middle"
                    fontSize={9}
                    fill={color}
                    fillOpacity={active ? 1 : 0.7}
                    fontFamily="'IBM Plex Mono', monospace"
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 + 0.25 }}
                    style={{ userSelect: "none" }}
                  >
                    <tspan x={LX} dy="0">{line1}</tspan>
                    {line2 && <tspan x={LX} dy="11">{line2}</tspan>}
                  </motion.text>
                </g>
              );
            })}

            {/* ── Right nodes ── */}
            {RIGHT_Y.map((ry, i) => {
              const Icon = OUTPUT_ICONS[i];
              return (
                <g key={`rn-${i}`}>
                  <motion.circle
                    cx={RX} cy={ry} r={23}
                    fill={OUTPUT_COLOR} fillOpacity={0.1}
                    stroke={OUTPUT_COLOR} strokeWidth={1.5} strokeOpacity={0.45}
                    initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
                  />
                  <foreignObject x={RX - 10} y={ry - 10} width={20} height={20}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20 }}>
                      <Icon size={13} style={{ color: OUTPUT_COLOR }} strokeWidth={1.8} />
                    </div>
                  </foreignObject>
                  <motion.text
                    x={RX + 34} y={ry + 4}
                    textAnchor="start"
                    fontSize={11}
                    fill={OUTPUT_COLOR}
                    fillOpacity={0.8}
                    fontFamily="'IBM Plex Mono', monospace"
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.1 + i * 0.08 + 0.2 }}
                    style={{ userSelect: "none" }}
                  >
                    {outputLabels[i]}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* ── Mobile layout ── */}
        <div className="flex md:hidden flex-col gap-2">
          <p className="text-[10px] uppercase tracking-[0.18em] mb-2" style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}>
            {inputHeader}
          </p>
          {categories.map((cat, i) => {
            const Icon = CAT_ICONS[i];
            const color = CAT_COLORS[i];
            const active = selected === i;
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className="flex items-center gap-3 text-left py-2.5 w-full"
                style={{ borderBottom: `1px solid ${color}20` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${color}${active ? "20" : "12"}`,
                    border: `1px solid ${color}${active ? "50" : "30"}`,
                  }}
                >
                  <Icon size={15} style={{ color }} strokeWidth={1.8} />
                </div>
                <span className="text-xs uppercase tracking-[0.14em]" style={{ color, fontFamily: "'IBM Plex Mono', monospace" }}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Detail panel (desktop + mobile) ── */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22 }}
              className="mt-5 rounded-2xl p-5 md:p-6"
              style={{
                backgroundColor: `${CAT_COLORS[selected]}08`,
                border: `1px solid ${CAT_COLORS[selected]}25`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs uppercase tracking-[0.18em] flex items-center gap-2"
                  style={{ color: CAT_COLORS[selected], fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: CAT_COLORS[selected] }} />
                  {categories[selected]?.name}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="text-xs transition-opacity hover:opacity-60 ml-4"
                  style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace", flexShrink: 0 }}
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories[selected]?.modules.map((m) => {
                  const Icon = MODULE_ICONS[m];
                  return (
                    <span
                      key={m}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                      style={{
                        backgroundColor: `${CAT_COLORS[selected]}12`,
                        color: "var(--ink)",
                        border: `1px solid ${CAT_COLORS[selected]}30`,
                      }}
                    >
                      {Icon && <Icon size={11} style={{ color: CAT_COLORS[selected] }} strokeWidth={1.8} />}
                      {m}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
