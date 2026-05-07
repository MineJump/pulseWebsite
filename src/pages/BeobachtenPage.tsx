import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const dataStreams = [
  { label: "Akzelerometer, Gyroskop, Schrittzähler", detail: "Bewegung & körperliche Aktivität" },
  { label: "GPS, WLAN, Bluetooth", detail: "Standort & Mobilität (konfigurierbare Auflösung)" },
  { label: "Wearables: Herzrate, HRV, Hauttemperatur, SpO₂", detail: "Physiologische Indikatoren" },
  { label: "Bildschirmzeit, App-Kategorien, Unlock-Frequenz", detail: "Medien- & Gerätenutzung" },
  { label: "Anruf- und Nachrichten-Metadaten", detail: "Datenschutzkonform – nur Metadaten, keine Inhalte" },
  { label: "Mikrofon: Lautstärke-Aggregat", detail: "Ohne Aufnahme, nur Umgebungslautstärke" },
];

const privacyPoints = [
  "Kommunikationsdaten: nur Metadaten (Zeitstempel, Dauer) – keine Inhalte.",
  "GPS: konfigurierbare Auflösung, auf 500 m-Genauigkeit reduzierbar.",
  "Audio: nur aggregierte Lautstärke-Features, keine Aufnahmen.",
  "Ende-zu-Ende-Verschlüsselung, Pseudonymisierung aller Rohdaten.",
  "Granulares Consent-Modul: Teilnehmende können einzelne Datenströme selektiv freigeben.",
];

const references = [
  "Harari, G. M., et al. (2016). Smartphones as a Research Tool for Behavior and Daily Experience. Social Psychological and Personality Science.",
  "Torous, J., et al. (2016). New Tools for New Research in Psychiatry: A Scalable and Customizable Platform to Empower Data Driven Smartphone Research. JMIR Mental Health.",
  "Trull, T. J., & Ebner-Priemer, U. (2013). Ambulatory assessment. Annual Review of Clinical Psychology, 9, 151–176.",
  "Bolger, N., Davis, A., & Rafaeli, E. (2003). Diary methods: Capturing life as it is lived. Annual Review of Psychology, 54, 579–616.",
];

export function BeobachtenPage() {
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
              <span style={{ color: "var(--accent)" }}>Beobachten</span>
            </motion.div>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Verhalten passiv erfassen. Kontinuierlich, kontextuell, unauffällig.
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              PULSE nutzt Smartphone- und Wearable-Sensoren, um die kontinuierliche Nutzung im
              Alltag zu erfassen. Die Sensorprofile sind datenschutzkonform konfigurierbar –
              mit Sampling-Raten, Aggregationsstufen und granularen Consent-Modulen.
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
                Sensing-Profil konfigurieren →
              </a>
            </motion.div>
          </div>
        </section>

        {/* Welche Datenströme */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-10">Welche Datenströme PULSE erfasst</h2>
            <div className="flex flex-col gap-3">
              {dataStreams.map((stream, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="mt-1 w-4 h-4 flex-shrink-0 rounded-full border-2"
                    style={{ borderColor: "var(--accent)" }}
                  />
                  <div>
                    <p className="font-medium mb-0.5" style={{ color: "var(--ink)" }}>{stream.label}</p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{stream.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy by Design */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-4">Privacy by Design</h2>
            <p className="mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Datenschutz ist kein Add-on, sondern Architekturprinzip. Jeder Datenstrom kann
              individuell konfiguriert, pseudonymisiert und auf Teilnehmer-Ebene eingeschränkt werden.
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

        {/* Wissenschaftlicher Hintergrund */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-10">Wissenschaftlicher Hintergrund</h2>
            <div className="flex flex-col gap-8">
              {[
                { title: "Mobile Sensing", author: "nach Harari et al. (2016)", desc: "Kontinuierliche Erfassung von Verhalten und Kontext über Smartphone-Sensorik als naturalistisches Beobachtungsverfahren." },
                { title: "Digital Phenotyping", author: "nach Torous et al. (2016)", desc: "Quantifizierung individueller Verhaltensmuster über Geräte-Interaktionsdaten zur klinischen Diagnostik und Verlaufsmessung." },
                { title: "Ambulatory Assessment", author: "nach Trull & Ebner-Priemer (2013)", desc: "Integriertes Framework für Sensorik und Selbstbericht. Passive Sensorik reduziert Selbstbericht-Burden und erfasst Verhalten unaufdringlich." },
                { title: "Passive Sensorik als Ergänzung", author: "", desc: "Passive Sensorik ergänzt subjektive Daten um objektive Verhaltensindikatoren und ermöglicht so multi-methodische Längsschnittforschung." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="border-l-2 pl-6"
                  style={{ borderColor: "var(--accent)" }}
                >
                  {item.author && (
                    <p className="text-xs uppercase tracking-[0.18em] mb-1" style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}>
                      {item.author}
                    </p>
                  )}
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Beispielstudien */}
        <section id="beispielstudien" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-10">Beispielstudien</h2>
            <div className="flex flex-col gap-6">
              {["Schlaf- und Aktivitätsmuster bei Schichtarbeitenden", "Passive Phänotypisierung bei Depression", "Kontextuelle Determinanten von Medienkonsum"].map((title, i) => (
                <div key={i} className="liquid-glass rounded-xl p-6">
                  <h3 className="text-base mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Beispielinhalt – wird mit Studiendetails befüllt.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-8">Referenzen</h2>
            <div className="flex flex-col gap-4">
              {references.map((ref, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{ref}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
