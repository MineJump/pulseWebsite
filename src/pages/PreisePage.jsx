import React, { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import PricingMatrix from "../components/diagrams/PricingMatrix.jsx";
import PricingRequestModal from "../components/PricingRequestModal.jsx";
import { CheckIcon } from "../components/MethodEyebrow.jsx";

function PlanCard({ plan, badgeLabel, selected, onToggle, onRequest, asGrid }) {

  /* ── XL grid mode: 4 bare rows — the parent motion.div is the visual card ── */
  if (asGrid) {
    const badge = plan.highlight && (
      <span
        className="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] leading-none"
        style={{ backgroundColor: "var(--accent)", color: "#fff", fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {badgeLabel}
      </span>
    );
    return (
      <>
        {/* Row 1 — name + badge + price */}
        <div className="pt-6 md:pt-7 px-6 md:px-7">
          <div className="flex items-center gap-3 mb-2 flex-wrap min-h-[28px]">
            <p className="text-base font-semibold" style={{ color: "var(--ink)" }}>{plan.name}</p>
            {badge}
          </div>
          <div>
            <span className="text-2xl font-bold" style={{ color: "var(--ink)" }}>{plan.price}</span>
            {plan.period && (
              <span className="text-sm ml-1" style={{ color: "var(--text-dim)" }}>{plan.period}</span>
            )}
          </div>
        </div>

        {/* Row 2 — tagline */}
        <div className="px-6 md:px-7 pt-2 pb-3">
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{plan.tagline}</p>
        </div>

        {/* Row 3 — features in normal flow (drive row height across subgrid);
                   detail panel is position:absolute + overflow:hidden so its
                   wrapping during column transitions can never grow Row 3.    */}
        <div
          className="px-6 md:px-7 py-4 relative"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div
            className="flex flex-col gap-2.5 min-w-0"
            style={{
              width: selected ? "calc(50% - 0.625rem)" : "100%",
              transition: "width 0.38s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {plan.features.map((f, j) => (
              <div key={j} className="flex items-start gap-2">
                <CheckIcon size="sm" />
                <span className="text-xs leading-snug" style={{ color: "var(--text-muted)" }}>{f}</span>
              </div>
            ))}
          </div>
          <AnimatePresence>
            {selected && (
              <motion.div
                key="grid-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.36 } }}
                exit={{ opacity: 0, transition: { duration: 0.16 } }}
                className="absolute top-4 bottom-4 right-6 md:right-7 pl-5 overflow-hidden pointer-events-none"
                style={{
                  left: "calc(50% + 0.625rem)",
                  borderLeft: "1px solid var(--border)",
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{plan.detail}</p>
                {plan.overage && (
                  <p className="text-[11px] mt-3 leading-snug" style={{ color: "var(--text-dim)" }}>{plan.overage}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Row 4 — overage note (collapsed only) + CTA button */}
        <div className="px-6 md:px-7 pb-6 md:pb-7 pt-3 flex flex-col gap-2.5 justify-end">
          {plan.overage && !selected && (
            <p className="text-[11px] leading-snug" style={{ color: "var(--text-dim)" }}>{plan.overage}</p>
          )}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onRequest(plan); }}
            className="block w-full text-center px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-85 focus-halo"
            style={{
              backgroundColor: plan.highlight ? "var(--accent)" : "var(--bg-elev)",
              color: plan.highlight ? "#fff" : "var(--ink)",
              border: plan.highlight ? "1px solid var(--accent)" : "1px solid var(--border)",
            }}
          >{plan.cta}</button>
        </div>
      </>
    );
  }

  /* ── Mobile / tablet mode: Card wrapper with flex-col layout ── */
  return (
    <Card
      variant="material"
      className={`relative p-6 md:p-7 h-full flex flex-col cursor-pointer transition-all duration-200 ${
        plan.highlight ? "ring-1 ring-[color:var(--accent)]" : ""
      } ${selected ? "ring-2 ring-[color:var(--ink)]" : ""}`}
      onClick={onToggle}
      role="button"
      aria-expanded={selected}
    >
      {/* Header */}
      <div className="mb-3">
        <div className="flex items-center gap-3 mb-2 flex-wrap min-h-[28px]">
          <p className="text-base font-semibold" style={{ color: "var(--ink)" }}>
            {plan.name}
          </p>
          {plan.highlight && (
            <span
              className="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] leading-none"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {badgeLabel}
            </span>
          )}
        </div>
        <div className="mb-2">
          <span className="text-2xl font-bold" style={{ color: "var(--ink)" }}>
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-sm ml-1" style={{ color: "var(--text-dim)" }}>
              {plan.period}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {plan.tagline}
        </p>
      </div>

      {/* Middle section: features + detail */}
      <div
        className="mb-5 pt-4 flex flex-col flex-1 gap-5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex flex-col gap-2.5">
          {plan.features.map((f, j) => (
            <div key={j} className="flex items-start gap-2">
              <CheckIcon size="sm" />
              <span className="text-xs leading-snug" style={{ color: "var(--text-muted)" }}>
                {f}
              </span>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {selected && (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, delay: 0.18 }}
              className="pt-3"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {plan.detail}
              </p>
              {plan.overage && (
                <p className="text-[11px] mt-3 leading-snug" style={{ color: "var(--text-dim)" }}>
                  {plan.overage}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overage note (collapsed only) */}
      {plan.overage && !selected && (
        <p className="text-[11px] mb-4 leading-snug" style={{ color: "var(--text-dim)" }}>
          {plan.overage}
        </p>
      )}

      {/* CTA button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRequest(plan);
        }}
        className="mt-auto block w-full text-center px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-85 focus-halo"
        style={{
          backgroundColor: plan.highlight ? "var(--accent)" : "var(--bg-elev)",
          color: plan.highlight ? "#fff" : "var(--ink)",
          border: plan.highlight
            ? "1px solid var(--accent)"
            : "1px solid var(--border)",
        }}
      >
        {plan.cta}
      </button>
    </Card>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <Card variant="material" className="overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 focus-halo"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
          {q}
        </span>
        <motion.span
          className="flex-shrink-0 text-base"
          style={{ color: "var(--text-dim)" }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
        >
          ▽
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p
              className="px-6 pb-5 text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export default function PreisePage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [requestPlan, setRequestPlan] = useState(null);
  const p = t.preise;

  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);

  const nonEnterprisePlans = p.plans.filter((plan) => !plan.isEnterprise);

  function togglePlan(id) {
    setSelectedPlan((prev) => (prev === id ? null : id));
  }

  return (
    <PageScaffold>
      <main>
        <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        {/* ── Plan cards ── */}
        <section className="relative w-full px-6 md:px-12 lg:px-16 -mt-6 md:-mt-10 mb-6 md:mb-8">
          <div className="relative z-10 max-w-[1280px] mx-auto">

            {/* ═══ Wide desktop: CSS grid + subgrid for aligned dividers (xl+) ═══
                  Column widths animate via CSS transition (no Framer Motion layout),
                  which prevents the height-jitter glitch when clicking through cards.
                  CSS subgrid (grid-template-rows: subgrid) ensures the horizontal
                  divider lines sit at the exact same Y position across all cards.     */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="hidden xl:grid"
              style={{
                gridTemplateColumns: nonEnterprisePlans.map((pl) =>
                  pl.id === selectedPlan ? "2fr" : "1fr"
                ).join(" "),
                gridTemplateRows: "auto auto 1fr auto",
                columnGap: "1.25rem",
                transition: "grid-template-columns 0.38s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {nonEnterprisePlans.map((plan) => {
                const isSelected = selectedPlan === plan.id;
                return (
                  <motion.div
                    key={plan.id}
                    variants={item}
                    role="button"
                    aria-expanded={isSelected}
                    onClick={() => togglePlan(plan.id)}
                    className={`relative material-regular cursor-pointer transition-all duration-200 ${
                      plan.highlight ? "ring-1 ring-[color:var(--accent)]" : ""
                    } ${isSelected ? "ring-2 ring-[color:var(--ink)]" : ""}`}
                    style={{
                      borderRadius: "20px",
                      display: "grid",
                      gridRow: "span 4",
                      gridTemplateRows: "subgrid",
                      minWidth: 0,
                    }}
                  >
                    <PlanCard
                      plan={plan}
                      badgeLabel={p.badge}
                      selected={isSelected}
                      onToggle={() => togglePlan(plan.id)}
                      onRequest={(pl) => setRequestPlan(pl)}
                      asGrid
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ═══ Mobile / tablet: stacked grid, card expands vertically (< xl) ═══ */}
            <div className="xl:hidden">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start"
              >
                {nonEnterprisePlans.map((plan) => (
                  <motion.div key={plan.id} variants={item}>
                    <PlanCard
                      plan={plan}
                      badgeLabel={p.badge}
                      selected={selectedPlan === plan.id}
                      onToggle={() => togglePlan(plan.id)}
                      onRequest={(pl) => setRequestPlan(pl)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Overflow note */}
            {p.overflowNote && (
              <p
                className="mt-6 mb-2 text-center text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {p.overflowNote}
              </p>
            )}

            {/* Enterprise card */}
            {(() => {
              const enterprise = p.plans.find((plan) => plan.isEnterprise);
              if (!enterprise) return null;
              return (
                <motion.div
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-3"
                >
                  <Card variant="material" className="p-7 md:p-9">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10 h-full">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                          <p
                            className="text-base font-semibold"
                            style={{ color: "var(--ink)" }}
                          >
                            {enterprise.name}
                          </p>
                          <span className="text-sm" style={{ color: "var(--text-dim)" }}>
                            {enterprise.price}
                          </span>
                        </div>
                        <p
                          className="text-sm md:text-base leading-relaxed mb-3"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {enterprise.tagline}
                        </p>
                        <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                          {enterprise.features.map((f, i) => (
                            <li
                              key={i}
                              className="text-xs leading-snug flex items-center gap-1.5"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <CheckIcon size="sm" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        type="button"
                        onClick={() => setRequestPlan(enterprise)}
                        className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] transition-opacity hover:opacity-88 focus-halo"
                        style={{
                          backgroundColor: "var(--ink)",
                          color: "#fff",
                        }}
                      >
                        {enterprise.cta}
                      </button>
                    </div>
                  </Card>
                </motion.div>
              );
            })()}
          </div>
        </section>

        {/* ── Comparison matrix ── */}
        {p.matrix && (
          <section className="relative w-full px-6 md:px-12 lg:px-16 pt-6 pb-14 md:pt-8 md:pb-20 overflow-hidden">
            <div className="relative z-10 max-w-[1280px] mx-auto">
              <Card variant="material" interactive className="p-6 md:p-10">
                <motion.h2
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mb-8 md:mb-10"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)" }}
                >
                  {p.matrixHeading}
                </motion.h2>
                <PricingMatrix />
              </Card>
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        {p.faqs && p.faqs.length > 0 && (
          <section className="relative w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 overflow-hidden">
            <div className="relative z-10 max-w-[900px] mx-auto">
              <motion.h2
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-8"
              >
                {p.faqHeading}
              </motion.h2>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                {p.faqs.map((faq, i) => (
                  <motion.div key={i} variants={item}>
                    <FaqItem q={faq.q} a={faq.a} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}
      </main>

      <PricingRequestModal
        open={!!requestPlan}
        plan={requestPlan}
        onClose={() => setRequestPlan(null)}
      />
    </PageScaffold>
  );
}
