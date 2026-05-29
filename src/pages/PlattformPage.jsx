import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import SubtleArrowLink from "../components/SubtleArrowLink.jsx";
import PlattformPipeline from "../components/PlattformPipeline.jsx";

export default function PlattformPage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);

  const p = t.plattform;
  const pipeline = p.pipeline;

  return (
    <PageScaffold>
      <main>
        <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.subtitle} />
        <section className="relative z-10 w-full -mt-12 md:-mt-16 pt-8 md:pt-10 mb-24 md:mb-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.p
                variants={item}
                className="text-base md:text-lg leading-relaxed mb-10 max-w-[680px]"
                style={{ color: "var(--text-muted)" }}
              >
                {p.intro}
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="mailto:info@2chub.com?subject=PULSE%20Demo"
                  variant="primary"
                  iconRight={<span>→</span>}
                >
                  {p.ctaPrimary}
                </Button>
                <Button href="/preise" variant="secondary">
                  {p.ctaSecondary}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

          {pipeline && (
            <motion.section
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-20"
            >
              <motion.p
                variants={item}
                className="text-xs uppercase tracking-[0.22em] mb-3"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {pipeline.eyebrow}
              </motion.p>
              <motion.h2 variants={item} className="mb-5">
                {pipeline.title}
              </motion.h2>
              <motion.p
                variants={item}
                className="text-base md:text-lg leading-relaxed max-w-[920px] mb-10"
                style={{ color: "var(--text-muted)" }}
              >
                {pipeline.description}
              </motion.p>
              <motion.div variants={item}>
                <PlattformPipeline
                  nodes={pipeline.nodes}
                  stageLabels={pipeline.stageLabels}
                  defaultNodeId={pipeline.defaultNodeId}
                />
              </motion.div>
            </motion.section>
          )}

          {p.architecture && (
            <motion.section
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-20"
            >
              <motion.p
                variants={item}
                className="text-xs uppercase tracking-[0.22em] mb-3"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {p.architecture.eyebrow}
              </motion.p>
              <motion.h2 variants={item} className="mb-5">
                {p.architecture.title}
              </motion.h2>
              <motion.p
                variants={item}
                className="text-base md:text-lg leading-relaxed max-w-[920px] mb-10"
                style={{ color: "var(--text-muted)" }}
              >
                {p.architecture.description}
              </motion.p>
              <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {p.architecture.layers.map((l) => (
                  <Card key={l.number} variant="material" className="p-6 h-full">
                    <p
                      className="text-xs uppercase tracking-[0.22em] mb-3"
                      style={{
                        color: "var(--accent)",
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {l.number} · {l.tag}
                    </p>
                    <h3
                      className="text-xl mb-3"
                    >
                      {l.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {l.description}
                    </p>
                    <ul className="space-y-1.5">
                      {l.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-sm"
                          style={{ color: "var(--ink)" }}
                        >
                          · {b}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </motion.div>
            </motion.section>
          )}

          {p.trust && (
            <motion.section
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {p.trust.items.map((it) => (
                <motion.div key={it.title} variants={item}>
                  <Card variant="material" className="p-6 h-full">
                    <p
                      className="text-xs uppercase tracking-[0.22em] mb-3"
                      style={{
                        color: "var(--accent)",
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {it.eyebrow}
                    </p>
                    <h3
                      className="text-lg mb-2"
                    >
                      {it.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {it.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.section>
          )}

          {p.whiteLabel && (
            <motion.section
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-20"
            >
              <motion.p
                variants={item}
                className="text-xs uppercase tracking-[0.22em] mb-3"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {p.whiteLabel.eyebrow}
              </motion.p>
              <motion.h2
                variants={item}
                className="mb-5 whitespace-pre-line"
              >
                {p.whiteLabel.title}
              </motion.h2>
              <motion.p
                variants={item}
                className="text-base md:text-lg leading-relaxed max-w-[820px] mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                {p.whiteLabel.body}
              </motion.p>
              <motion.ul variants={item} className="space-y-2 max-w-[820px] mb-10">
                {p.whiteLabel.bullets.map((b, i) => (
                  <li key={i} className="text-sm md:text-base" style={{ color: "var(--ink)" }}>
                    · {b}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={item}>
                <p
                  className="text-xs uppercase tracking-[0.18em] mb-3"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {p.whiteLabel.variantsLabel}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {p.whiteLabel.variants.map((v) => {
                    const tone = v.tone || "ink";
                    const gradient =
                      tone === "navy"
                        ? "linear-gradient(135deg, #191645 0%, #2d2a6b 100%)"
                        : tone === "blue"
                        ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
                        : "linear-gradient(135deg, #0F0D29 0%, #2a2750 100%)";
                    return (
                      <Card key={v.tag} variant="material" className="p-5">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="flex-shrink-0 flex items-center justify-center"
                            style={{
                              width: 56,
                              height: 56,
                              borderRadius: 14,
                              background: gradient,
                              boxShadow:
                                "inset 0 1px 0 rgba(255,255,255,0.22), 0 6px 18px -8px rgba(15,13,41,0.35)",
                            }}
                            aria-hidden="true"
                          >
                            <span
                              className="text-base"
                              style={{
                                color: "#fff",
                                fontFamily: "'IBM Plex Mono', monospace",
                                fontWeight: 600,
                                letterSpacing: "0.04em",
                              }}
                            >
                              {v.mark || ""}
                            </span>
                          </div>
                          <p
                            className="text-xs uppercase tracking-[0.18em]"
                            style={{
                              color: "var(--text-muted)",
                              fontFamily: "'IBM Plex Mono', monospace",
                            }}
                          >
                            {v.tag}
                          </p>
                        </div>
                        <p
                          className="text-lg whitespace-pre-line leading-tight"
                          style={{
                            color: "var(--ink)",
                          }}
                        >
                          {v.name}
                        </p>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            </motion.section>
          )}

          {p.participantExperience && (
            <motion.section
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-20 max-w-[820px]"
            >
              <motion.p
                variants={item}
                className="text-xs uppercase tracking-[0.22em] mb-3"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {p.participantExperience.eyebrow}
              </motion.p>
              <motion.h2 variants={item} className="mb-5">
                {p.participantExperience.title}
              </motion.h2>
              <motion.p
                variants={item}
                className="text-base md:text-lg leading-relaxed mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {p.participantExperience.body}
              </motion.p>
              <motion.div variants={item}>
                <SubtleArrowLink href="/app" label={p.participantExperience.cta} />
              </motion.div>
            </motion.section>
          )}

        </div>
      </main>
    </PageScaffold>
  );
}
