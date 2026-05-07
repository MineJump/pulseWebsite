import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";
import { BlurOrbsField } from "../BlurOrbsField";

export function Platform() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <section
      id="platform"
      className="relative w-full px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: "var(--bg-elev)" }}
    >
      <BlurOrbsField intensity="section" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <motion.p
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.2em] mb-5 inline-flex items-center gap-2"
              style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden="true"
              />
              {t.platform.eyebrow}
            </motion.p>

            <motion.h2
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-4"
            >
              {t.platform.heading}
            </motion.h2>

            <motion.p
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg mb-6"
              style={{
                color: "var(--ink)",
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 400,
              }}
            >
              {t.platform.subheading}
            </motion.p>

            <motion.p
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {t.platform.description}
            </motion.p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.platform.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={initial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 + i * 0.08 }}
                className="liquid-glass p-6 md:p-7 transition-transform hover:-translate-y-[2px]"
              >
                <h3 className="mb-3 text-lg">{feature.title}</h3>
                <p
                  className="leading-relaxed text-[0.95rem]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
