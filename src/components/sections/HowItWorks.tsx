import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

export function HowItWorks() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <section
      className="w-full px-6 md:px-12 lg:px-16 py-24 md:py-32"
      style={{ backgroundColor: "var(--bg-elev)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.2em] mb-12 inline-flex items-center gap-2"
          style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />
          {t.howItWorks.heading}
        </motion.p>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
          {t.howItWorks.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-6 md:flex-1">
              <motion.div
                initial={initial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
                className="flex items-center gap-4"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm"
                  style={{
                    backgroundColor: "var(--btn-primary-bg)",
                    color: "var(--btn-primary-fg)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-base font-medium" style={{ color: "var(--ink)" }}>
                  {step}
                </span>
              </motion.div>

              {i < t.howItWorks.steps.length - 1 && (
                <span
                  className="hidden md:block text-xl flex-shrink-0 ml-6"
                  style={{ color: "var(--border)" }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <a
            href="https://app.pulse-research.de"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] transition-opacity rounded-full"
            style={{
              backgroundColor: "var(--btn-primary-bg)",
              color: "var(--btn-primary-fg)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {t.howItWorks.cta}
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
