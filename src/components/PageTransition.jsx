import { useEffect } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../lib/motion.js";
import { usePrefersReducedMotion } from "../lib/hooks.js";

export default function PageTransition({ children }) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  if (reduced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.001 } }}
        exit={{ opacity: 0, transition: { duration: 0.001 } }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
    >
      {children}
    </motion.div>
  );
}
