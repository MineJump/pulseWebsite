import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export default function AnwendungenPage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);

  const a = t.anwendungen;

  return (
    <PageScaffold>
      <main>
        <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} />
        <section className="relative z-10 w-full -mt-12 md:-mt-16 mb-16 md:mb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <motion.div
              variants={item}
              initial={reduced ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="mailto:info@2chub.com?subject=PULSE%20Demo"
                variant="primary"
                iconRight={<span>→</span>}
              >
                {a.ctaPrimary}
              </Button>
              <Button href="/plattform" variant="secondary">
                {a.ctaSecondary}
              </Button>
            </motion.div>
          </div>
        </section>
        {/* Publications teaser box */}
        {a.pubTeaser && (
          <section className="relative w-full px-6 md:px-12 lg:px-16 mb-10">
            <div className="max-w-[1100px] mx-auto">
              <motion.div
                variants={item}
                initial={reduced ? false : "hidden"}
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                <Card variant="material" interactive className="relative p-7 md:p-10">
                  <a
                    href="/anwendungen/publikationen"
                    className="absolute inset-0 focus-halo rounded-[20px]"
                    aria-label={`${a.pubTeaser.eyebrow} — ${a.pubTeaser.title}`}
                  >
                    <span className="sr-only">{a.pubTeaser.title}</span>
                  </a>
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div>
                      <p
                        className="text-xs uppercase tracking-[0.22em] mb-3 inline-flex items-center gap-2.5"
                        style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                        {a.pubTeaser.eyebrow}
                      </p>
                      <h3
                        className="text-xl md:text-2xl mb-2"
                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {a.pubTeaser.title}
                      </h3>
                      <p
                        className="text-sm md:text-base leading-relaxed max-w-[560px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {a.pubTeaser.body}
                      </p>
                    </div>
                    <span
                      className="flex-shrink-0 text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2"
                      style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {a.pubTeaser.cta} →
                    </span>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        <section className="relative w-full px-6 md:px-12 lg:px-16 pb-20 overflow-hidden">
          <div className="relative z-10 max-w-[1100px] mx-auto">
          {a.areas && (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {a.areas.map((area) => (
                <motion.div key={area.number} variants={item}>
                  <Card variant="material" className="p-7 md:p-10">
                    <p
                      className="text-xs uppercase tracking-[0.22em] mb-3"
                      style={{
                        color: "var(--accent)",
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {area.number} · {area.domain}
                    </p>
                    <h2
                      className="text-2xl md:text-3xl mb-4"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {area.title}
                    </h2>
                    <p
                      className="text-base md:text-lg leading-relaxed mb-6 max-w-[820px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {area.body}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <p
                          className="text-xs uppercase tracking-[0.18em] mb-3"
                          style={{
                            color: "var(--accent)",
                            fontFamily: "'IBM Plex Mono', monospace",
                          }}
                        >
                          {a.needsLabel}
                        </p>
                        <ul className="space-y-1.5">
                          {area.needs.map((n, i) => (
                            <li
                              key={i}
                              className="text-sm md:text-base"
                              style={{ color: "var(--ink)" }}
                            >
                              · {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p
                          className="text-xs uppercase tracking-[0.18em] mb-3"
                          style={{
                            color: "var(--accent)",
                            fontFamily: "'IBM Plex Mono', monospace",
                          }}
                        >
                          {a.deliversLabel}
                        </p>
                        <ul className="space-y-1.5">
                          {area.delivers.map((d, i) => (
                            <li
                              key={i}
                              className="text-sm md:text-base"
                              style={{ color: "var(--ink)" }}
                            >
                              ✓ {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {area.example && (
                      <div
                        className="mt-6 pt-6 border-t"
                        style={{ borderColor: "var(--border-soft)" }}
                      >
                        <p
                          className="text-xs uppercase tracking-[0.18em] mb-2"
                          style={{
                            color: "var(--accent)",
                            fontFamily: "'IBM Plex Mono', monospace",
                          }}
                        >
                          {area.example.label}
                        </p>
                        <p
                          className="text-sm md:text-base leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {area.example.text}
                        </p>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
          </div>
        </section>
      </main>
    </PageScaffold>
  );
}
