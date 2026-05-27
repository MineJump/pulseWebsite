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
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
      {text}
    </motion.p>
  );
}

export function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="shrink-0 inline-flex items-center justify-center mt-0.5"
      style={{ width: 18, height: 18 }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="var(--accent)" strokeWidth="1" fill="none" />
        <path
          d="M5.5 9.2L7.8 11.5L12.5 6.5"
          stroke="var(--accent)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
