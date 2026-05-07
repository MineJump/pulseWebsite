import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "../i18n";

export function MethodenPage() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full px-6 md:px-12 lg:px-16 pt-40 md:pt-52 pb-24 md:pb-32 overflow-hidden">
          <BlurOrbsField intensity="subtle" />
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2.5"
              style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {t.methoden.eyebrow}
            </motion.p>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-[900px]"
            >
              {t.methoden.heading}
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[660px] text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {t.methoden.intro}
            </motion.p>
          </div>
        </section>

        {/* Method cards */}
        <section className="w-full px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {t.methoden.cards.map((card, i) => (
                <motion.a
                  key={card.href}
                  href={card.href}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                  className="group liquid-glass rounded-xl p-8 md:p-10 flex flex-col gap-4 transition-transform hover:-translate-y-[3px]"
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {card.tag}
                  </span>
                  <h2 className="text-2xl" style={{ color: "var(--ink)" }}>
                    {card.title}
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {card.description}
                  </p>
                  <span
                    className="mt-auto text-sm uppercase tracking-[0.12em] flex items-center gap-2 transition-opacity group-hover:opacity-70"
                    style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    Mehr erfahren <span>→</span>
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-14 flex justify-center"
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
                {t.methoden.cta}
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
