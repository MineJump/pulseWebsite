import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";
import { SectionHeader } from "../SectionHeader";
import { BlurOrbsField } from "../BlurOrbsField";

export function USPs() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-24 md:py-32 overflow-hidden">
      <BlurOrbsField intensity="subtle" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeader eyebrow={t.usps.heading} heading="" intro="" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {t.usps.items.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              className="liquid-glass p-6 md:p-7 rounded-xl transition-transform hover:-translate-y-[2px]"
            >
              <h3 className="text-base mb-3" style={{ color: "var(--ink)" }}>
                {usp.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
