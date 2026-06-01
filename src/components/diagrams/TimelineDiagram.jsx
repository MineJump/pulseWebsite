import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../../lib/hooks.js";

const DOT_SIZE = 18;
const DOT_INNER = 8;

export default function TimelineDiagram() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = t.ueberUns?.timeline?.items ?? [];
  const count = items.length;
  if (count === 0) return null;

  const vis = reduced || inView;

  return (
    <div className="w-full" ref={ref}>
      {/* Desktop: horizontal */}
      <div className="hidden md:block relative">
        <div
          className="relative h-px mx-[7%]"
          style={{ backgroundColor: "var(--border)" }}
        >
          {!reduced && (
            <motion.div
              className="absolute inset-0 origin-left"
              style={{ backgroundColor: "var(--accent)", opacity: 0.55 }}
              animate={{ scaleX: vis ? 1 : 0 }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          )}
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${count}, 1fr)`,
            gridTemplateRows: "auto auto auto 1fr",
          }}
        >
          {items.map((item, i) => {
            const delay = reduced ? 0 : i * 0.18;
            const dot = {
              animate: { scale: vis ? 1 : 0, opacity: vis ? 1 : 0 },
              initial: { scale: 0, opacity: 0 },
              transition: { duration: 0.35, delay: delay + 0.5 },
            };
            const fade = {
              animate: { opacity: vis ? 1 : 0, y: vis ? 0 : 10 },
              initial: { opacity: 0, y: 10 },
              transition: { duration: 0.45, delay: delay + 0.65 },
            };

            return (
              <div
                key={`${item.year}-${i}`}
                style={{ display: "grid", gridTemplateRows: "subgrid", gridRow: "span 4" }}
              >
                {/* Dot */}
                <motion.div className="flex justify-center -mt-[9px] z-10 relative" {...dot}>
                  <div
                    className="rounded-full border-2 flex items-center justify-center"
                    style={{
                      width: DOT_SIZE,
                      height: DOT_SIZE,
                      backgroundColor: "var(--bg)",
                      borderColor: "var(--accent)",
                    }}
                  >
                    <div
                      className="rounded-full"
                      style={{
                        width: DOT_INNER,
                        height: DOT_INNER,
                        backgroundColor: "var(--accent)",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Year */}
                <motion.div className="flex justify-center pt-5 px-3" {...fade}>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: "var(--accent)",
                      fontFamily: "'IBM Plex Mono', monospace",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.year}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.div className="flex justify-center pt-2 px-3" {...fade}>
                  <h3
                    className="text-sm leading-snug text-center"
                    style={{
                      color: "var(--ink)",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 500,
                      maxWidth: 180,
                    }}
                  >
                    {item.title}
                  </h3>
                </motion.div>

                {/* Description */}
                <motion.div className="flex justify-center pt-2 px-3" {...fade}>
                  {item.description && (
                    <p
                      className="text-xs leading-relaxed text-center"
                      style={{ color: "var(--text-muted)", maxWidth: 180 }}
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
      <div className="flex md:hidden flex-col">
        <div className="relative flex flex-col">
          <div
            className="absolute left-[3.5rem] top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
          >
            {!reduced && (
              <motion.div
                className="absolute inset-0 origin-top"
                style={{ backgroundColor: "var(--accent)", opacity: 0.45 }}
                animate={{ scaleY: vis ? 1 : 0 }}
                initial={{ scaleY: 0 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
              />
            )}
          </div>

          {items.map((item, i) => (
            <motion.div
              key={`${item.year}-${i}`}
              animate={{ opacity: vis ? 1 : 0, x: vis ? 0 : -10 }}
              initial={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex items-start gap-6 pb-10"
            >
              <span
                className="flex-shrink-0 w-14 pr-3 text-sm text-right pt-0.5 font-semibold"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: "0.04em",
                }}
              >
                {item.year}
              </span>
              <motion.div
                className="flex-shrink-0 rounded-full border-2 flex items-center justify-center mt-0.5 relative z-10"
                style={{
                  width: DOT_SIZE,
                  height: DOT_SIZE,
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--accent)",
                }}
                animate={{ scale: vis ? 1 : 0 }}
                initial={{ scale: 0 }}
                transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
              >
                <div
                  className="rounded-full"
                  style={{ width: DOT_INNER, height: DOT_INNER, backgroundColor: "var(--accent)" }}
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm leading-snug mb-1"
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
                    className="text-xs leading-relaxed"
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
