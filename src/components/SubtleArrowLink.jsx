import { useState } from "react";
import { motion } from "framer-motion";
import { dur, ease } from "../lib/motion.js";

export default function SubtleArrowLink({ href, label, className = "" }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className={`relative inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] focus-halo rounded-sm py-1 ${className}`}
      style={{
        color: hover ? "var(--accent)" : "var(--ink)",
        fontFamily: "'IBM Plex Mono', monospace",
        transition: `color ${dur.fast}s var(--ease-in-out-soft)`,
      }}
    >
      <span>{label}</span>
      <motion.span
        aria-hidden="true"
        animate={{ x: hover ? 4 : 0 }}
        transition={{ duration: dur.fast, ease: ease.inOut }}
      >
        →
      </motion.span>
    </a>
  );
}
