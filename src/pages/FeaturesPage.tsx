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
  cta: string;
  ctaHref: string;
  enterprise?: boolean;
  detail: string;
}

const plans: Plan[] = [
  {
    id: "ema-only",
    name: "EMA Only",
    price: "€ 2.900",
    period: "/ Studie",
    tagline: "Für reine EMA-Studien ohne passives Sensing.",
    features: [
      "bis zu 100 Teilnehmende",
      "ESM / EMA Befragungsmodul",
      "Compliance-Dashboard & Live-Monitoring",
      "Admin Panel & Datenexport (CSV, SPSS)",
    ],
    cta: "EMA Only entdecken",
    ctaHref: "https://app.pulse-research.de",
    detail:
      "EMA Only eignet sich für Studien, die ausschließlich auf selbstberichteten Momentaufnahmen basieren. Sie erhalten das vollständige Befragungsmodul mit ESM, EMA und Daily Diary Designs, konfigurierbarer Branching-Logik, validierten Skalen und automatisiertem Compliance-Monitoring – ohne die Kosten für Passive Sensing oder Interventionsmodule.",
  },
  {
    id: "ema-sensing",
    name: "EMA + Sensing",
    price: "€ 4.900",
    period: "/ Studie",
    tagline: "EMA kombiniert mit Passive Sensing.",
    features: [
      "bis zu 150 Teilnehmende",
      "ESM / EMA Befragungsmodul",
      "Passive Sensing (Bewegung, GPS, Bildschirmzeit)",
      "Compliance-Dashboard & Sensing-Profil",
    ],
    cta: "EMA + Sensing entdecken",
    ctaHref: "https://app.pulse-research.de",
    detail:
      "EMA + Sensing kombiniert aktive Selbstberichte mit kontinuierlicher Sensorik. Neben dem vollständigen Befragungsmodul aktivieren Sie Sensorströme für Bewegung, Standort, Bildschirmzeit und Kommunikationsmetadaten. Alle Datenströme sind datenschutzkonform konfigurierbar – inklusive Sampling-Raten und granularem Consent.",
  },
  {
    id: "full-platform",
    name: "Full Platform",
    price: "€ 7.900",
    period: "/ Studie",
    tagline: "Alle Methoden in einer Plattform.",
    features: [
      "bis zu 300 Teilnehmende",
      "ESM / EMA + Passive Sensing",
      "Interventionsmodul (JITAIs, MRT-Design)",
      "Automatisierte Auswertung & MLM-Modelle",
    ],
    cta: "Full Platform entdecken",
    ctaHref: "https://app.pulse-research.de",
    detail:
      "Full Platform umfasst alle PULSE-Module: Befragung, Passive Sensing, digitale Interventionen und automatisierte Auswertung. Sie können Studiendesigns mit Just-in-Time-Adaptive-Interventionen und Micro-Randomized Trials konfigurieren und erhalten direkt im Admin Panel reproduzierbare Multilevel-Analysen und interaktive Visualisierungen.",
  },
  {
    id: "multi-study",
    name: "Multi-Study",
    price: "€ 12.900",
    period: "/ Jahr",
    tagline: "Mehrere Studien gleichzeitig betreiben.",
    features: [
      "bis zu 5 gleichzeitige Studien",
      "Alle Module inklusive",
      "Zentrales Multi-Studie-Dashboard",
      "Priority Support & SLA",
    ],
    cta: "Multi-Study entdecken",
    ctaHref: "https://app.pulse-research.de",
    detail:
      "Multi-Study richtet sich an Forschungsgruppen und Institute, die mehrere Studien parallel betreiben. Sie erhalten alle PULSE-Module für bis zu fünf gleichzeitige Studien, ein zentrales Dashboard zur Übersicht und prioritären Support mit definiertem Service Level Agreement.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Auf Anfrage",
    period: "",
    tagline: "Individuell konfigurierbar für Ihre Institution.",
    features: [
      "Unbegrenzte Teilnehmende & Studien",
      "Dedicated Hosting in der EU",
      "Individuelle SLA & dedizierter Support",
      "Ethikantrag-Vorlage & Onboarding inklusive",
    ],
    cta: "Enterprise anfragen",
    ctaHref: "mailto:info@2chub.com?subject=Enterprise-Anfrage PULSE",
    enterprise: true,
    detail:
      "Enterprise ist die richtige Wahl für Universitäten, Kliniken und große Forschungseinrichtungen mit besonderen Anforderungen an Datenschutz, Skalierbarkeit und Support. Wir konfigurieren PULSE individuell für Ihre Institution – inklusive dedizierter Serverinstanz, maßgeschneidertem Onboarding und persönlichem Ansprechpartner.",
  },
];

