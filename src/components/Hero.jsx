import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import Button from "./Button.jsx";
import GooeyBlobs from "./GooeyBlobs.jsx";

export default function Hero() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();

  const container = reduced ? { hidden: {}, show: {} } : stagger(0.08, 0.05);
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;

  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden section-fade-bottom-elev">
      <div className="hidden xl:block absolute right-[4%] top-1/2 -translate-y-1/2 z-[1] pointer-events-none">
        <GooeyBlobs size={360} />
      </div>
      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-24 md:pt-40 md:pb-32"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
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
          variants={item}
          className="max-w-[1000px] whitespace-pre-line"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-[1.35rem] leading-snug max-w-[720px]"
          style={{
            color: "var(--text-muted)",
          }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.p
          variants={item}
          className="mt-6 max-w-[620px] text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {t.hero.tagline}
        </motion.p>
        <motion.div variants={item} className="mt-12 flex flex-col sm:flex-row gap-4">
          <Button href="/plattform" variant="primary" iconRight={<span>→</span>}>
            {t.hero.primaryCta}
          </Button>
          <Button
            href="mailto:info@2chub.com?subject=PULSE%20%E2%80%94%20Demo%20buchen"
            variant="secondary"
          >
            {t.hero.secondaryCta}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
