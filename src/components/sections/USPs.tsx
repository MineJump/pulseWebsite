import { motion } from "framer-motion";
import { FlaskConical, Layers, BarChart2, ShieldCheck } from "lucide-react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";
import { BlurOrbsField } from "../BlurOrbsField";

const uspIcons = [FlaskConical, Layers, BarChart2, ShieldCheck];

export function USPs() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-8 md:py-10 overflow-hidden">
      <BlurOrbsField intensity="subtle" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.p
          initial={initial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.2em] mb-10 inline-flex items-center gap-2"
          style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
          {t.usps.heading}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.usps.items.map((usp, i) => {
            const Icon = uspIcons[i];
            return (
              <motion.div
                key={usp.title}
                initial={initial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                className="liquid-glass p-6 md:p-7 rounded-xl flex flex-col gap-4 transition-transform hover:-translate-y-[2px]"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(13, 35, 66, 0.08)" }}
                >
                  <Icon size={20} style={{ color: "var(--brand-blue)" }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base mb-2" style={{ color: "var(--ink)" }}>
                    {usp.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {usp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
