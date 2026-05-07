import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";
import { BlurOrbsField } from "../BlurOrbsField";
import { MergingBlobs } from "../MergingBlobs";

export function Hero() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 };

  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden">
      <BlurOrbsField intensity="hero" />
      <div className="absolute inset-0 z-0 grid-overlay" aria-hidden="true" />

      <div className="hidden lg:block absolute right-[4%] top-1/2 -translate-y-1/2 z-[1] opacity-90">
        <MergingBlobs size={440} />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-sm uppercase tracking-[0.22em] mb-8 inline-flex items-center gap-2.5"
          style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span
            className="inline-block w-2 h-2 rounded-full pulse-dot-shift"
            aria-hidden="true"
          />
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.1 }}
          className="max-w-[900px] whitespace-pre-line"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.2 }}
          className="mt-5 text-xl md:text-2xl leading-snug max-w-[620px]"
          style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.3 }}
          className="mt-5 max-w-[560px] text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/methoden"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] transition-opacity rounded-full"
            style={{
              backgroundColor: "var(--btn-primary-bg)",
              color: "var(--btn-primary-fg)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {t.hero.primaryCta}
            <span className="ml-2">→</span>
          </a>
          <a
            href="https://app.pulse-research.de"
            className="liquid-glass inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] transition-all hover:-translate-y-[1px] rounded-full"
            style={{
              color: "var(--ink)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {t.hero.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
