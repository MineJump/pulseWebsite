import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

export function Testimonials() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 };

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-10 md:py-14">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
        >
          {t.testimonials.items.map((item, i) => (
            <motion.span
              key={item}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="text-sm uppercase tracking-[0.16em] flex items-center gap-2"
              style={{
                color: "var(--text-dim)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden="true"
              />
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
