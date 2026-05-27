import { useState } from "react";
import { motion } from "framer-motion";
import { dur, ease } from "../lib/motion.js";

const SENSOR_LABELS = [
  { name: "gps", x: 22, y: 22, opacity: 0.55 },
  { name: "app", x: 50, y: 14, opacity: 0.5 },
  { name: "accel", x: 38, y: 28, opacity: 0.6 },
  { name: "wifi_rssi", x: 8, y: 34, opacity: 0.4 },
  { name: "screen", x: 34, y: 42, opacity: 0.55 },
  { name: "esm", x: 18, y: 52, opacity: 0.5 },
  { name: "audio", x: 50, y: 56, opacity: 0.45 },
  { name: "sleep", x: 12, y: 68, opacity: 0.55 },
  { name: "hrv", x: 42, y: 82, opacity: 0.5 },
];

const PROCESSING_DOTS = [
  { x: 50, y: 14, size: 4, active: false, delay: 0 },
  { x: 56, y: 18, size: 5, active: false, delay: 0.4 },
  { x: 48, y: 22, size: 4.5, active: true, delay: 0.8 },
  { x: 54, y: 26, size: 4, active: false, delay: 0.2 },
  { x: 50, y: 30, size: 6, active: false, delay: 0.6 },
  { x: 58, y: 34, size: 4.5, active: false, delay: 1 },
  { x: 46, y: 38, size: 5, active: true, delay: 0.3 },
  { x: 52, y: 42, size: 4, active: false, delay: 0.7 },
  { x: 56, y: 46, size: 5.5, active: false, delay: 0.1 },
  { x: 50, y: 50, size: 4.5, active: false, delay: 0.5 },
  { x: 54, y: 54, size: 5, active: true, delay: 0.9 },
  { x: 48, y: 58, size: 4, active: false, delay: 0.4 },
  { x: 56, y: 62, size: 5.5, active: false, delay: 0.8 },
  { x: 50, y: 66, size: 4.5, active: false, delay: 0.2 },
  { x: 54, y: 70, size: 4, active: true, delay: 0.6 },
  { x: 46, y: 74, size: 5, active: false, delay: 1 },
  { x: 52, y: 78, size: 4.5, active: false, delay: 0.3 },
  { x: 56, y: 82, size: 4, active: false, delay: 0.7 },
];

const FEATURE_LABELS = [
  { name: "mobility_radius_km", value: "3.8", y: 17 },
  { name: "sleep_onset", value: "23:48", y: 35 },
  { name: "screen_minutes", value: "184", y: 53 },
  { name: "affect_negative", value: "2.4", y: 71 },
];

const PARTICLES = [
  { sx: 22, sy: 22, ey: 17, dur: 3.2, delay: 0, size: 8 },
  { sx: 50, sy: 14, ey: 35, dur: 3.4, delay: 0.5, size: 9 },
  { sx: 38, sy: 28, ey: 53, dur: 3, delay: 1, size: 8 },
  { sx: 8, sy: 34, ey: 71, dur: 3.6, delay: 1.5, size: 9 },
  { sx: 18, sy: 52, ey: 17, dur: 3.2, delay: 2, size: 8 },
  { sx: 42, sy: 82, ey: 35, dur: 3.4, delay: 2.5, size: 9 },
  { sx: 50, sy: 56, ey: 53, dur: 3, delay: 3, size: 8 },
  { sx: 12, sy: 68, ey: 71, dur: 3.2, delay: 3.5, size: 8 },
];

function SensorLabel({ label, reduced }) {
  return (
    <motion.span
      className="absolute text-[0.7rem]"
      style={{
        left: `${label.x}%`,
        top: `${label.y}%`,
        color: "var(--text-dim)",
        fontFamily: "'IBM Plex Mono', monospace",
        opacity: label.opacity,
      }}
      animate={reduced ? undefined : { opacity: [label.opacity, label.opacity * 1.4, label.opacity] }}
      transition={
        reduced
          ? undefined
          : {
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }
      }
    >
      {label.name}
    </motion.span>
  );
}

function ProcessingDot({ dot, reduced }) {
  const baseOpacity = dot.active ? 0.9 : 0.45;
  const baseColor = dot.active ? "var(--accent)" : "rgba(13, 35, 66, 0.55)";
  return (
    <motion.span
      aria-hidden="true"
      className="absolute rounded-full"
      style={{
        left: `${dot.x}%`,
        top: `${dot.y}%`,
        width: dot.size,
        height: dot.size,
        background: baseColor,
        boxShadow: dot.active ? "0 0 0 4px rgba(255, 146, 66, 0.12)" : undefined,
        opacity: baseOpacity,
      }}
      animate={
        reduced
          ? undefined
          : {
              scale: dot.active ? [1, 1.25, 1] : [1, 1.1, 1],
              opacity: [baseOpacity, baseOpacity * 1.3, baseOpacity],
            }
      }
      transition={
        reduced
          ? undefined
          : {
              duration: 2.4 + dot.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: dot.delay,
            }
      }
    />
  );
}

