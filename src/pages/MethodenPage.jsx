import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { dur, ease, fadeUp, fadeUpScale, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

function MethodCard({ item, cta, variants, isFirst }) {
  const [hover, setHover] = useState(false);
  return (
    <Card
      variant="material"
      interactive
      variants={variants}
      className="relative flex flex-col p-6 md:p-7 min-h-[360px]"
      style={{ backdropFilter: "none", WebkitBackdropFilter: "none", background: "var(--bg)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="flex items-center gap-2.5 mb-7"
        style={{ height: 32, position: "relative", zIndex: 6 }}
      >
        <span
          aria-hidden="true"
          className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <span
          className="text-xs tracking-[0.22em]"
          style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {item.number}
        </span>
        <span
          className="text-[0.65rem] uppercase tracking-[0.18em] leading-tight"
          style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {item.shortDesc}
        </span>
      </div>
      <h3
        className="text-2xl md:text-[1.625rem] mb-4 leading-tight"
      >
        {item.title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-6 flex-grow"
        style={{ color: "var(--text-muted)" }}
      >
        {item.cardDesc}
      </p>
      <a
        href={`/methoden/${item.slug}`}
        className="relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] focus-halo rounded-md self-start py-1"
        style={{
          color: hover ? "var(--ink)" : "var(--text-muted)",
          fontFamily: "'IBM Plex Mono', monospace",
          transition: `color ${dur.fast}s var(--ease-in-out-soft)`,
        }}
      >
        <span>{cta}</span>
        <motion.span
          aria-hidden="true"
          animate={{ x: hover ? 4 : 0 }}
          transition={{ duration: dur.fast, ease: ease.inOut }}
        >
          →
        </motion.span>
      </a>
    </Card>
  );
}

export default function MethodenPage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const card = reduced
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
    : fadeUpScale;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.08, 0.05);

  return (
    <PageScaffold>
      <main>
        <PageHero
          eyebrow={t.methods.eyebrow}
          title={t.methods.title}
          intro={t.methods.intro}
        />
        <section className="relative w-full px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              className="relative"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
                {t.methods.items.map((m, i) => (
                  <MethodCard
                    key={m.slug}
                    item={m}
                    cta={t.methods.cardCta}
                    variants={card}
                    isFirst={i === 0}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              initial={reduced ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              <p
                className="text-xs uppercase tracking-[0.22em] inline-flex items-center gap-2.5"
                style={{
                  color: "var(--text-dim)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                <span aria-hidden="true">↓</span>
                <span>{t.methods.flowStart}</span>
              </p>
              <p
                className="text-xs uppercase tracking-[0.22em] inline-flex items-center justify-end gap-2.5 md:text-right"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                <span>{t.methods.flowEnd}</span>
                <span aria-hidden="true">↑</span>
              </p>
            </motion.div>

            <motion.div
              variants={item}
              initial={reduced ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/app" variant="primary" iconRight={<span>→</span>}>
                {t.methods.appCta}
              </Button>
              <Button href="/anwendungen" variant="secondary">
                {t.nav.applications}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </PageScaffold>
  );
}
