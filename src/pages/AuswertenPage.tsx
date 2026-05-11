import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

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

export function AuswertenPage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <>
      <Header />
      <main>
        <section className="relative w-full px-6 md:px-12 lg:px-16 pt-40 md:pt-52 pb-20 overflow-hidden">
          <BlurOrbsField intensity="subtle" />
          <div className="relative z-10 max-w-[900px] mx-auto">
            <motion.div
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6 text-sm uppercase tracking-[0.18em]"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <a href="/methoden" className="hover:opacity-70 transition-opacity">Methoden</a>
              <span>/</span>
              <span style={{ color: "var(--accent)" }}>Auswerten</span>
            </motion.div>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Von Rohdaten zur Erkenntnis. Automatisiert und reproduzierbar.
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              PULSE integriert statistische Analysen, Machine-Learning-Pipelines und interaktive
              Visualisierungen direkt in die Plattform. Sie konfigurieren die Auswertung parallel
              zum Studiendesign. PULSE liefert reproduzierbare Ergebnisse und publikationsreife Exporte.
            </motion.p>
            <motion.div
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://app.pulse-research.de"
                className="liquid-glass inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] transition-all hover:-translate-y-[1px] rounded-full"
                style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Analysemodul konfigurieren →
              </a>
            </motion.div>
          </div>
        </section>

        {/* Was PULSE berechnen kann */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-10">Was PULSE berechnen kann</h2>
            <div className="flex flex-col gap-3">
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
          </div>
        </section>

        {/* Visualisierungen */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-4">Daten sichtbar machen</h2>
            <p className="mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              PULSE generiert interaktive Visualisierungen direkt aus den Studiendaten.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          </div>
        </section>

        {/* Export-Formate */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-4">Ihre Daten, Ihre Werkzeuge</h2>
            <p className="mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Jeder Analysedurchlauf wird automatisch dokumentiert – Zeitstempel, Parameter,
              Datenstand und Diff-Ansicht zu früheren Durchläufen.
            </p>
            <div className="flex flex-wrap gap-3">
              {exportFormats.map((fmt) => (
                <span
                  key={fmt}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--ink)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
