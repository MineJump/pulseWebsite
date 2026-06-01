import { motion } from "framer-motion";

export default function MethodEyebrow({ text, variants }) {
  return (
    <motion.p
      variants={variants}
      className="text-sm uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2.5"
      style={{
        color: "var(--accent)",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <span
        aria-hidden="true"
        className="inline-block shrink-0 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
      {text}
    </motion.p>
  );
}

// Sizes: "sm" = 14 px (compact lists), "md" = 18 px (default), "lg" = 22 px
const CHECK_CONFIG = {
  sm: { px: 14, cx: 7,  cy: 7,  r: 6,  path: "M4.3 7.2L6.1 9L9.7 5.1",       sw: 1.3 },
  md: { px: 18, cx: 9,  cy: 9,  r: 8,  path: "M5.5 9.2L7.8 11.5L12.5 6.5",   sw: 1.4 },
  lg: { px: 22, cx: 11, cy: 11, r: 10, path: "M6.7 11.2L9.5 14L16.7 7.9",     sw: 1.6 },
};

export function CheckIcon({ size = "md", color = "var(--accent)" }) {
  const { px, cx, cy, r, path, sw } = CHECK_CONFIG[size] ?? CHECK_CONFIG.md;
  return (
    <span
      aria-hidden="true"
      className="shrink-0 inline-flex items-center justify-center mt-0.5"
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
