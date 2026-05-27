import { useState } from "react";
import { motion } from "framer-motion";
import { dur, ease } from "../lib/motion.js";

export default function BackLink({ href, children }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] focus-halo"
      style={{
        color: hover ? "var(--ink)" : "var(--text-dim)",
        fontFamily: "'IBM Plex Mono', monospace",
        transition: `color ${dur.fast}s var(--ease-in-out-soft)`,
      }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full pointer-events-none material-thin"
        initial={false}
        animate={hover ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
        transition={{ duration: dur.fast, ease: ease.inOut }}
      />
      <motion.span
        aria-hidden="true"
        className="relative z-[1] inline-block"
        initial={false}
        animate={hover ? { x: -3 } : { x: 0 }}
        transition={{ duration: dur.fast, ease: ease.inOut }}
      >
        ←
      </motion.span>
      <span className="relative z-[1]">{children}</span>
    </a>
  );
}
