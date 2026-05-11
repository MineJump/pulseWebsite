import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  overage?: string;
  cta: string;
  ctaHref: string;
  highlight?: boolean;
  detail: string;
}

const plans: Plan[] = [
  {
    id: "explore",
    name: "Explore",
    price: "€ 2.900",
    period: "/ Jahr",
    tagline: "Ideal für Studien mit bis zu 100 Teilnehmenden.",
    features: [
      "Einzelstudien-Setup",
      "Core Sensing-Module",
      "Vollständiges ESM / EMA",
      "Standard-Dashboard",
      "CSV-Datenexport",
      "E-Mail-Support",
    ],
    cta: "Explore wählen",
    ctaHref: "https://app.pulse-research.de",
    detail:
      "Explore ist der Einstiegsplan für kleinere Studien und Pilotprojekte. Sie erhalten das vollständige ESM/EMA-Befragungsmodul und die Core Sensing-Module für bis zu 100 Teilnehmende, inklusive Standard-Dashboard und CSV-Export.",
  },
  {
    id: "professional",
    name: "Professional",
    price: "€ 9.900",
    period: "/ Jahr",
    tagline: "Ideal für Studien mit bis zu 400 Teilnehmenden.",
    features: [
      "Multi-Studien-Setup",
      "Alle 14 Sensing-Module + ESM",
      "White-Label-App",
      "Research-Dashboard",
      "Erweiterte Exporte",
      "Priority-Support",
    ],
    overage: "Mehrnutzung möglich für 25 €/Teilnehmer",
    cta: "Professional wählen",
    ctaHref: "https://app.pulse-research.de",
    highlight: true,
    detail:
      "Professional ist der meistgewählte Plan für etablierte Forschungsprojekte. Sie erhalten Zugriff auf alle 14 Sensing-Module, das vollständige ESM/EMA-Modul, eine White-Label-App mit Ihrem Branding sowie das Research-Dashboard für Live-Monitoring. Mehrnutzung über 400 Teilnehmende hinaus ist flexibel möglich.",
  },
  {
    id: "research",
    name: "Research",
    price: "€ 14.900",
    period: "/ Jahr",
    tagline: "Ideal für Studien mit bis zu 1000 Teilnehmenden.",
    features: [
      "Individuelles Studien-Setup",
      "Individuelles Teilnehmer-Volumen",
      "Erweiterte Analytik",
      "API-Integrationen",
      "Compliance-Support",
      "Dediziertes SLA",
    ],
    cta: "Research wählen",
    ctaHref: "https://app.pulse-research.de",
    detail:
      "Research richtet sich an große Forschungseinrichtungen, klinische Studien und Konsortien. Sie erhalten ein individuell konfigurierbares Studien-Setup, erweiterte Analytik direkt in der Plattform, API-Integrationen in bestehende Systeme sowie dediziertes Service Level Agreement und Compliance-Support.",
  },
  {
    id: "ema-only",
    name: "EMA-Only",
    price: "€ 2.900",
    period: "/ Jahr",
    tagline: "Ideal für Studien mit bis zu 400 Teilnehmenden.",
    features: [
      "Nur ESM / EMA-Befragungen",
      "Individuelle Fragebögen",
      "Geplante Prompts",
      "Teilnehmer-Verwaltung",
      "Response-Monitoring",
      "CSV-Datenexport",
    ],
    overage: "Mehrnutzung möglich für 10 €/Teilnehmer",
    cta: "EMA-Only wählen",
    ctaHref: "https://app.pulse-research.de",
    detail:
      "EMA-Only ist der spezialisierte Plan für Studien, die ausschließlich auf Selbstberichten basieren. Sie konfigurieren individuelle Fragebögen, planen Prompt-Schemata und überwachen Responses in Echtzeit – für bis zu 400 Teilnehmende, flexibel skalierbar.",
  },
];

