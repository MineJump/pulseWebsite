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

// Diagram coordinates in percent (viewBox 0..100). HTML chips and SVG share these coords.
const LX = 8;   // input column x
const RX = 92;  // output column x
const CX = 50;  // center x
const CY = 50;  // center y

// 5 input rows, evenly spaced
const LEFT_Y  = [12, 31, 50, 69, 88];
// 4 output rows, evenly spaced
const RIGHT_Y = [16, 38.7, 61.3, 84];

// Bezier horizontal control offset (in % of width)
const BEND = 18;

const CHIP_OFFSET_PX = 30; // (padding-left 12) + (circle radius 18)

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
    setSelected((s) => (s === i ? null : i));
  }

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
      <div ref={ref} className="max-w-[1100px] mx-auto">

        {/* Section headers (desktop only) */}
        <div className="hidden md:flex justify-between mb-5 px-4">
          <span className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}>
            {inputHeader}
          </span>
          <span className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}>
            {outputHeader}
          </span>
        </div>

        {/* ─────────── Desktop diagram ─────────── */}
        <div className="hidden md:block relative" style={{ aspectRatio: "12 / 5", minHeight: 360 }}>

          {/* SVG lines layer (behind chips) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Input → Center */}
            {LEFT_Y.map((ly, i) => {
              const active = selected === i;
              return (
                <motion.path
                  key={`lc-${i}`}
                  d={`M ${LX} ${ly} C ${LX + BEND} ${ly}, ${CX - BEND} ${CY}, ${CX} ${CY}`}
                  fill="none"
                  stroke={CAT_COLORS[i]}
                  strokeWidth={active ? 1.8 : 1}
                  strokeOpacity={active ? 0.75 : 0.18}
                  vectorEffect="non-scaling-stroke"
                  initial={prefersReducedMotion ? {} : { pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: "easeInOut" }}
                  style={{ transition: "stroke-opacity 0.2s, stroke-width 0.2s" }}
                />
              );
            })}
            {/* Center → Output */}
            {RIGHT_Y.map((ry, i) => (
              <motion.path
                key={`cr-${i}`}
                d={`M ${CX} ${CY} C ${CX + BEND} ${CY}, ${RX - BEND} ${ry}, ${RX} ${ry}`}
                fill="none"
                stroke={OUTPUT_COLOR}
                strokeWidth={1}
                strokeOpacity={0.2}
                vectorEffect="non-scaling-stroke"
                initial={prefersReducedMotion ? {} : { pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.95 + i * 0.08, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* Input chips */}
          {LEFT_Y.map((ly, i) => {
            const Icon = CAT_ICONS[i];
            const color = CAT_COLORS[i];
            const active = selected === i;
            return (
              <div
                key={`in-${i}`}
                className="absolute z-10"
                style={{
                  left: `${LX}%`,
                  top: `${ly}%`,
                  transform: `translate(-${CHIP_OFFSET_PX}px, -50%)`,
                }}
              >
                <motion.button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={active}
                  initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl whitespace-nowrap focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    backgroundColor: active ? `${color}1a` : "var(--bg)",
                    border: `1px solid ${active ? color : `${color}55`}`,
                    boxShadow: active ? `0 0 0 4px ${color}14` : "0 1px 2px rgba(15,13,41,0.04)",
                    transition: "background-color 0.18s, border-color 0.18s, box-shadow 0.18s",
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      backgroundColor: `${color}1f`,
                      border: `1.5px solid ${color}55`,
                    }}
                  >
                    <Icon size={16} style={{ color }} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-medium text-left" style={{ color: "var(--ink)" }}>
                    {categories[i]?.name}
                  </span>
                </motion.button>
              </div>
            );
          })}

          {/* Center node */}
          <motion.div
            className="absolute z-20 flex flex-col items-center justify-center rounded-full"
            style={{
              left: `${CX}%`,
              top: `${CY}%`,
              width: 128,
              height: 128,
              transform: "translate(-50%, -50%)",
              backgroundColor: "var(--bg)",
              border: "1px solid var(--brand-blue)",
              boxShadow: "0 8px 32px rgba(13,35,66,0.10), 0 0 0 6px rgba(13,35,66,0.04)",
            }}
            initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span
              className="text-base font-semibold"
              style={{ color: "var(--brand-blue)", letterSpacing: "0.04em" }}
            >
              PULSE
            </span>
            <span
              className="text-[10px] uppercase mt-0.5"
              style={{ color: "var(--brand-blue)", opacity: 0.55, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.16em" }}
            >
              Platform
            </span>
          </motion.div>

          {/* Output chips */}
          {RIGHT_Y.map((ry, i) => {
            const Icon = OUTPUT_ICONS[i];
            return (
              <div
                key={`out-${i}`}
                className="absolute z-10"
                style={{
                  right: `${100 - RX}%`,
                  top: `${ry}%`,
                  transform: `translate(${CHIP_OFFSET_PX}px, -50%)`,
                }}
              >
                <motion.div
                  initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.0 + i * 0.08 }}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: `1px solid ${OUTPUT_COLOR}45`,
                    boxShadow: "0 1px 2px rgba(15,13,41,0.04)",
                  }}
                >
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                    {outputLabels[i]}
                  </span>
                  <span
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      backgroundColor: `${OUTPUT_COLOR}1f`,
                      border: `1.5px solid ${OUTPUT_COLOR}55`,
                    }}
                  >
                    <Icon size={16} style={{ color: OUTPUT_COLOR }} strokeWidth={2} />
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ─────────── Mobile layout ─────────── */}
        <div className="md:hidden">
          <p
            className="text-[10px] uppercase tracking-[0.18em] mb-3"
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {inputHeader}
          </p>
          <div className="flex flex-col gap-2">
            {categories.map((cat, i) => {
              const Icon = CAT_ICONS[i];
              const color = CAT_COLORS[i];
              const active = selected === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={active}
                  className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl transition-all"
                  style={{
                    backgroundColor: active ? `${color}15` : "var(--bg)",
                    border: `1px solid ${active ? color : `${color}40`}`,
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      backgroundColor: `${color}1f`,
                      border: `1.5px solid ${color}55`,
                    }}
                  >
                    <Icon size={16} style={{ color }} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center connector */}
          <div className="flex flex-col items-center my-5">
            <div className="w-px h-6" style={{ backgroundColor: "var(--border)" }} />
            <div
              className="rounded-full px-4 py-2"
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--brand-blue)",
              }}
            >
              <span className="text-xs font-semibold" style={{ color: "var(--brand-blue)" }}>
                PULSE
              </span>
              <span
                className="text-[9px] uppercase ml-1.5"
                style={{ color: "var(--brand-blue)", opacity: 0.5, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.16em" }}
              >
                Platform
              </span>
            </div>
            <div className="w-px h-6" style={{ backgroundColor: "var(--border)" }} />
          </div>

          <p
            className="text-[10px] uppercase tracking-[0.18em] mb-3"
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {outputHeader}
          </p>
          <div className="flex flex-col gap-2">
            {outputLabels.map((label, i) => {
              const Icon = OUTPUT_ICONS[i];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: `1px solid ${OUTPUT_COLOR}40`,
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      backgroundColor: `${OUTPUT_COLOR}1f`,
                      border: `1.5px solid ${OUTPUT_COLOR}55`,
                    }}
                  >
                    <Icon size={16} style={{ color: OUTPUT_COLOR }} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────── Detail panel ─────────── */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.22 }}
              className="mt-6 rounded-2xl p-5 md:p-6"
              style={{
                backgroundColor: `${CAT_COLORS[selected]}0a`,
                border: `1px solid ${CAT_COLORS[selected]}30`,
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
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="text-xs transition-opacity hover:opacity-60"
                  style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
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
                        backgroundColor: `${CAT_COLORS[selected]}14`,
                        color: "var(--ink)",
                        border: `1px solid ${CAT_COLORS[selected]}35`,
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