function PipelineLine({ reduced }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        left: "59%",
        top: "8%",
        bottom: "8%",
        width: 1,
        height: "84%",
        zIndex: 2,
      }}
      viewBox="0 0 1 100"
      preserveAspectRatio="none"
    >
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="100"
        stroke="rgba(255, 146, 66, 0.5)"
        strokeWidth="1"
        strokeDasharray="3 3"
        vectorEffect="non-scaling-stroke"
        style={reduced ? undefined : { animation: "pipeline-flow 1.6s linear infinite" }}
      />
    </svg>
  );
}

function FeatureRow({ feature, index, reduced }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="absolute inset-x-0 material-thin"
      style={{
        top: `${feature.y}%`,
        transform: "translateY(-50%)",
        borderRadius: 12,
        padding: "10px 14px",
        cursor: "default",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={reduced ? false : { opacity: 0, x: 10 }}
      animate={
        reduced
          ? { opacity: 1, x: 0 }
          : {
              opacity: 1,
              x: hover ? -2 : 0,
              transition: { duration: dur.fast, ease: ease.inOut },
            }
      }
      transition={reduced ? undefined : { duration: 0.6, ease: "easeOut", delay: 0.2 + index * 0.12 }}
    >
      <p
        className="text-[0.55rem] uppercase tracking-[0.22em] mb-1"
        style={{
          color: hover ? "var(--accent)" : "var(--text-dim)",
          fontFamily: "'IBM Plex Mono', monospace",
          transition: `color ${dur.fast}s var(--ease-in-out-soft)`,
        }}
      >
        Feature
      </p>
      <p
        className="text-[0.85rem] flex items-baseline justify-between gap-2"
        style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--ink)" }}
      >
        <span style={{ wordBreak: "break-word" }}>{feature.name}</span>
        <span style={{ color: "var(--accent)", fontWeight: 500, whiteSpace: "nowrap" }}>
          {feature.value}
        </span>
      </p>
    </motion.div>
  );
}

function Particle({ p, reduced }) {
  if (reduced) return null;
  const midX = 52;
  const midY = (p.sy + p.ey) / 2;
  const endX = 78;
  return (
    <motion.span
      aria-hidden="true"
      className="absolute rounded-full pointer-events-none"
      style={{
        width: p.size,
        height: p.size,
        background: "rgba(255, 146, 66, 0.72)",
        boxShadow: "0 0 6px rgba(255, 146, 66, 0.38), 0 0 14px rgba(255, 146, 66, 0.18)",
        left: `${p.sx}%`,
        top: `${p.sy}%`,
        zIndex: 4,
      }}
      animate={{
        left: [`${p.sx}%`, `${midX}%`, `${endX}%`, `${endX}%`],
        top: [`${p.sy}%`, `${midY}%`, `${p.ey}%`, `${p.ey}%`],
        opacity: [0.55, 0.78, 0.65, 0],
        scale: [0.8, 1.1, 0.7, 0.15],
      }}
      transition={{
        duration: p.dur,
        times: [0, 0.35, 0.78, 0.92],
        repeat: Infinity,
        repeatDelay: 0.6,
        delay: p.delay,
        ease: "easeIn",
      }}
    />
  );
}

export default function UspPipelineDiagram({ labels, reduced }) {
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "16 / 9", minHeight: 360 }}
      role="img"
      aria-label="PULSE pipeline: raw sensor data to validated behavioural features"
    >
      <div className="absolute inset-x-0 top-0 grid grid-cols-12 px-1 items-center">
        <span
          className="col-span-4 text-[0.62rem] uppercase tracking-[0.22em] text-center"
          style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {labels.rawLabel}
        </span>
        <div className="col-span-3 flex items-center justify-center">
          <span
            className="text-[0.6rem] uppercase tracking-[0.15em]"
            style={{
              color: "var(--accent)",
              fontFamily: "'IBM Plex Mono', monospace",
              border: "1px solid rgba(255, 146, 66, 0.45)",
              borderRadius: 9999,
              padding: "3px 10px",
              background: "rgba(255, 146, 66, 0.07)",
            }}
          >
            {labels.pipelineLabel}
          </span>
        </div>
        <div className="col-span-5 flex items-center justify-start pl-3">
          <span
            className="text-[0.6rem] uppercase tracking-[0.15em]"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'IBM Plex Mono', monospace",
              border: "1px solid var(--border-strong)",
              borderRadius: 9999,
              padding: "3px 10px",
              background: "rgba(15, 13, 41, 0.04)",
            }}
          >
            {labels.insightLabel}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 mt-7">
        {SENSOR_LABELS.map((l) => (
          <SensorLabel key={l.name} label={l} reduced={reduced} />
        ))}
        {PROCESSING_DOTS.map((d, i) => (
          <ProcessingDot key={i} dot={d} reduced={reduced} />
        ))}
        <PipelineLine reduced={reduced} />
        {PARTICLES.map((p, i) => (
          <Particle key={i} p={p} reduced={reduced} />
        ))}
        <div className="absolute top-0 bottom-0" style={{ left: "60%", right: "1%" }}>
          {FEATURE_LABELS.map((f, i) => (
            <FeatureRow key={f.name} feature={f} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </div>
  );
}
