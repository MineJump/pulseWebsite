import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, fadeUpScale, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import BackLink from "../components/BackLink.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import MethodEyebrow, { CheckIcon } from "../components/MethodEyebrow.jsx";

function KeyPointCard({ kp, variants }) {
  return (
    <Card variant="material" interactive variants={variants} className="p-6 md:p-7">
      <div className="grid grid-cols-[60px_1fr] gap-5 items-baseline">
        <span
          className="text-xs tracking-[0.22em]"
          style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {kp.number}
        </span>
        <div>
          <h3
            className="text-lg mb-2"
          >
            {kp.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {kp.description}
          </p>
        </div>
      </div>
    </Card>
  );
}

function WhatIsItSection({ content, item, container, cardReveal }) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-12 md:py-16 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <MethodEyebrow text={content.eyebrow} variants={item} />
            <motion.h2 variants={item} className="mb-6">
              {content.title}
            </motion.h2>
            <motion.p
              variants={item}
              className="leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {content.body}
            </motion.p>
          </motion.div>
          <motion.div
            className="lg:col-span-7 flex flex-col gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {content.keyPoints.map((kp) => (
              <KeyPointCard key={kp.number} kp={kp} variants={cardReveal} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PipelineSteps({ steps, container, item }) {
  return (
    <motion.ol
      className="relative"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {steps.map((s, i) => (
        <motion.li
          key={s.number}
          variants={item}
          className="relative pl-14 pb-9 last:pb-0"
        >
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute w-px"
              style={{
                left: 13,
                top: 28,
                bottom: -8,
                background: "var(--border-strong)",
              }}
            />
          )}
          <span
            aria-hidden="true"
            className="absolute top-0 inline-flex items-center justify-center rounded-full"
            style={{
              left: 0,
              width: 28,
              height: 28,
              background: "var(--bg)",
              border: "1px solid var(--border-strong)",
              color: "var(--text-dim)",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
            }}
          >
            {s.number}
          </span>
          <h3
            className="text-lg md:text-xl mb-2"
          >
            {s.title}
          </h3>
          <p
            className="text-sm leading-relaxed max-w-[480px]"
            style={{ color: "var(--text-muted)" }}
          >
            {s.description}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}

function SchemaRow({ row, isLast }) {
  return (
    <li
      className="grid grid-cols-2 gap-4 py-2.5"
      style={{
        borderBottom: isLast ? "none" : "1px solid var(--border-soft)",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.85rem",
      }}
    >
      <span style={{ color: "var(--text-dim)" }}>{row.key}</span>
      <span style={{ color: "var(--ink)", textAlign: "right", wordBreak: "break-word" }}>
        {row.value}
      </span>
    </li>
  );
}

function PipelineSection({ content, item, container, cardReveal }) {
  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-16 py-14 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-elev) 32%, var(--bg-elev) 68%, var(--bg) 100%)",
      }}
    >
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <MethodEyebrow text={content.eyebrow} variants={item} />
            <motion.h2 variants={item} className="mb-6">
              {content.title}
            </motion.h2>
            <motion.p
              variants={item}
              className="leading-relaxed mb-12 max-w-[480px]"
              style={{ color: "var(--text-muted)" }}
            >
              {content.body}
            </motion.p>
            <PipelineSteps steps={content.steps} container={container} item={item} />
          </motion.div>
          <motion.div
            className="lg:col-span-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={item}
              className="text-xs uppercase tracking-[0.22em] mb-4"
              style={{
                color: "var(--accent)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {content.schemaEyebrow}
            </motion.p>
            <motion.p
              variants={item}
              className="text-base leading-relaxed mb-8 max-w-[480px]"
              style={{ color: "var(--text-muted)" }}
            >
              {content.schemaIntro}
            </motion.p>
            <Card
              variant="material"
              interactive
              variants={cardReveal}
              className="p-6 md:p-7"
            >
              <div
                className="flex items-baseline gap-2.5 pb-4 mb-4"
                style={{ borderBottom: "1px solid var(--border-soft)" }}
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span
                  className="text-xs uppercase tracking-[0.18em]"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {content.schemaLabel}
                </span>
              </div>
              <ul>
                {content.schemaRows.map((r, i) => (
                  <SchemaRow
                    key={r.key}
                    row={r}
                    isLast={i === content.schemaRows.length - 1}
                  />
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ useCase, variants }) {
  return (
    <Card variant="material" interactive variants={variants} className="p-6 md:p-7">
      <p
        className="text-xs uppercase tracking-[0.18em] mb-4"
        style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {useCase.tag}
      </p>
      <p
        className="text-sm md:text-base leading-snug"
        style={{ color: "var(--ink)" }}
      >
        {useCase.question}
      </p>
    </Card>
  );
}

function UseCasesDifferenceSection({ useCases, difference, item, container, cardReveal }) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-12 md:py-16 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-7"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <MethodEyebrow text={useCases.eyebrow} variants={item} />
            <motion.h2 variants={item} className="mb-10">
              {useCases.title}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.cases.map((c) => (
                <UseCaseCard key={c.tag} useCase={c} variants={cardReveal} />
              ))}
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <MethodEyebrow text={difference.eyebrow} variants={item} />
            <motion.h2 variants={item} className="mb-6">
              {difference.title}
            </motion.h2>
            <motion.p
              variants={item}
              className="leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              {difference.body}
            </motion.p>
            <motion.ul variants={item} className="space-y-3.5">
              {difference.checks.map((c, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--text)" }}
                >
                  <CheckIcon />
                  <span>{c}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CatalogItemCard({ item, variants }) {
  return (
    <Card variant="material" interactive variants={variants} className="p-5 md:p-6">
      <h3
        className="text-base md:text-lg mb-2"
      >
        {item.name}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {item.description}
      </p>
    </Card>
  );
}

function CatalogSection({ content, item, container, cardReveal }) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-14 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <motion.div
          className="mb-14 md:mb-16 max-w-[820px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <MethodEyebrow text={content.eyebrow} variants={item} />
          <motion.h2 variants={item} className="mb-6">
            {content.title}
          </motion.h2>
          <motion.p
            variants={item}
            className="leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {content.body}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {content.items.map((it) => (
            <CatalogItemCard key={it.name} item={it} variants={cardReveal} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function QuoteSection({ content, item, container, cardReveal }) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Card
            variant="material"
            interactive
            variants={cardReveal}
            className="p-8 md:p-12"
            backdrop={
              <span
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderRadius: "inherit",
                  backgroundImage:
                    "radial-gradient(80% 100% at 100% 0%, var(--accent-soft), transparent 60%)",
                }}
              />
            }
          >
            <motion.p
              variants={item}
              className="text-xs uppercase tracking-[0.22em] mb-8"
              style={{
                color: "var(--accent)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {content.eyebrow}
            </motion.p>
            <motion.blockquote
              variants={item}
              className="text-xl md:text-[1.85rem] leading-snug md:leading-[1.3] mb-8"
              style={{
                color: "var(--ink)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              <span aria-hidden="true" style={{ color: "var(--accent)" }}>
                “
              </span>
              {content.text}
              <span aria-hidden="true" style={{ color: "var(--accent)" }}>
                ”
              </span>
            </motion.blockquote>
            <motion.footer
              variants={item}
              className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1"
            >
              <span
                className="text-xs uppercase tracking-[0.18em]"
                style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {content.author}
              </span>
              {content.affiliation && (
                <>
                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--text-dim)",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    ·
                  </span>
                  <span
                    className="text-xs uppercase tracking-[0.16em]"
                    style={{
                      color: "var(--text-dim)",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {content.affiliation}
                  </span>
                </>
              )}
            </motion.footer>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ArchitectureCallout({ content, item, container }) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-12 md:py-16 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Card variant="material" className="p-7 md:p-9">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:items-center">
              <div className="md:col-span-9">
                <motion.p
                  variants={item}
                  className="text-xs uppercase tracking-[0.18em] mb-3"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {content.eyebrow}
                </motion.p>
                <motion.h3
                  variants={item}
                  className="text-xl md:text-2xl mb-3"
                >
                  {content.title}
                </motion.h3>
                <motion.p
                  variants={item}
                  className="text-sm md:text-base leading-relaxed max-w-[640px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {content.body}
                </motion.p>
              </div>
              <motion.div variants={item} className="md:col-span-3 md:text-right">
                <Button href="/plattform" variant="ghost" iconRight={<span>→</span>}>
                  {content.cta}
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ExploreOtherMethodCard({ item, isCurrent, variants }) {
  return (
    <Card
      variant="material"
      interactive={!isCurrent}
      variants={variants}
      className="p-5 md:p-6"
      style={isCurrent ? { border: "1px solid rgba(255, 146, 66, 0.4)" } : undefined}
    >
      <a
        href={`/methoden/${item.slug}`}
        className="block focus-halo rounded-md"
        aria-current={isCurrent ? "page" : undefined}
      >
        <p
          className="text-[0.65rem] uppercase tracking-[0.18em] mb-3"
          style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {item.shortDesc}
        </p>
        <h3
          className="text-lg md:text-xl"
          style={{
            color: "var(--ink)",
          }}
        >
          {item.title}
        </h3>
      </a>
    </Card>
  );
}

function ExploreOtherSection({ items, currentSlug, eyebrow, allLink, item, container, cardReveal }) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex items-baseline justify-between gap-4 mb-6"
        >
          <p
            className="text-xs uppercase tracking-[0.22em] inline-flex items-center gap-2.5"
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
          </p>
          <a
            href="/methoden"
            className="text-xs uppercase tracking-[0.18em] inline-flex items-center gap-2 focus-halo rounded-sm transition-colors"
            style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            <span>{allLink}</span>
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((it) => (
            <ExploreOtherMethodCard
              key={it.slug}
              item={it}
              isCurrent={it.slug === currentSlug}
              variants={cardReveal}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BulletsFallback({ method, item, container, placeholder }) {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
      <div className="max-w-[820px] mx-auto">
        <motion.ul
          className="space-y-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {method.bullets.map((b, i) => (
            <motion.li
              key={i}
              variants={item}
              className="flex items-baseline gap-4 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                aria-hidden="true"
                className="inline-block w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <span>{b}</span>
            </motion.li>
          ))}
        </motion.ul>
        <Card variant="material" className="mt-12 p-7 md:p-8">
          <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {placeholder}
          </p>
        </Card>
      </div>
    </section>
  );
}

export default function MethodDetailPage({ slug }) {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const cardReveal = reduced
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
    : fadeUpScale;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);

  const method = t.methods.items.find((m) => m.slug === slug);
  if (!method) {
    return (
      <PageScaffold>
        <main className="px-6 md:px-12 lg:px-16 pt-32 pb-20">
          <div className="max-w-[820px] mx-auto">
            <BackLink href="/methoden">{t.methods.backToMethods}</BackLink>
          </div>
        </main>
      </PageScaffold>
    );
  }

  const r = method.rich;

  return (
    <PageScaffold>
      <main>
        <div className="pt-12">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <BackLink href="/methoden">{t.methods.backToMethods}</BackLink>
          </div>
        </div>
        <PageHero
          eyebrow={`${method.number} · ${method.shortDesc}`}
          title={method.pageTitle}
          intro={method.pageIntro}
        />
        <section className="relative z-10 w-full -mt-12 md:-mt-16 pt-8 md:pt-10 mb-16 md:mb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <motion.div
              variants={item}
              initial={reduced ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                href="mailto:info@2chub.com?subject=PULSE%20%E2%80%94%20Demo%20buchen"
                variant="primary"
                iconRight={<span>→</span>}
              >
                {t.methods.finalDemo.primary}
              </Button>
              <Button href="/methoden" variant="secondary">
                {t.nav.allMethods}
              </Button>
            </motion.div>
          </div>
        </section>

        {r ? (
          <>
            <WhatIsItSection
              content={r.whatIsIt}
              item={item}
              container={container}
              cardReveal={cardReveal}
            />
            {r.quote && (
              <QuoteSection
                content={r.quote}
                item={item}
                container={container}
                cardReveal={cardReveal}
              />
            )}
            <PipelineSection
              content={r.pipeline}
              item={item}
              container={container}
              cardReveal={cardReveal}
            />
            <UseCasesDifferenceSection
              useCases={r.useCases}
              difference={r.pulseDifference}
              item={item}
              container={container}
              cardReveal={cardReveal}
            />
            {r.catalog && (
              <CatalogSection
                content={r.catalog}
                item={item}
                container={container}
                cardReveal={cardReveal}
              />
            )}
          </>
        ) : (
          <BulletsFallback
            method={method}
            item={item}
            container={container}
            placeholder={t.methods.placeholder}
          />
        )}

        {r?.architectureCallout && (
          <ArchitectureCallout
            content={r.architectureCallout}
            item={item}
            container={container}
          />
        )}

        <ExploreOtherSection
          items={t.methods.items}
          currentSlug={slug}
          eyebrow={t.methods.exploreEyebrow}
          allLink={t.nav.allMethods}
          item={item}
          container={container}
          cardReveal={cardReveal}
        />
      </main>
    </PageScaffold>
  );
}
