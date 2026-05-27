import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
export default function PageHero({ eyebrow, title, intro, align = "left" }) {
  const reduced = usePrefersReducedMotion();
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.08, 0.05);
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;

  const alignCls =
    align === "center" ? "text-center mx-auto items-center" : "items-start";

  return (
    <section className="relative w-full overflow-hidden pt-10 md:pt-16 pb-12 md:pb-18 section-fade-bottom">
      <motion.div
        className={`relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col ${alignCls}`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-sm uppercase tracking-[0.22em] mb-7 inline-flex items-center gap-2.5"
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
        <motion.h1 variants={item} className="max-w-[860px] whitespace-pre-line">
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            variants={item}
            className={`mt-7 text-lg md:text-xl leading-relaxed max-w-[680px] ${align === "center" ? "mx-auto" : ""}`}
            style={{ color: "var(--text-muted)" }}
          >
            {intro}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
