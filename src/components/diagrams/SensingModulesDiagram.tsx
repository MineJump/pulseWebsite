import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Smartphone } from "lucide-react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

const CATEGORY_COLORS = ["#FF9242", "#43C6AC", "#0D2342", "#8B5CF6", "#4B6BFB"];

const CX = 400;
const CY = 300;
const CAT_R = 165;
const MOD_R = 265;

// Angles for 5 category spokes (evenly distributed, starting from top)
const CAT_ANGLES = [-90, -18, 54, 126, 198].map((d) => (d * Math.PI) / 180);

// Module counts per category: 3, 3, 3, 2, 3
const MODULE_OFFSETS = [
  [-30, 0, 30],
  [-30, 0, 30],
  [-30, 0, 30],
  [-20, 20],
  [-30, 0, 30],
].map((offsets) => offsets.map((d) => (d * Math.PI) / 180));

function polarToXY(cx: number, cy: number, r: number, angle: number) {
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

interface TooltipState {
  label: string;
  x: number;
  y: number;
}

export function SensingModulesDiagram() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-100px" });
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);

  const categories = t.methodenPage.sensingCategories;

  return (
    <div ref={wrapRef} className="w-full">
      <svg
        ref={ref}
        viewBox="0 0 800 600"
        className="w-full max-w-[680px] mx-auto block"
        style={{ overflow: "visible" }}
        aria-label="Sensing Module Taxonomy"
      >
        {categories.map((cat, ci) => {
          const catAngle = CAT_ANGLES[ci];
          const catPos = polarToXY(CX, CY, CAT_R, catAngle);
          const color = CATEGORY_COLORS[ci];
          const isHovered = hoveredCat === ci;

          return (
            <g key={ci}>
              {/* Spoke from center to category */}
              <motion.line
                x1={CX}
                y1={CY}
                x2={catPos.x}
                y2={catPos.y}
                stroke={color}
                strokeWidth={1.5}
                strokeOpacity={isHovered ? 0.7 : 0.3}
                initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.1 }}
              />

              {/* Category module lines & nodes */}
              {cat.modules.map((mod, mi) => {
                const modAngleOffset = MODULE_OFFSETS[ci][mi];
                const modAngle = catAngle + modAngleOffset;
                const modPos = polarToXY(CX, CY, MOD_R, modAngle);

                return (
                  <g key={mi}>
                    <motion.line
                      x1={catPos.x}
                      y1={catPos.y}
                      x2={modPos.x}
                      y2={modPos.y}
                      stroke={color}
                      strokeWidth={1}
                      strokeOpacity={isHovered ? 0.5 : 0.2}
                      initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.5, delay: ci * 0.1 + mi * 0.07 + 0.3 }}
                    />
                    <motion.circle
                      cx={modPos.x}
                      cy={modPos.y}
                      r={isHovered ? 6 : 5}
                      fill={color}
                      fillOpacity={isHovered ? 0.9 : 0.55}
                      initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.35, delay: ci * 0.1 + mi * 0.07 + 0.55 }}
                      style={{ cursor: "default" }}
                      onMouseEnter={() => setTooltip({ label: mod, x: modPos.x, y: modPos.y })}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  </g>
                );
              })}

              {/* Category node */}
              <motion.circle
                cx={catPos.x}
                cy={catPos.y}
                r={isHovered ? 22 : 18}
                fill={color}
                fillOpacity={isHovered ? 0.2 : 0.12}
                stroke={color}
                strokeWidth={isHovered ? 2 : 1.5}
                strokeOpacity={isHovered ? 0.9 : 0.5}
                initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: ci * 0.1 + 0.2 }}
                style={{ cursor: "default", transition: "r 0.15s, fill-opacity 0.15s, stroke-opacity 0.15s" }}
                onMouseEnter={() => setHoveredCat(ci)}
                onMouseLeave={() => setHoveredCat(null)}
              />

              {/* Category label */}
              <motion.text
                x={catPos.x}
                y={catPos.y + (catPos.y > CY + 20 ? 36 : catPos.y < CY - 20 ? -28 : 0)}
                textAnchor={catPos.x < CX - 20 ? "end" : catPos.x > CX + 20 ? "start" : "middle"}
                dy={catPos.y >= CY - 20 && catPos.y <= CY + 20 ? (catPos.x < CX ? "0.35em" : "0.35em") : "0.35em"}
                fontSize={11}
                fontFamily="'IBM Plex Mono', monospace"
                fill={color}
                fillOpacity={isHovered ? 1 : 0.75}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: ci * 0.1 + 0.4 }}
                style={{ userSelect: "none", pointerEvents: "none" }}
              >
                {cat.name}
              </motion.text>
            </g>
          );
        })}

        {/* Center node */}
        <motion.circle
          cx={CX}
          cy={CY}
          r={38}
          fill="var(--brand-blue)"
          fillOpacity={0.08}
          stroke="var(--brand-blue)"
          strokeWidth={1.5}
          strokeOpacity={0.3}
          initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        />
        <motion.foreignObject
          x={CX - 14}
          y={CY - 14}
          width={28}
          height={28}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center justify-center w-7 h-7">
            <Smartphone size={20} style={{ color: "var(--brand-blue)" }} strokeWidth={1.5} />
          </div>
        </motion.foreignObject>

        {/* Tooltip */}
        {tooltip && (
          <g>
            <rect
              x={tooltip.x - 60}
              y={tooltip.y - 32}
              width={120}
              height={22}
              rx={6}
              fill="var(--brand-blue)"
              fillOpacity={0.92}
            />
            <text
              x={tooltip.x}
              y={tooltip.y - 17}
              textAnchor="middle"
              fontSize={10}
              fontFamily="'IBM Plex Mono', monospace"
              fill="white"
              style={{ userSelect: "none", pointerEvents: "none" }}
            >
              {tooltip.label}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
