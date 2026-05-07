import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const references = [
  "Bolger, N., Davis, A., & Rafaeli, E. (2003). Diary methods: Capturing life as it is lived. Annual Review of Psychology, 54, 579–616.",
  "Csikszentmihalyi, M., & Larson, R. (1987). Validity and reliability of the Experience-Sampling Method. Journal of Nervous and Mental Disease, 175(9), 526–536.",
  "Stone, A. A., & Shiffman, S. (1994). Ecological Momentary Assessment (EMA) in behavioral medicine. Annals of Behavioral Medicine, 16(3), 199–202.",
  "Trull, T. J., & Ebner-Priemer, U. (2013). Ambulatory assessment. Annual Review of Clinical Psychology, 9, 151–176.",
];

export function BefragenPage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
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
              <span style={{ color: "var(--accent)" }}>Befragen</span>
            </motion.div>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Befragen im Alltag. Präzise, kontextsensitiv, wissenschaftlich fundiert.
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              PULSE unterstützt Experience Sampling (ESM), Ecological Momentary Assessment (EMA)
              und Daily Diary Designs in einer konfigurierbaren Umgebung. Sie definieren Trigger,
              Itemlogik und Sampling-Schema. PULSE übernimmt Auslieferung, Compliance-Monitoring
              und Datenaggregation.
            </motion.p>
            <motion.div
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#beispielstudien"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] transition-opacity rounded-full"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-fg)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Beispielstudien
              </a>
              <a
                href="https://app.pulse-research.de"
                className="liquid-glass inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] transition-all hover:-translate-y-[1px] rounded-full"
                style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Befragungsmodul konfigurieren →
              </a>
            </motion.div>
          </div>
        </section>

        {/* Wissenschaftlicher Hintergrund */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <motion.h2
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              Wissenschaftlicher Hintergrund
            </motion.h2>
            <div className="flex flex-col gap-8">
              {[
                {
                  method: "Experience Sampling Method (ESM)",
                  author: "nach Csikszentmihalyi & Larson (1987)",
                  desc: "Mehrfach-tägliche Erfassung von Erleben, Verhalten und Kontext im natürlichen Setting durch zufällig oder ereignisgesteuert ausgelöste Kurzfragebögen.",
                },
                {
                  method: "Ecological Momentary Assessment (EMA)",
                  author: "nach Stone & Shiffman (1994)",
                  desc: "Momentbezogene Selbstberichte zur Reduktion von Recall-Bias. Erfassung von Symptomen, Stimmungen und Verhaltensweisen direkt im Erleben.",
                },
                {
                  method: "Ambulatory Assessment (AA)",
                  author: "nach Trull & Ebner-Priemer (2013)",
                  desc: "Integriertes Framework aus Befragung und Physiologie. Kombination von Selbstbericht und objektiver Sensorik für ein vollständiges Bild im Alltag.",
                },
                {
                  method: "Daily Diary Designs",
                  author: "nach Bolger, Davis & Rafaeli (2003)",
                  desc: "Tagesabschlussbasierte Erhebungsrahmen. Ideal für die Erfassung von Trends, Tagesverläufen und personen-internen Varianzanalysen über längere Zeiträume.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.method}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="border-l-2 pl-6"
                  style={{ borderColor: "var(--accent)" }}
                >
                  <p className="text-xs uppercase tracking-[0.18em] mb-1" style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}>
                    {item.author}
                  </p>
                  <h3 className="text-lg mb-2">{item.method}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualitätssicherung */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <motion.h2
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              Qualitätssicherung in der Feldphase
            </motion.h2>
            <motion.p
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-10 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              PULSE protokolliert in Echtzeit und stellt Forschenden ein Live-Dashboard zur
              Verfügung. Die Berichterstellung folgt den Empfehlungen für intensive Längsschnittstudien.
            </motion.p>
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

        {/* Beispielstudien */}
        <section id="beispielstudien" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-10">Beispielstudien</h2>
            <div className="flex flex-col gap-6">
              {[
                "Affektdynamik bei Studierenden",
                "Schmerztagebuch in der Versorgungsforschung",
                "Konsumverhalten mit Sensor-Trigger",
              ].map((title, i) => (
                <div
                  key={i}
                  className="liquid-glass rounded-xl p-6"
                >
                  <h3 className="text-base mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Beispielinhalt – wird mit Studiendetails befüllt.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-8">Referenzen</h2>
            <div className="flex flex-col gap-4">
              {references.map((ref, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {ref}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
