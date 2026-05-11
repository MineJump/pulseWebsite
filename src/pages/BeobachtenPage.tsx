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
      </main>
      <Footer />
    </>
  );
}
