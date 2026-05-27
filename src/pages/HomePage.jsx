import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { dur, ease, fadeUp, fadeUpScale, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import Hero from "../components/Hero.jsx";
import Marquee from "../components/Marquee.jsx";
import BlurOrbField from "../components/BlurOrbField.jsx";
import Card from "../components/Card.jsx";
import SubtleArrowLink from "../components/SubtleArrowLink.jsx";
import UspPipelineDiagram from "../components/UspPipelineDiagram.jsx";

const MARQUEE_ITEMS_DE = [
  "Experience Sampling",
  "Passive Sensordatenerfassung",
  "Ecological Momentary Assessment",
  "Mobile Verhaltensforschung",
  "Klinische Studien",
  "Verhaltenswissenschaft",
];
const MARQUEE_ITEMS_EN = [
  "Experience Sampling",
  "Passive Sensing",
  "Ecological Momentary Assessment",
  "Mobile Research",
  "Clinical Studies",
  "Behavioural Science",
];

function UspSection() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.07, 0.05);

  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-elev) 32%, var(--bg-elev) 68%, var(--bg) 100%)",
      }}
    >
      <BlurOrbField intensity="section" />
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
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              {t.welcome.usp.eyebrow}
            </motion.p>
            <motion.h2 variants={item} className="mb-2">
              {t.welcome.usp.titleLine1}
            </motion.h2>
            <motion.h2
              variants={item}
              className="mb-7"
              style={{ color: "var(--accent)" }}
            >
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
              <SubtleArrowLink href="/plattform" label={t.welcome.usp.link} />
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
  const [hover, setHover] = useState(false);
  const label = item.eyebrow.split("·")[1]?.trim() ?? "öffnen";
  return (
    <Card
      variant="material"
      interactive
      className="relative flex flex-col p-6 md:p-7 min-h-[260px] h-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      backdrop={
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "inherit",
            backgroundImage: isFirst
              ? "radial-gradient(75% 80% at 100% 0%, rgba(255, 146, 66, 0.18), transparent 60%)"
              : "radial-gradient(75% 80% at 100% 0%, rgba(255, 146, 66, 0.08), transparent 60%)",
            transition: `opacity ${dur.base}s var(--ease-out-soft)`,
            opacity: hover ? 1 : 0.85,
          }}
        />
      }
    >
      <a
        href={item.href}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        className="absolute inset-0 focus-halo rounded-2xl"
        aria-label={`${item.eyebrow} — ${item.title}`}
      >
        <span className="sr-only">{item.title}</span>
      </a>
      <p
        className="text-xs tracking-[0.2em] mb-4"
        style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {item.eyebrow}
      </p>
      <h3
        className="text-lg md:text-xl mb-3 leading-tight flex-grow"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
        {item.description}
      </p>
      <div
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] self-start mt-auto"
        style={{
          color: hover ? "var(--ink)" : "var(--text-muted)",
          fontFamily: "'IBM Plex Mono', monospace",
          transition: `color ${dur.fast}s var(--ease-in-out-soft)`,
        }}
      >
        <span>→</span>
        <motion.span
          aria-hidden="true"
          animate={{ x: hover ? 3 : 0 }}
          transition={{ duration: dur.fast, ease: ease.inOut }}
        >
          {label}
        </motion.span>
      </div>
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
      <BlurOrbField intensity="subtle" />
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
              className="inline-block w-1.5 h-1.5 rounded-full"
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
  const { language } = useLang();
  return (
    <PageScaffold topPad={false}>
      <Hero />
      <Marquee items={language === "de" ? MARQUEE_ITEMS_DE : MARQUEE_ITEMS_EN} />
      <UspSection />
      <SubpagesSection />
    </PageScaffold>
  );
}
