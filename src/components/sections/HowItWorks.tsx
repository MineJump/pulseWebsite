import { motion } from "framer-motion";
import { SlidersHorizontal, UserPlus, BarChart3 } from "lucide-react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";

const stepIcons = [SlidersHorizontal, UserPlus, BarChart3];

export function HowItWorks() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };

  return (
    <section className="w-full px-6 md:px-12 lg:px-16 py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto">

        <div className="mb-16">
          <motion.p
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] mb-4 inline-flex items-center gap-2"
            style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
            {t.howItWorks.heading}
          </motion.p>
          <motion.h2
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-[560px]"
          >
            {t.howItWorks.subheading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {t.howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="relative liquid-glass rounded-2xl p-8 flex flex-col gap-6 overflow-hidden"
            >
              <span
                className="absolute -top-4 -right-2 text-[8rem] font-bold leading-none select-none pointer-events-none"
                style={{
                  color: "var(--accent)",
                  opacity: 0.07,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {(() => { const Icon = stepIcons[i]; return (
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(13, 35, 66, 0.08)" }}
                >
                  <Icon size={22} style={{ color: "var(--brand-blue)" }} strokeWidth={1.5} />
                </div>
              ); })()}

              <div className="flex flex-col gap-2">
                <p className="text-lg font-medium leading-snug" style={{ color: "var(--ink)" }}>
                  {step.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
