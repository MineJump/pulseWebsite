import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

export function TimelineDiagram() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const items = t.ueberUnsPage.timeline;
  const count = items.length;

  return (
    <div ref={ref} className="w-full">
      {/* Desktop: horizontal */}
      <div className="hidden md:block relative">
        {/* Connecting track */}
        <div className="relative h-px mx-[7%] mb-0" style={{ backgroundColor: "var(--border)" }}>
          {!prefersReducedMotion && (
            <motion.div
              className="absolute inset-0 origin-left"
              style={{ backgroundColor: "var(--accent)" }}
              initial={{ scaleX: 0, opacity: 0.5 }}
              animate={inView ? { scaleX: 1, opacity: 0.5 } : {}}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          )}
        </div>

        {/* Milestone nodes */}
        <div
          className="grid mt-0"
          style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}
        >
          {items.map((item, i) => {
            const delay = prefersReducedMotion ? 0 : i * 0.18;
            return (
              <div key={i} className="flex flex-col items-center">
                {/* Dot on the track */}
                <motion.div
                  className="-mt-[9px] mb-6 flex-shrink-0 z-10 relative"
                  initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.35, delay: delay + 0.5 }}
                >
                  <div
                    className="w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--bg)",
                      borderColor: "var(--accent)",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex flex-col items-center gap-2 px-3 text-center"
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: delay + 0.65 }}
                >
                  <span
                    className="text-lg font-semibold"
                    style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {item.year}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)", maxWidth: 200 }}
                  >
                    {item.event}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical (existing style, enhanced) */}
      <div className="flex md:hidden flex-col gap-0">
        <div className="relative flex flex-col gap-0">
          <div
            className="absolute left-[3.5rem] top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
          >
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 origin-top"
                style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.0, ease: "easeInOut" }}
              />
            )}
          </div>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex items-start gap-8 pb-10"
            >
              <span
                className="flex-shrink-0 w-14 text-sm text-right"
                style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {item.year}
              </span>
              <motion.div
                className="flex-shrink-0 w-3 h-3 rounded-full mt-1 relative z-10"
                style={{ backgroundColor: "var(--accent)" }}
                initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
              />
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {item.event}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
