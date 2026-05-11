import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "../i18n";

const platformPillars = [
  {
    title: "Passive Mobile Sensing",
    desc: "Smartphone-Sensordaten kontinuierlich und mit minimaler Teilnehmer-Belastung im Hintergrund erfassen.",
  },
  {
    title: "White-Label Study App",
    desc: "App an Ihre Studie anpassen – von Branding bis zu Inhalten und Workflows.",
  },
  {
    title: "Research Dashboard",
    desc: "Studien, Teilnehmende und Datenqualität überwachen, Fortschritt in Echtzeit verfolgen.",
  },
  {
    title: "Data Export & API-Ready",
    desc: "Daten in Standardformaten exportieren oder via API in Ihre Systeme integrieren.",
  },
  {
    title: "Privacy & Security by Design",
    desc: "Privacy-by-Design, Verschlüsselung, rollenbasierter Zugriff und Compliance.",
  },
];

const sensingCategories = [
  {
    name: "Standort & Mobilität",
    modules: ["Location Tracking", "Pedometer", "Activity Tracking"],
  },
  {
    name: "Bewegung & Kontext",
    modules: ["Motion Sensor", "Ambient Sound & Light", "Battery Monitoring"],
  },
  {
    name: "Digitales Verhalten",
    modules: ["Phone Call Events", "Screen Time & App Events", "PULSE Keyboard"],
  },
  {
    name: "Gesundheit & Wearables",
    modules: ["Apple Health / Health Connect", "Garmin Smartwatch Integration"],
  },
  {
    name: "Konnektivität & Medien",
    modules: ["Wi-Fi & Bluetooth", "Music Tracking", "Spotify History"],
  },
];

const privacyPoints = [
  "Kommunikationsdaten: nur Metadaten (Zeitstempel, Dauer) – keine Inhalte.",
  "GPS: konfigurierbare Auflösung, auf 500 m-Genauigkeit reduzierbar.",
  "Audio: nur aggregierte Lautstärke-Features, keine Aufnahmen.",
  "Ende-zu-Ende-Verschlüsselung, Pseudonymisierung aller Rohdaten.",
  "Granulares Consent-Modul: Teilnehmende können einzelne Datenströme selektiv freigeben.",
];

const interventionTypes = [
  { label: "Push-Reminder", detail: "Kurze Erinnerung oder Handlungsaufforderung" },
  { label: "Mikro-Intervention", detail: "Angeleitete Kurzübung (1 bis 3 Minuten)" },
  { label: "Edukationsinhalt", detail: "Psychoedukative Texte, Grafiken oder kurze Videos" },
  { label: "Feedback", detail: "Rückmeldung auf Basis eigener Daten" },
  { label: "Selbstmonitoring-Prompt", detail: "Aufforderung zur Reflexion ohne Bewertung" },
];

const studyDesigns = [
  { title: "Parallelgruppen-RCT", desc: "Zuweisung zu Interventions- und Kontrollgruppe bei Studienstart." },
  { title: "Micro-Randomized Trial", desc: "Randomisierung auf Momentebene (z. B. Trigger 50% Intervention, 50% Kontrolle)." },
  { title: "SMART-Design", desc: "Mehrstufige Randomisierung zur Optimierung adaptiver Interventionsstrategien." },
  { title: "Crossover-Washout", desc: "Zwei Bedingungen, konfigurierbare Washout-Phase." },
];

const computations = [
  { title: "Deskriptive Statistik", desc: "Verteilungen, Compliance-Kennwerte, Missingness" },
  { title: "Multilevel-Modelle (MLM)", desc: "Within-Between-Effekte, Random Slopes, Cross-Level-Interaktionen" },
  { title: "Zeitreihenanalyse", desc: "Autokorrelation, Trend, Zyklen, VAR-Modelle" },
  { title: "DSEM", desc: "Autoregressive Prozesse, Mediation auf Momentebene" },
  { title: "Klassifikation / Regression (ML)", desc: "Prädiktion von Zuständen aus Sensorfeatures" },
];

