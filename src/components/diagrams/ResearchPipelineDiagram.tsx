import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Radio, MessageSquare, Zap, BarChart2, Download } from "lucide-react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

const STEPS = [
  {
    icon: Radio,
    sectionId: "beobachten",
    color: "#FF9242",
    bg: "rgba(255,146,66,0.10)",
  },
  {
    icon: MessageSquare,
    sectionId: "befragen",
    color: "#43C6AC",
    bg: "rgba(67,198,172,0.10)",
  },
  {
    icon: Zap,
    sectionId: "intervenieren",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.10)",
  },
  {
    icon: BarChart2,
    sectionId: "analysieren",
    color: "#0D2342",
    bg: "rgba(13,35,66,0.10)",
  },
  {
    icon: Download,
    sectionId: null,
    color: "#191645",
    bg: "rgba(25,22,69,0.08)",
  },
];

const LABELS_DE = ["Passive Sensing", "ESM / EMA", "Interventionen", "Analyse", "Export"];
const LABELS_EN = ["Passive Sensing", "ESM / EMA", "Interventions", "Analysis", "Export"];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ResearchPipelineDiagram() {
  const { language } = useTranslation();
  const labels = language === "de" ? LABELS_DE : LABELS_EN;
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="w-full max-w-[1000px] mx-auto">
      {/* Desktop flow */}
      <div className="hidden md:flex items-center justify-between gap-0 relative">
        {/* Connecting line behind nodes */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none" aria-hidden="true">
          <div className="w-full h-px" style={{ backgroundColor: "var(--border)" }}>
            {!prefersReducedMotion && (
              <motion.div
                className="h-full origin-left"
                style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            )}
          </div>
        </div>

        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const isClickable = step.sectionId !== null;
          return (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : i * 0.12 }}
              className={`relative z-10 flex flex-col items-center gap-3 ${isClickable ? "cursor-pointer group" : ""}`}
              onClick={() => isClickable && step.sectionId && scrollToSection(step.sectionId)}
              role={isClickable ? "button" : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onKeyDown={(e) => {
                if (isClickable && step.sectionId && (e.key === "Enter" || e.key === " ")) {
                  scrollToSection(step.sectionId);
                }
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:shadow-md"
                style={{ backgroundColor: step.bg, border: `1.5px solid ${step.color}30` }}
              >
                <Icon size={22} style={{ color: step.color }} strokeWidth={1.5} />
              </div>
              <span
                className="text-xs font-medium text-center leading-tight whitespace-nowrap"
                style={{
                  color: isClickable ? step.color : "var(--text-muted)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {labels[i]}
              </span>
              {isClickable && (
                <span
                  className="absolute -bottom-5 text-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-200"
                  style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  ↓
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile flow (vertical) */}
      <div className="flex md:hidden flex-col gap-0">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          const isClickable = step.sectionId !== null;
          const isLast = i === STEPS.length - 1;
          return (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${isClickable ? "cursor-pointer" : ""}`}
                  style={{ backgroundColor: step.bg, border: `1.5px solid ${step.color}30` }}
                  onClick={() => isClickable && step.sectionId && scrollToSection(step.sectionId)}
                >
                  <Icon size={18} style={{ color: step.color }} strokeWidth={1.5} />
                </div>
                {!isLast && (
                  <div className="w-px flex-1 my-1" style={{ backgroundColor: "var(--border)", minHeight: "1.5rem" }} />
                )}
              </div>
              <div className="pt-2.5 pb-4">
                <span
                  className="text-xs font-medium"
                  style={{
                    color: isClickable ? step.color : "var(--text-muted)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {labels[i]}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
