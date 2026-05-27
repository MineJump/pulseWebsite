import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";

export default function SimpleSection({
  eyebrow,
  title,
  intro,
  children,
  bg = "var(--bg)",
  className = "",
}) {
  const reduced = usePrefersReducedMotion();
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.07, 0.05);
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;

  return (
    <section
      className={`relative w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 ${className}`}
      style={{ background: bg }}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {eyebrow && (
            <motion.p
              variants={item}
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
              {eyebrow}
            </motion.p>
          )}
          {title && (
            <motion.h2 variants={item} className="mb-6 max-w-[900px]">
              {title}
            </motion.h2>
          )}
          {intro && (
            <motion.p
              variants={item}
              className="text-base md:text-lg leading-relaxed max-w-[820px] mb-12"
              style={{ color: "var(--text-muted)" }}
            >
              {intro}
            </motion.p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