const visualizations = [
  { title: "Verlaufskurven", desc: "Individuelle und aggregierte Trajektorien über die Studienzeit" },
  { title: "Heatmaps", desc: "Tageszeit-Map für Aktivität oder Affektvariablen" },
  { title: "Netzwerkgrafiken", desc: "Symptom- oder Affektmatrizen auf Personen- und Gruppenebene" },
  { title: "Compliance-Dashboards", desc: "Response-Raten, Sensorkonfigurbarkeit, Drop-out-Verläufe" },
];

const exportFormats = ["CSV", "R-Dataset (.rds)", "SPSS (.sav)", "JSON", "REST-API"];

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs uppercase tracking-[0.2em] mb-4 inline-flex items-center gap-2"
      style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
      {children}
    </p>
  );
}

export function MethodenPage() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full px-6 md:px-12 lg:px-16 pt-40 md:pt-52 pb-24 md:pb-32 overflow-hidden">
          <BlurOrbsField intensity="subtle" />
          <div className="relative z-10 max-w-[1400px] mx-auto">
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2.5"
              style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              {t.methoden.eyebrow}
            </motion.p>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-[900px]"
            >
              {t.methoden.heading}
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[660px] text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {t.methoden.intro}
            </motion.p>
          </div>
        </section>

        {/* Platform pillars */}
        <section className="w-full px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="max-w-[1400px] mx-auto">
            <motion.p
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.2em] mb-4 inline-flex items-center gap-2"
              style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              Plattform
            </motion.p>
            <motion.h2
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-12 max-w-[780px]"
            >
              Alles, was Sie für Ihre Studie brauchen.
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {platformPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="liquid-glass rounded-xl p-6 flex flex-col gap-3"
                >
                  <h3 className="text-base" style={{ color: "var(--ink)" }}>{pillar.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Beobachten */}
        <section id="beobachten" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <SectionTag>Passive Sensing</SectionTag>
            <h2 className="mb-4">Verhalten passiv erfassen. Kontinuierlich, kontextuell, unauffällig.</h2>
            <p className="mb-12 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              PULSE nutzt Smartphone- und Wearable-Sensoren, um die kontinuierliche Nutzung im
              Alltag zu erfassen. Die Sensorprofile sind datenschutzkonform konfigurierbar –
              mit Sampling-Raten, Aggregationsstufen und granularen Consent-Modulen.
            </p>
            <h3 className="mb-2">14 Sensing-Module in 5 Kategorien</h3>
            <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
              iOS und Android. Modular aktivierbar – je nach Studiendesign und Consent.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {sensingCategories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-xl p-5"
                  style={{ backgroundColor: "white", border: "1px solid var(--border)" }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.18em] mb-3"
                    style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {cat.name}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {cat.modules.map((m) => (
                      <li
                        key={m}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--ink)" }}
                      >
                        <span className="mt-1.5 w-1 h-1 flex-shrink-0 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                        {m}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <h3 className="mb-4">Datenschutz im passiven Sensing</h3>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Jeder Sensorstrom kann individuell konfiguriert, pseudonymisiert und auf
              Teilnehmer-Ebene eingeschränkt werden. Die folgenden Schutzmaßnahmen greifen
              bei jedem Sensing-Modul.
            </p>
            <div className="flex flex-col gap-4">
              {privacyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-base mt-0.5" style={{ color: "var(--accent)" }}>✓</span>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Befragen */}
        <section id="befragen" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <SectionTag>ESM / EMA</SectionTag>
            <h2 className="mb-4">Befragen im Alltag. Präzise, kontextsensitiv, wissenschaftlich fundiert.</h2>
            <p className="mb-12 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              PULSE unterstützt Experience Sampling (ESM), Ecological Momentary Assessment (EMA)
              und Daily Diary Designs in einer konfigurierbaren Umgebung. Sie definieren Trigger,
              Itemlogik und Sampling-Schema. PULSE übernimmt Auslieferung, Compliance-Monitoring
              und Datenaggregation.
            </p>
            <h3 className="mb-4">Qualitätssicherung in der Feldphase</h3>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              PULSE protokolliert in Echtzeit und stellt Forschenden ein Live-Dashboard zur
              Verfügung. Die Berichterstellung folgt den Empfehlungen für intensive Längsschnittstudien.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Response-Rate je Teilnehmender und je Prompt",
                "Latenz zwischen Prompt und Antwort",
                "Carelessness-Indikatoren",
                "Drop-out-Risiko über Verlaufsmuster der Compliance",
                "Forschende erhalten ein Live-Dashboard mit Empfehlungen für Re-Engagement-Nachrichten gemäß den STROBE- und CONSORT-Standards für Längsschnittstudien.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-3 py-3 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "var(--accent)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Intervenieren */}
        <section id="intervenieren" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <SectionTag>Interventionen</SectionTag>
            <h2 className="mb-4">Interventionen, die auf den richtigen Moment reagieren.</h2>
            <p className="mb-12 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              PULSE ermöglicht digitale Interventionen vom einfachen Reminder bis zu
              Just-in-Time Adaptive Interventionen (JITAIs). Sie definieren Auslöser,
              Inhalte und Randomisierungslogik. PULSE liefert aus und protokolliert
              Adhärenz automatisch.
            </p>
            <h3 className="mb-6">Welche Interventionsformen PULSE unterstützt</h3>
            <div className="flex flex-col gap-3 mb-14">
              {interventionTypes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full border-2" style={{ borderColor: "var(--accent)" }} />
                  <div>
                    <p className="font-medium mb-0.5" style={{ color: "var(--ink)" }}>{item.label}</p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 className="mb-6">Interventionsforschung mit kontrollierten Designs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {studyDesigns.map((design, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="liquid-glass rounded-xl p-6"
                >
                  <h3 className="text-base mb-3">{design.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{design.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Auswerten */}
        <section id="auswerten" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <SectionTag>Analyse</SectionTag>
            <h2 className="mb-4">Von Rohdaten zur Erkenntnis. Automatisiert und reproduzierbar.</h2>
            <p className="mb-12 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              PULSE integriert statistische Analysen, Machine-Learning-Pipelines und interaktive
              Visualisierungen direkt in die Plattform. Sie konfigurieren die Auswertung parallel
              zum Studiendesign. PULSE liefert reproduzierbare Ergebnisse und publikationsreife Exporte.
            </p>
            <h3 className="mb-6">Was PULSE berechnen kann</h3>
            <div className="flex flex-col gap-3 mb-14">
              {computations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="mt-1 w-4 h-4 flex-shrink-0 rounded-full border-2" style={{ borderColor: "var(--accent)" }} />
                  <div>
                    <p className="font-medium mb-0.5" style={{ color: "var(--ink)" }}>{item.title}</p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 className="mb-4">Daten sichtbar machen</h3>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              PULSE generiert interaktive Visualisierungen direkt aus den Studiendaten.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {visualizations.map((viz, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="liquid-glass rounded-xl p-6"
                >
                  <h3 className="text-base mb-2">{viz.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{viz.desc}</p>
                </motion.div>
              ))}
            </div>
            <h3 className="mb-4">Ihre Daten, Ihre Werkzeuge</h3>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Jeder Analysedurchlauf wird automatisch dokumentiert – Zeitstempel, Parameter,
              Datenstand und Diff-Ansicht zu früheren Durchläufen.
            </p>
            <div className="flex flex-wrap gap-3">
              {exportFormats.map((fmt) => (
                <span
                  key={fmt}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ border: "1px solid var(--border)", color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto flex justify-center">
            <motion.a
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              href="https://app.pulse-research.de"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] transition-opacity rounded-full"
              style={{
                backgroundColor: "var(--btn-primary-bg)",
                color: "var(--btn-primary-fg)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t.methoden.cta} <span className="ml-2">→</span>
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
