import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../../lib/hooks.js";

export default function TimelineDiagram() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const items = t.ueberUns?.timeline?.items ?? [];
  const count = items.length;
  if (count === 0) return null;

  return (
    <div ref={ref} className="w-full">
      {/* Desktop: horizontal */}
      <div className="hidden md:block relative">
        <div
          className="relative h-px mx-[7%] mb-0"
          style={{ backgroundColor: "var(--border)" }}
        >
          {!reduced && (
            <motion.div
              className="absolute inset-0 origin-left"
              style={{ backgroundColor: "var(--accent)", opacity: 0.55 }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          )}
        </div>

        <div
          className="grid mt-0"
          style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}
        >
          {items.map((item, i) => {
            const delay = reduced ? 0 : i * 0.18;
            const highlighted = item.highlighted;
            return (
              <div key={`${item.year}-${i}`} className="flex flex-col items-center">
                <motion.div
                  className="-mt-[9px] mb-6 flex-shrink-0 z-10 relative"
                  initial={reduced ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.35, delay: delay + 0.5 }}
                >
                  <div
                    className="rounded-full border-2 flex items-center justify-center"
                    style={{
                      width: highlighted ? 22 : 18,
                      height: highlighted ? 22 : 18,
                      backgroundColor: "var(--bg)",
                      borderColor: "var(--accent)",
                    }}
                  >
                    <div
                      className="rounded-full"
                      style={{
                        width: highlighted ? 10 : 8,
                        height: highlighted ? 10 : 8,
                        backgroundColor: "var(--accent)",
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center gap-2 px-3 text-center"
                  initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: delay + 0.65 }}
                >
                  <span
                    className="text-base font-semibold"
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'IBM Plex Mono', monospace",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.year}
                  </span>
                  <h3
                    className="text-sm leading-tight"
                    style={{
                      color: "var(--ink)",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 500,
                      maxWidth: 200,
                    }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--text-muted)", maxWidth: 200 }}
                    >
                      {item.description}
                    </p>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="flex md:hidden flex-col gap-0">
        <div className="relative flex flex-col gap-0">
          <div
            className="absolute left-[3.5rem] top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
          >
            {!reduced && (
              <motion.div
                className="absolute inset-0 origin-top"
                style={{ backgroundColor: "var(--accent)", opacity: 0.45 }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.0, ease: "easeInOut" }}
              />
            )}
          </div>
          {items.map((item, i) => (
            <motion.div
              key={`${item.year}-${i}`}
              initial={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex items-start gap-6 pb-10"
            >
              <span
                className="flex-shrink-0 w-14 text-sm text-right pt-0.5"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {item.year}
              </span>
              <motion.div
                className="flex-shrink-0 rounded-full mt-1.5 relative z-10"
                style={{
                  width: item.highlighted ? 14 : 12,
                  height: item.highlighted ? 14 : 12,
                  backgroundColor: "var(--accent)",
                }}
                initial={reduced ? { scale: 1 } : { scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
              />
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base mb-1"
                  style={{
                    color: "var(--ink)",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