const faqs = [
  {
    q: "Kann ich Module einzeln hinzubuchen?",
    a: "Ja. Wenn Sie z. B. zu einem bestehenden EMA-Only-Paket das Interventionsmodul hinzufügen möchten, sprechen Sie uns an – wir erstellen ein individuelles Angebot.",
  },
  {
    q: "Sind die Preise pro Studie oder pro Jahr?",
    a: "Die meisten Pakete werden pro Studie abgerechnet. Multi-Study und Enterprise laufen auf Jahresbasis. Alle Preise verstehen sich zzgl. MwSt.",
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

function PlanFinder({ onRecommend }: { onRecommend: (id: string) => void }) {
  const [sensing, setSensing] = useState<boolean | null>(null);
  const [participants, setParticipants] = useState("");

  function getRecommendation(): Plan | null {
    const n = parseInt(participants, 10);
    if (sensing === null && !participants) return null;

    if (!sensing) {
      if (!n || n <= 100) return plans[0]; // EMA Only
      if (n <= 300) return plans[2]; // Full Platform (for participant count)
      return plans[3]; // Multi-Study
    } else {
      if (!n || n <= 150) return plans[1]; // EMA + Sensing
      if (n <= 300) return plans[2]; // Full Platform
      return plans[3]; // Multi-Study
    }
  }

  const rec = getRecommendation();

  return (
    <div
      className="rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
      style={{ backgroundColor: "var(--bg-elev)", border: "1px solid var(--border)" }}
    >
      <div>
        <h3 className="text-xl mb-2">Welcher Plan passt?</h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Beantworten Sie zwei kurze Fragen – wir empfehlen Ihnen den passenden Plan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className="rounded-xl p-5"
          style={{ backgroundColor: "var(--btn-primary-bg)" }}
        >
          <p
            className="text-sm mb-3 font-medium"
            style={{ color: "var(--btn-primary-fg)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Benötigen Sie Mobile Sensing?
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Ja", value: true },
              { label: "Nein", value: false },
            ].map(({ label, value }) => (
              <button
                key={label}
                onClick={() => {
                  setSensing(value);
                  if (rec) onRecommend(rec.id);
                }}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors"
                style={{
                  backgroundColor:
                    sensing === value ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
                  color: "var(--btn-primary-fg)",
                  border: sensing === value ? "1px solid rgba(255,255,255,0.4)" : "1px solid transparent",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl p-5"
          style={{ backgroundColor: "var(--btn-primary-bg)" }}
        >
          <p
            className="text-sm mb-3 font-medium"
            style={{ color: "var(--btn-primary-fg)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Wieviel Teilnehmende?
          </p>
          <input
            type="number"
            min="1"
            placeholder="Zahleneingabe"
            value={participants}
            onChange={(e) => {
              setParticipants(e.target.value);
              setTimeout(() => { if (rec) onRecommend(rec.id); }, 0);
            }}
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "var(--btn-primary-fg)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          />
        </div>
      </div>

      <div
        className="rounded-xl p-5 min-h-[120px]"
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          border: "1px solid var(--border)",
        }}
      >
        {rec ? (
          <>
            <p
              className="text-xs uppercase tracking-[0.16em] mb-2"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Vorläufige Empfehlung:
            </p>
            <h3 className="text-xl mb-2" style={{ color: "var(--ink)" }}>{rec.name}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {rec.tagline}
            </p>
            <button
              onClick={() => onRecommend(rec.id)}
              className="mt-3 text-xs uppercase tracking-[0.14em] transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Details ansehen →
            </button>
          </>
        ) : (
          <p
            className="text-sm"
            style={{ color: "var(--text-dim)" }}
          >
            Vorläufige Empfehlung erscheint hier.
          </p>
        )}
      </div>
    </div>
  );
}

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
              Stellen Sie Ihr PULSE-Paket zusammen.
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[580px] text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Wählen Sie das Paket, das zu Ihrer Studie passt. Alle Preise verstehen
              sich pro Studie bzw. Laufzeitraum und zzgl. MwSt.
            </motion.p>
          </div>
        </section>

        {/* Plan Finder */}
        <section className="w-full px-6 md:px-12 lg:px-16 pb-10">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <PlanFinder
                onRecommend={(id) => {
                  setSelectedPlan(id);
                  setTimeout(() => {
                    document.getElementById("plan-" + id)?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 100);
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-10 md:py-14">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                    className="flex flex-col rounded-2xl p-6 cursor-pointer transition-all duration-200"
                    style={{
                      border: isSelected
                        ? "2px solid var(--ink)"
                        : "1px solid var(--border)",
                      backgroundColor: isSelected ? "rgba(255,255,255,0.85)" : "white",
                    }}
                    onClick={() => setSelectedPlan(isSelected ? null : plan.id)}
                  >
                    <p
                      className="text-base font-semibold mb-3"
                      style={{
                        color: "var(--ink)",
                        fontWeight: isSelected ? 700 : 600,
                      }}
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
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {plan.tagline}
                    </p>

                    <div
                      className="mb-4 pt-4"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      <div className="flex flex-col gap-2">
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

                    <a
                      href={plan.ctaHref}
                      className="mt-auto block text-center px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-80"
                      style={{
                        backgroundColor: plan.enterprise ? "var(--ink)" : "var(--bg-elev)",
                        color: plan.enterprise ? "white" : "var(--ink)",
                        border: "1px solid var(--border)",
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
                    border: "2px solid #2563eb",
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
