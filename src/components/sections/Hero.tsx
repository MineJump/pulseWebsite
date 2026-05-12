import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";
import { MergingBlobs } from "../MergingBlobs";

export function Hero() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 };

  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden">

      <div className="hidden min-[1024px]:block absolute right-[4%] top-1/2 -translate-y-1/2 z-[1] opacity-90">
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
            href="/features"
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
        </motion.div>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.55 }}
          className="mt-6 inline-flex items-center gap-2"
        >
          {/* Apple */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: "var(--text-dim)" }}>
            <path d="M11.07 7.37c-.02-1.9 1.56-2.82 1.63-2.86-0.89-1.3-2.27-1.48-2.76-1.5-1.17-.12-2.29.69-2.89.69-.6 0-1.52-.67-2.5-.65-1.28.02-2.47.75-3.13 1.9C-.04 7.18.85 10.6 2.3 12.44c.72.99 1.57 2.1 2.69 2.06 1.08-.04 1.49-.7 2.79-.7 1.3 0 1.67.7 2.8.68 1.16-.02 1.9-1.01 2.6-2.01.83-1.15 1.17-2.27 1.19-2.33-.03-.01-2.28-.88-2.3-3.47zM8.93 2.13C9.49 1.45 9.87.52 9.77-.43 8.96-.38 8 .12 7.42.8c-.52.6-.98 1.55-.85 2.47.9.07 1.81-.44 2.36-1.14z" fill="currentColor"/>
          </svg>
          {/* Android */}
          <svg width="13" height="14" viewBox="0 0 13 14" fill="none" aria-hidden="true" style={{ color: "var(--text-dim)" }}>
            <path d="M1.5 4.5h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
            <circle cx="4" cy="7" r="0.8" fill="currentColor"/>
            <circle cx="9" cy="7" r="0.8" fill="currentColor"/>
            <path d="M4 4.5L3 2.5M9 4.5L10 2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
          <span
            className="text-xs"
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {t.hero.platforms}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
