import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, fadeUpScale, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import Hero from "../components/Hero.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import UspPipelineDiagram from "../components/UspPipelineDiagram.jsx";

function UspSection() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.07, 0.05);

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={item}
              className="text-sm uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2.5"
              style={{
                color: "var(--accent)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              <span
                aria-hidden="true"
                className="inline-block shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {t.welcome.usp.eyebrow}
            </motion.p>
            <motion.h2 variants={item} className="mb-0">
              {t.welcome.usp.titleLine1}
            </motion.h2>
            <motion.h2 variants={item} className="mb-7">
              {t.welcome.usp.titleLine2}
            </motion.h2>
            <motion.p
              variants={item}
              className="text-base leading-relaxed mb-8 max-w-[480px]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.welcome.usp.body}
            </motion.p>
            <motion.div variants={item}>
              <Button href="/plattform" variant="secondary">
                {t.welcome.usp.link}
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden lg:block lg:col-span-7"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <UspPipelineDiagram labels={t.welcome.usp.diagram} reduced={reduced} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SubpageCard({ item, isFirst }) {
  return (
    <Card
      variant="material"
      interactive
      className="relative flex flex-col p-6 md:p-7 h-full"
    >
      <a
        href={item.href}
        className="absolute inset-0 focus-halo rounded-2xl"
        aria-label={`${item.eyebrow} — ${item.title}`}
      >
        <span className="sr-only">{item.title}</span>
      </a>
      <p
        className="text-xs tracking-[0.2em] mb-4 flex items-center justify-between"
        style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {item.eyebrow}
        <span aria-hidden="true" style={{ fontFamily: "sans-serif", letterSpacing: 0 }}>→</span>
      </p>
      <h3
        className="text-lg md:text-xl mb-3 leading-tight"
      >
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {item.description}
      </p>
    </Card>
  );
}

function SubpagesSection() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const card = reduced
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
    : fadeUpScale;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.07, 0.05);
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          className="mb-12 md:mb-16 max-w-[820px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={item}
            className="text-sm uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2.5"
            style={{
              color: "var(--accent)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            <span
              aria-hidden="true"
              className="inline-block shrink-0 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            {t.welcome.subpages.eyebrow}
          </motion.p>
          <motion.h2 variants={item} className="mb-6">
            {t.welcome.subpages.title}
          </motion.h2>
          <motion.p
            variants={item}
            className="text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {t.welcome.subpages.intro}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.welcome.subpages.items.map((it, i) => (
            <motion.div key={it.href} variants={card} className="h-full">
              <SubpageCard item={it} isFirst={i === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <PageScaffold topPad={false}>
      <Hero />
      <TrustBadges />
      <UspSection />
      <SubpagesSection />
    </PageScaffold>
  );
}
