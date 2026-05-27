import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { dur, ease } from "../lib/motion.js";
import { usePrefersReducedMotion } from "../lib/hooks.js";

const NODE_POSITIONS = {
  esm: { x: 8, y: 10, size: "md" },
  sensor: { x: 8, y: 30, size: "md" },
  wearable: { x: 8, y: 50, size: "md" },
  audio: { x: 8, y: 70, size: "md" },
  context: { x: 8, y: 90, size: "md" },
  plattform: { x: 50, y: 50, size: "lg" },
  jitai: { x: 92, y: 20, size: "md" },
  dashboard: { x: 92, y: 50, size: "md" },
  analyse: { x: 92, y: 80, size: "md" },
};

const EDGES = [
  ["esm", "plattform"],
  ["sensor", "plattform"],
  ["wearable", "plattform"],
  ["audio", "plattform"],
  ["context", "plattform"],
  ["plattform", "jitai"],
  ["plattform", "dashboard"],
  ["plattform", "analyse"],
];

const PLATTFORM_NODE_TAGS = ["Consent", "Ingest", "Compute", "Schema", "Audit"];

function ColumnLabel({ number, label, center, right }) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.22em] inline-flex items-baseline gap-2 ${
        center ? "justify-center" : right ? "justify-end" : ""
      }`}
      style={{
        color: "var(--text-dim)",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <span style={{ color: "var(--accent)" }}>{number}</span>
      <span>{label}</span>
    </p>
  );
}

function Edge({ from, to, active, reduced }) {
  // Side nodes: exit/enter from horizontal midpoint of their side.
  // Compute Engine (lg): connect straight to its center — lines go into the middle.
  const shrink = (a, b) => {
    if (a.size === "lg") return { x: a.x, y: a.y };
    const goingRight = b.x > a.x;
    return { x: goingRight ? a.x + 6 : a.x - 6, y: a.y };
  };
  const start = shrink(from, to);
  const end = shrink(to, from);
  const span = end.x - start.x;
  const c1x = start.x + span * 0.55;
  const c1y = start.y;
  const c2x = end.x - span * 0.55;
  const d = `M ${start.x} ${start.y} C ${c1x} ${c1y}, ${c2x} ${end.y}, ${end.x} ${end.y}`;
  return (
    <path
      d={d}
      fill="none"
      stroke={active ? "url(#pipeline-flow)" : "rgba(15, 13, 41, 0.26)"}
      strokeWidth={active ? 1.7 : 1.15}
      strokeLinecap="round"
      strokeDasharray="4 5"
      vectorEffect="non-scaling-stroke"
      markerEnd={active ? "url(#pipe-arrow-active)" : "url(#pipe-arrow)"}
      style={{
        transition:
          "stroke-width 220ms var(--ease-in-out-soft), stroke 220ms var(--ease-in-out-soft)",
        animation: reduced
          ? undefined
          : `pipeline-flow ${active ? "1.2s" : "2.6s"} linear infinite`,
      }}
    />
  );
}

function Node({ node, position, active, onActivate }) {
  const lg = position.size === "lg";
  const width = lg ? "w-[200px] md:w-[240px]" : "w-[150px] md:w-[170px]";
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`absolute focus-halo rounded-2xl ${width}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: lg ? 3 : 2,
      }}
      aria-label={`${node.label}: ${node.value}`}
    >
      <motion.div
        animate={active ? { scale: 1.03, y: lg ? 0 : -1 } : { scale: 1, y: 0 }}
        transition={{ duration: dur.fast, ease: ease.inOut }}
        className={`material-regular rounded-2xl text-left ${
          lg ? "p-4 md:p-5" : "p-3 md:p-3.5"
        }`}
        style={{
          border: active
            ? "1px solid rgba(255, 146, 66, 0.55)"
            : lg
              ? "1px solid rgba(255, 146, 66, 0.35)"
              : "1px solid var(--glass-regular-border)",
          boxShadow: active
            ? "var(--shadow-elev-3), inset 0 0 0 1px rgba(255, 146, 66, 0.25)"
            : lg
              ? "var(--shadow-elev-3), inset 0 0 0 1px rgba(255, 146, 66, 0.12)"
              : "var(--shadow-elev-2), var(--shadow-inset-hi)",
          backgroundImage: active
            ? "radial-gradient(90% 110% at 50% 0%, rgba(255, 146, 66, 0.14), transparent 72%)"
            : lg
              ? "radial-gradient(90% 110% at 50% 0%, rgba(255, 146, 66, 0.08), transparent 72%)"
              : undefined,
          transition:
            "border 220ms var(--ease-in-out-soft), box-shadow 220ms var(--ease-in-out-soft)",
        }}
      >
        <p
          className="text-[0.62rem] uppercase tracking-[0.2em] mb-2"
          style={{
            color: active ? "var(--accent)" : "var(--text-dim)",
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          {node.label}
        </p>
        <p
          className={`leading-tight ${lg ? "text-base md:text-lg" : "text-sm md:text-base"}`}
          style={{
            color: "var(--ink)",
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 500,
          }}
        >
          {node.value}
        </p>
        {lg && (
          <>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {PLATTFORM_NODE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.55rem] tracking-[0.14em] uppercase rounded-full px-2 py-1"
                  style={{
                    color: "var(--text-dim)",
                    background: "rgba(15, 13, 41, 0.05)",
                    border: "1px solid var(--border-soft)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p
              className="mt-3 text-[0.65rem] tracking-[0.14em]"
              style={{
                color: "var(--text-dim)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {node.badge}
            </p>
          </>
        )}
      </motion.div>
    </button>
  );
}

function MobileNodeColumn({ number, title, nodes, activeId, onSelect, highlighted }) {
  return (
    <section
      className="rounded-2xl p-4"
      style={{
        background: highlighted ? "var(--bg-elev)" : "transparent",
        border: highlighted
          ? "1px solid rgba(255, 146, 66, 0.22)"
          : "1px solid var(--border-soft)",
      }}
    >
      <p
        className="text-xs uppercase tracking-[0.22em] inline-flex items-baseline gap-2 mb-4"
        style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
      >
        <span style={{ color: "var(--accent)" }}>{number}</span>
        <span>{title}</span>
      </p>
      <div className={`grid gap-2 ${nodes.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
        {nodes.map((n) => {
          const isActive = activeId === n.id;
          return (
            <button
              key={n.id}
              type="button"
              onClick={() => onSelect(n.id)}
              className="text-left rounded-xl p-3 focus-halo"
              style={{
                background: isActive ? "rgba(255, 146, 66, 0.06)" : "var(--bg)",
                border: isActive
                  ? "1px solid rgba(255, 146, 66, 0.55)"
                  : "1px solid var(--border-soft)",
                transition:
                  "border 200ms var(--ease-in-out-soft), background 200ms var(--ease-in-out-soft)",
              }}
              aria-pressed={isActive}
              aria-label={`${n.label}: ${n.value}`}
            >
              <p
                className="text-[0.55rem] uppercase tracking-[0.18em] mb-1.5"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-dim)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {n.label}
              </p>
              <p
                className="text-sm leading-tight"
                style={{
                  color: "var(--ink)",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 500,
                }}
              >
                {n.value}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default function PlattformPipeline({ nodes, stageLabels, defaultNodeId }) {
  const reduced = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState(defaultNodeId);
  const wrapperRef = useRef(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const rotateX = useTransform(sy, [0, 1], [3.5, -3.5]);
  const rotateY = useTransform(sx, [0, 1], [-3.5, 3.5]);

  const onMouseMove = (e) => {
    if (reduced || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onMouseLeave = () => {
    if (reduced) return;
    mx.set(0.5);
    my.set(0.5);
    setActiveId(defaultNodeId);
  };

  const active = nodes.find((n) => n.id === activeId) ?? nodes[0];
  const captures = nodes.filter((n) => n.stage === "capture");
  const processes = nodes.filter((n) => n.stage === "process");
  const activates = nodes.filter((n) => n.stage === "activate");

  return (
    <div className="relative">
      <div className="lg:hidden flex flex-col gap-6">
        <MobileNodeColumn
          number="01"
          title={stageLabels.capture}
          nodes={captures}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <MobileNodeColumn
          number="02"
          title={stageLabels.process}
          nodes={processes}
          activeId={activeId}
          onSelect={setActiveId}
          highlighted
        />
        <MobileNodeColumn
          number="03"
          title={stageLabels.activate}
          nodes={activates}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>

      <div
        className="hidden lg:grid grid-cols-3 mb-6 max-w-[100%]"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <ColumnLabel number="01" label={stageLabels.capture} />
        <ColumnLabel number="02" label={stageLabels.process} center />
        <ColumnLabel number="03" label={stageLabels.activate} right />
      </div>

      <motion.div
        ref={wrapperRef}
        className="hidden lg:block relative w-full"
        style={{
          aspectRatio: "16 / 11",
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
          transformPerspective: 1400,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pipeline-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 146, 66, 0.55)" />
              <stop offset="100%" stopColor="rgba(255, 146, 66, 0.85)" />
            </linearGradient>
            <marker
              id="pipe-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              markerUnits="strokeWidth"
              orient="auto-start-reverse"
            >
              <path
                d="M1,1.5 L9,5 L1,8.5"
                fill="none"
                stroke="rgba(15,13,41,0.42)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
            <marker
              id="pipe-arrow-active"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              markerUnits="strokeWidth"
              orient="auto-start-reverse"
            >
              <path
                d="M1,1.5 L9,5 L1,8.5"
                fill="none"
                stroke="rgba(255,146,66,0.95)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>
          {EDGES.map(([fromId, toId]) => {
            const from = NODE_POSITIONS[fromId];
            const to = NODE_POSITIONS[toId];
            const isActive = activeId === fromId || activeId === toId;
            return (
              <Edge
                key={`${fromId}-${toId}`}
                from={from}
                to={to}
                active={isActive}
                reduced={reduced}
              />
            );
          })}
        </svg>
        {nodes.map((n) => {
          const pos = NODE_POSITIONS[n.id];
          if (!pos) return null;
          return (
            <Node
              key={n.id}
              node={n}
              position={pos}
              active={activeId === n.id}
              onActivate={() => setActiveId(n.id)}
            />
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={
            reduced
              ? { opacity: 1 }
              : { opacity: 0, y: 8, filter: "blur(4px)" }
          }
          animate={
            reduced
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: dur.base, ease: ease.out },
                }
          }
          exit={
            reduced
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: -4,
                  filter: "blur(4px)",
                  transition: { duration: dur.fast, ease: ease.out },
                }
          }
          className="mt-10 p-5 md:p-6 rounded-2xl"
          style={{
            background: "var(--bg-elev)",
            border: "1px solid var(--border-soft)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:gap-6 gap-3">
            <div className="md:w-[260px] flex-shrink-0">
              <p
                className="inline-flex items-baseline gap-2 text-xs uppercase tracking-[0.18em]"
                style={{
                  color: "var(--text-dim)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                <span style={{ color: "var(--accent)" }}>→</span>
                <span
                  style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {active.value}
                </span>
                <span aria-hidden="true">·</span>
                <span>{active.label}</span>
              </p>
            </div>
            <p
              className="flex-1 text-sm md:text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {active.description}
            </p>
            <div className="md:flex-shrink-0">
              <span
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs material-thin whitespace-nowrap"
                style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {active.badge}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
