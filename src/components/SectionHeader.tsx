import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, heading, intro, align = "left" }: SectionHeaderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-[780px] mb-14 md:mb-20 ${alignClass}`}>
      {eyebrow && (
        <motion.p
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.2em] mb-5 inline-flex items-center gap-2"
          style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={initial}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {heading}
      </motion.h2>
      {intro && (
        <motion.p
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed max-w-[620px]"
          style={{ color: "var(--text-muted)" }}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
