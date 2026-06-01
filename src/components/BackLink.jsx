import { motion } from "framer-motion";
import { cardHover } from "../lib/motion.js";

export default function BackLink({ href, children }) {
  return (
    <motion.a
      href={href}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] focus-halo material-regular"
      style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
      variants={cardHover}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="press"
    >
      <span aria-hidden="true">←</span>
      <span>{children}</span>
    </motion.a>
  );
}
