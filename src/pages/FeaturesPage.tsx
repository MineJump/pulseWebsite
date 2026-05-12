import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "../i18n";
import { PricingMatrix } from "../components/diagrams/PricingMatrix";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--border)" }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>{q}</span>
        <span
          className="flex-shrink-0 transition-transform duration-200 text-base"
          style={{
            color: "var(--text-dim)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▽
        </span>
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
    </div>
  );
}

export function FeaturesPage() {
  const { t, language } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const fp = t.featuresPage;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full px-6 md:px-12 lg:px-16 pt-40 md:pt-52 pb-16 overflow-hidden">
          <BlurOrbsField intensity="subtle" />
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2.5"
              style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full pulse-dot-shift"
                aria-hidden="true"
              />
              {fp.eyebrow}
            </motion.p>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-[780px]"
            >
              {fp.heading}
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[640px] text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {fp.subheading}
            </motion.p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-10 md:py-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {fp.plans.map((plan, i) => {
                const isSelected = selectedPlan === plan.id;
                return (
                  <motion.div
                    key={plan.id}
                    id={"plan-" + plan.id}
                    initial={initial}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                    className="flex flex-col rounded-2xl p-7 cursor-pointer transition-all duration-200 relative"
                    style={{
                      border: isSelected
                        ? "2px solid var(--ink)"
                        : plan.highlight
                        ? "2px solid var(--accent)"
                        : "1px solid var(--border)",
                      backgroundColor: isSelected ? "rgba(255,255,255,0.85)" : "white",
                    }}
                    onClick={() => setSelectedPlan(isSelected ? null : plan.id)}
                  >
                    {plan.highlight && (
                      <span
                        className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em]"
                        style={{
                          backgroundColor: "var(--accent)",
                          color: "white",
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {fp.badge}
                      </span>
                    )}

                    <p
                      className="text-base font-semibold mb-3"
                      style={{ color: "var(--ink)" }}
                    >
                      {plan.name}
                    </p>

                    <div className="mb-3">
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--ink)" }}
                      >
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span
                          className="text-sm ml-1"
                          style={{ color: "var(--text-dim)" }}
                        >
                          {plan.period}
                        </span>
                      )}
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {plan.tagline}
                    </p>

                    <div
                      className="mb-5 pt-4"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      <div className="flex flex-col gap-2.5">
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
                    </div>

                    {plan.overage && (
                      <p
                        className="text-[11px] mb-4 leading-snug"
                        style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {plan.overage}
                      </p>
                    )}

                    <a
                      href={plan.ctaHref}
                      className="mt-auto block text-center px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-80"
                      style={{
                        backgroundColor: plan.highlight ? "var(--btn-primary-bg)" : "var(--bg-elev)",
                        color: plan.highlight ? "var(--btn-primary-fg)" : "var(--ink)",
                        border: plan.highlight ? "1px solid var(--btn-primary-bg)" : "1px solid var(--border)",
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {plan.cta}
                    </a>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="pt-5 mt-5" style={{ borderTop: "1px solid var(--border)" }}>
                            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                              {plan.detail}
                            </p>
                            <button
                              onClick={() => setSelectedPlan(null)}
                              className="text-xs transition-opacity hover:opacity-60"
                              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                            >
                              {fp.close} ✕
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <p
              className="mt-8 text-center text-sm"
              style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {fp.overflowNote}
            </p>
          </div>
        </section>

        {/* Feature comparison matrix */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mb-10"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)" }}
            >
              {language === "de" ? "Plan-Vergleich im Überblick" : "Plan comparison at a glance"}
            </motion.h2>
            <PricingMatrix />
          </div>
        </section>

        {/* Advisor CTA */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-6 md:py-8">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
              style={{ backgroundColor: "var(--btn-primary-bg)" }}
            >
              <div className="max-w-[580px]">
                <h3
                  className="text-xl mb-3"
                  style={{ color: "var(--btn-primary-fg)" }}
                >
                  {fp.advisorHeading}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {fp.advisorBody}
                </p>
              </div>
              <a
                href={`mailto:info@2chub.com?subject=${encodeURIComponent(fp.advisorMailSubject)}`}
                className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm uppercase tracking-[0.12em] transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "var(--btn-primary-fg)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {fp.advisorCta}
              </a>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto">
            <motion.h2
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              {fp.faqHeading}
            </motion.h2>
            <div className="flex flex-col gap-3">
              {fp.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <FaqItem q={faq.q} a={faq.a} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
