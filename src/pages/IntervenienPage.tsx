import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

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

export function IntervenienPage() {
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
              <span style={{ color: "var(--accent)" }}>Intervenieren</span>
            </motion.div>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Interventionen, die auf den richtigen Moment reagieren.
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              PULSE ermöglicht digitale Interventionen vom einfachen Reminder bis zu
              Just-in-Time Adaptive Interventionen (JITAIs). Sie definieren Auslöser,
              Inhalte und Randomisierungslogik. PULSE liefert aus und protokolliert
              Adhärenz automatisch.
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
                Interventionsmodul konfigurieren →
              </a>
            </motion.div>
          </div>
        </section>

        {/* Interventionstypen */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-10">Welche Interventionsformen PULSE unterstützt</h2>
            <div className="flex flex-col gap-3">
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
          </div>
        </section>

        {/* Studiendesigns */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-10">Interventionsforschung mit kontrollierten Designs</h2>
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

        {/* Wissenschaftlicher Hintergrund */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-10">Wissenschaftlicher Hintergrund</h2>
            <div className="flex flex-col gap-8">
              {[
                { title: "Just-in-Time Adaptive Interventions (JITAIs)", author: "nach Nahum-Shani et al. (2016)", desc: "Kontextadaptive Interventionen, ausgelöst durch Echtzeit-Daten zu Zustand und Situation des Nutzers." },
                { title: "Micro-Randomized Trials (MRT)", author: "nach Klasnja et al. (2015)", desc: "Experimentelle Designs, die Interventionseffekte auf Momentebene kausal prüfbar machen." },
                { title: "Sequential Multiple Assignment Randomized Trials (SMART)", author: "nach Lei et al. (2012)", desc: "Mehrstufige Randomisierung zur Optimierung adaptiver Interventionsstrategien über den Studienverlauf." },
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
                  <p className="text-xs uppercase tracking-[0.18em] mb-1" style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}>{item.author}</p>
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
              {["JITAI zur Stressreduktion im Arbeitsalltag", "Digitale Compliance-Intervention bei chronischen Erkrankungen", "Sensor-getriggerter Bewegungs-Prompt"].map((title, i) => (
                <div key={i} className="liquid-glass rounded-xl p-6">
                  <h3 className="text-base mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Beispielinhalt – wird mit Studiendetails befüllt.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
