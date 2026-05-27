import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import PricingMatrix from "../components/diagrams/PricingMatrix.jsx";
import PricingRequestModal from "../components/PricingRequestModal.jsx";

function PlanCard({ plan, badgeLabel, closeLabel, selected, onToggle, onRequest }) {
  return (
    <Card
      variant="material"
      className={`relative p-6 md:p-7 h-full cursor-pointer transition-all duration-200 ${
        plan.highlight ? "ring-1 ring-[color:var(--accent)]" : ""
      } ${selected ? "ring-2 ring-[color:var(--ink)]" : ""}`}
      onClick={onToggle}
      role="button"
      aria-expanded={selected}
    >
      {/* Header block — fixed height so separator always aligns across cards */}
      <div className="min-h-[8.5rem] flex flex-col justify-start">
        <div className="flex items-center justify-between gap-3 mb-3 min-h-[28px]">
          <p
            className="text-base font-semibold"
            style={{
              color: "var(--ink)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
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

        <div className="mb-3">
          <span
            className="text-2xl font-bold"
            style={{
              color: "var(--ink)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span
              className="text-sm ml-1"
              style={{
                color: "var(--text-dim)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {plan.period}
            </span>
          )}
        </div>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {plan.tagline}
        </p>
      </div>

      <div
        className="mb-5 pt-4 flex flex-col gap-2.5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {plan.features.map((f, j) => (
          <div key={j} className="flex items-start gap-2">
            <span
              className="text-xs mt-0.5 flex-shrink-0"
              style={{ color: "var(--accent)" }}
            >
              ✓
            </span>
            <span
              className="text-xs leading-snug"
              style={{ color: "var(--text-muted)" }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>

      {plan.overage && (
        <p
          className="text-[11px] mb-4 leading-snug"
          style={{
            color: "var(--text-dim)",
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          {plan.overage}
        </p>
      )}

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
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {plan.cta}
      </button>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="pt-5 mt-5"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {plan.detail}
              </p>
              <button
                type="button"
                onClick={onToggle}
                className="text-xs transition-opacity hover:opacity-60 focus-halo rounded-sm"
                style={{
                  color: "var(--text-dim)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {closeLabel} ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
        <span
          className="text-sm leading-relaxed"
          style={{ color: "var(--ink)" }}
        >
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

  return (
    <PageScaffold>
      <main>
        <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        {/* Plan cards */}
        <section className="relative w-full px-6 md:px-12 lg:px-16 -mt-6 md:-mt-10 mb-16 md:mb-20 overflow-hidden">
          <div className="relative z-10 max-w-[1280px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
            >
              {p.plans
                .filter((plan) => !plan.isEnterprise)
                .map((plan) => (
                  <motion.div key={plan.id} variants={item} className="h-full">
                    <PlanCard
                      plan={plan}
                      badgeLabel={p.badge}
                      closeLabel={p.close}
                      selected={selectedPlan === plan.id}
                      onToggle={() =>
                        setSelectedPlan(selectedPlan === plan.id ? null : plan.id)
                      }
                      onRequest={(pl) => setRequestPlan(pl)}
                    />
                  </motion.div>
                ))}
            </motion.div>

            {p.overflowNote && (
              <p
                className="mt-6 mb-2 text-center text-sm"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {p.overflowNote}
              </p>
            )}

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
                            style={{
                              color: "var(--ink)",
                              fontFamily: "'IBM Plex Mono', monospace",
                            }}
                          >
                            {enterprise.name}
                          </p>
                          <span
                            className="text-sm"
                            style={{
                              color: "var(--text-dim)",
                              fontFamily: "'IBM Plex Mono', monospace",
                            }}
                          >
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
                              <span style={{ color: "var(--accent)" }}>✓</span>
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
                          fontFamily: "'IBM Plex Mono', monospace",
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

        {/* Comparison matrix */}
        {p.matrix && (
          <section className="relative w-full px-6 md:px-12 lg:px-16 py-14 md:py-20 overflow-hidden">
            <div className="relative z-10 max-w-[1280px] mx-auto">
              <Card variant="material" className="p-6 md:p-10">
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

        {/* FAQ */}
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
