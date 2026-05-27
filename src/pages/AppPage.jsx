import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, fadeUpScale, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import PhoneMockup from "../components/PhoneMockup.jsx";
import { CheckIcon } from "../components/MethodEyebrow.jsx";

function FeatureWithMockup({
  eyebrow,
  title,
  body,
  bullets,
  mockupKind,
  imageAlt,
  imageOnRight,
  elevated,
  item,
  cardReveal,
  container,
}) {
  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-16 py-14 md:py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${imageOnRight ? "" : "lg:[direction:rtl]"}`}
        >
          <motion.div
            className="lg:col-span-6 lg:[direction:ltr]"
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
              {eyebrow}
            </motion.p>
            <motion.h2 variants={item} className="mb-6">
              {title}
            </motion.h2>
            <motion.p
              variants={item}
              className="leading-relaxed mb-8 max-w-[520px]"
              style={{ color: "var(--text-muted)" }}
            >
              {body}
            </motion.p>
            <motion.ul variants={item} className="space-y-3.5">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--text)" }}
                >
                  <CheckIcon />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="lg:col-span-6 lg:[direction:ltr] flex items-center justify-center"
            variants={cardReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <PhoneMockup kind={mockupKind} alt={imageAlt} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function AppPage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const cardReveal = reduced
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
    : fadeUpScale;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.07, 0.05);

  const a = t.app;

  return (
    <PageScaffold>
      <main>
        <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.subtitle} />
        <section className="relative z-10 w-full -mt-12 md:-mt-16 pt-20 md:pt-28 mb-20 md:mb-28">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.p
                variants={item}
                className="text-base md:text-lg leading-relaxed mb-14 max-w-[680px]"
                style={{ color: "var(--text-muted)" }}
              >
                {a.intro}
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="mailto:info@2chub.com?subject=PULSE%20%E2%80%94%20Demo%20buchen"
                  variant="primary"
                  iconRight={<span>→</span>}
                >
                  {a.ctaPrimary}
                </Button>
                <Button href="/plattform" variant="secondary">
                  {a.ctaSecondary}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <FeatureWithMockup
          eyebrow={a.survey.eyebrow}
          title={a.survey.title}
          body={a.survey.body}
          bullets={a.survey.bullets}
          mockupKind="survey"
          imageAlt={a.survey.imageAlt}
          imageOnRight={true}
          elevated={true}
          item={item}
          cardReveal={cardReveal}
          container={container}
        />
        <FeatureWithMockup
          eyebrow={a.sensing.eyebrow}
          title={a.sensing.title}
          body={a.sensing.body}
          bullets={a.sensing.bullets}
          mockupKind="sensing"
          imageAlt={a.sensing.imageAlt}
          imageOnRight={false}
          elevated={false}
          item={item}
          cardReveal={cardReveal}
          container={container}
        />

        {a.participantPromise && (
          <section className="relative w-full px-6 md:px-12 lg:px-16 py-14 md:py-20 overflow-hidden">
            <div className="relative z-10 max-w-[1280px] mx-auto">
              <motion.div
                className="mb-14 md:mb-16 max-w-[820px]"
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
                  {a.participantPromise.eyebrow}
                </motion.p>
                <motion.h2 variants={item} className="mb-6">
                  {a.participantPromise.title}
                </motion.h2>
                <motion.p
                  variants={item}
                  className="leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {a.participantPromise.intro}
                </motion.p>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                {a.participantPromise.items.map((p) => (
                  <Card
                    key={p.title}
                    variant="material"
                    interactive
                    variants={cardReveal}
                    className="p-6 md:p-7"
                  >
                    <h3
                      className="text-lg mb-3"
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {p.description}
                    </p>
                  </Card>
                ))}
              </motion.div>
            </div>
          </section>
        )}
      </main>
    </PageScaffold>
  );
}
