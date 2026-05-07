import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";
import { SectionHeader } from "../SectionHeader";
import { BlurOrbsField } from "../BlurOrbsField";

export function Research() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <section
      id="research"
      className="relative w-full px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <BlurOrbsField intensity="subtle" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow={t.research.eyebrow}
          heading={t.research.heading}
          intro={t.research.intro}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t" style={{ borderColor: "var(--border)" }}>
          {t.research.items.map((item, i) => (
            <motion.div
              key={item.number}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.06 }}
              className="relative py-10 md:py-14 px-0 md:px-10"
              style={{
                borderBottom: "1px solid var(--border)",
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
              }}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="text-sm tracking-[0.2em]"
                  style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {item.number}
                </span>
                <h3>{item.title}</h3>
              </div>
              <p className="leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