const faqs = [
  {
    q: "Was passiert bei mehr als 1000 Teilnehmenden?",
    a: "Für Studien mit über 1000 Teilnehmenden erstellen wir ein individuelles Angebot. Kontaktieren Sie uns für ein Custom Quote.",
  },
  {
    q: "Was bedeutet Mehrnutzung (Overage)?",
    a: "Die Pläne Professional und EMA-Only erlauben die Aufnahme zusätzlicher Teilnehmender über das jeweilige Kontingent hinaus – pro zusätzlichem Teilnehmer fallen 25 € (Professional) bzw. 10 € (EMA-Only) an.",
  },
  {
    q: "Sind die Preise pro Jahr?",
    a: "Ja. Alle Pakete werden auf Jahresbasis abgerechnet und verstehen sich zzgl. MwSt.",
  },
  {
    q: "Was passiert nach Ablauf der Studie mit den Daten?",
    a: "Ihre Daten verbleiben 90 Tage nach Studienabschluss in PULSE und können vollständig exportiert werden. Danach werden sie DSGVO-konform gelöscht.",
  },
  {
    q: "Gibt es eine Testversion?",
    a: "Wir bieten auf Anfrage eine Demo-Instanz für bis zu 10 Teilnehmende an. Kontaktieren Sie uns für einen kostenlosen Testzugang.",
  },
];

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
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const selected = plans.find((p) => p.id === selectedPlan) ?? null;

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
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Features & Pricing
            </motion.p>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-[780px]"
            >
              Wählen Sie den Plan, der zu Ihrer Studie passt.
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[640px] text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Vier Pläne für unterschiedliche Studiengrößen und Anforderungen. Alle Preise verstehen sich pro Jahr und zzgl. MwSt.
            </motion.p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-10 md:py-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {plans.map((plan, i) => {
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
                        Beliebt
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
                  </motion.div>
                );
              })}
            </div>

            <p
              className="mt-8 text-center text-sm"
              style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Für Studien mit über 1000 Teilnehmenden kontaktieren Sie uns für ein individuelles Angebot.
            </p>
          </div>
        </section>

        {/* Selected plan detail */}
        <AnimatePresence>
          {selected && (
            <motion.section
              key={selected.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden w-full px-6 md:px-12 lg:px-16"
            >
              <div className="max-w-[1400px] mx-auto pb-6">
                <div
                  className="rounded-2xl p-8"
                  style={{
                    border: "2px solid var(--accent)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                  }}
                >
                  <h2 className="text-2xl mb-4" style={{ color: "var(--ink)" }}>
                    {selected.name}
                  </h2>
                  <p className="leading-relaxed max-w-[860px]" style={{ color: "var(--text-muted)" }}>
                    {selected.detail}
                  </p>
                  <div className="mt-6 flex gap-4">
                    <a
                      href={selected.ctaHref}
                      className="inline-flex items-center justify-center px-6 py-3 text-sm uppercase tracking-[0.12em] transition-opacity rounded-full"
                      style={{
                        backgroundColor: "var(--btn-primary-bg)",
                        color: "var(--btn-primary-fg)",
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      {selected.cta} →
                    </a>
                    <button
                      onClick={() => setSelectedPlan(null)}
                      className="text-sm px-4 py-2 transition-opacity hover:opacity-60"
                      style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      Schließen
                    </button>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* "Nicht sicher?" CTA */}
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
                  Nicht sicher, welcher Plan passt?
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Buchen Sie ein 15-minütiges Beratungsgespräch. Wir helfen Ihnen, die
                  richtige Konfiguration für Ihre Studie zu finden – kostenlos und
                  unverbindlich.
                </p>
              </div>
              <a
                href="mailto:info@2chub.com?subject=Beratungsgespräch PULSE"
                className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm uppercase tracking-[0.12em] transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "var(--btn-primary-fg)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                Beratungsgespräch buchen
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
              Häufige Fragen
            </motion.h2>
            <div className="flex flex-col gap-3 max-w-[900px]">
              {faqs.map((faq, i) => (
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
