import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "../i18n";

const timeline = [
  { year: "2021", event: "Gründung des 2CHUB am Department Psychologie der LMU München." },
  { year: "2022", event: "Erste PULSE-PilotStudien mit externen Forschungspartnern." },
  { year: "2023", event: "Launch der PULSE-Plattform mit ESM und Passive Sensing." },
  { year: "2024", event: "Erweiterung um Interventionsmodul und automatisierte Analyse." },
];

export function UeberUnsPage() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full px-6 md:px-12 lg:px-16 pt-40 md:pt-52 pb-24 overflow-hidden">
          <BlurOrbsField intensity="subtle" />
          <div className="relative z-10 max-w-[900px] mx-auto">
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2.5"
              style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              Über uns
            </motion.p>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Aus der Forschung. Für die Forschung.
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              PULSE entsteht am 2CHUB, dem Center for Computation of Human Behavior. Wir sind ein
              unabhängiges Forschungsinstitut für mobile Studien, Experience Sampling und Passive
              Sensing. PULSE ist das Werkzeug, das wir selbst gebraucht hätten.
            </motion.p>
          </div>
        </section>

        {/* Timeline */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-12">Meilensteine</h2>
            <div className="relative flex flex-col gap-0">
              <div
                className="absolute left-[3.5rem] top-0 bottom-0 w-px"
                style={{ backgroundColor: "var(--border)" }}
              />
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-8 pb-10"
                >
                  <span
                    className="flex-shrink-0 w-14 text-sm text-right"
                    style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {item.year}
                  </span>
                  <div
                    className="flex-shrink-0 w-3 h-3 rounded-full mt-1 relative z-10"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto">
            <motion.p
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.2em] mb-4 inline-flex items-center gap-2"
              style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              {t.team.eyebrow}
            </motion.p>
            <motion.h2
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-12"
            >
              {t.team.heading}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.team.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                  className="flex flex-col gap-4"
                >
                  <div
                    className="w-full aspect-square rounded-xl"
                    style={{ backgroundColor: "var(--bg-elev)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium" style={{ color: "var(--ink)" }}>{member.name}</p>
                    <p className="text-sm mt-1" style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}>
                      {member.role}
                    </p>
                    <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {member.background}
                    </p>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs mt-3 inline-block transition-opacity hover:opacity-70"
                        style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 2CHUB */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-6">2CHUB</h2>
            <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
              Das Center for Computation of Human Behavior (2CHUB) ist eine unabhängige
              Forschungseinrichtung am Department Psychologie der LMU München. Wir entwickeln
              Methoden, Infrastruktur und Werkzeuge für die mobile Verhaltensforschung.
            </p>
            <h3 className="mb-6">Ausgewählte Publikationen</h3>
            <div className="flex flex-col gap-4">
              {[
                "Terhorst, Y., et al. (2024). Ecological Validity of Smartphone-Based ESM in Clinical Populations. Journal of Medical Internet Research.",
                "Paletta, L., et al. (2023). PULSE: An Open-Source Platform for Mobile Research. Behavior Research Methods.",
                "Bühner, M., et al. (2022). Psychometric Properties of ESM-Derived Affect Scales. Psychological Assessment.",
                "Terhorst, Y., et al. (2021). Mobile Health Interventions in Routine Care. Digital Health.",
                "Lohse, T., et al. (2023). Privacy-Preserving Passive Sensing in Field Studies. Computers in Human Behavior.",
              ].map((pub, i) => (
                <motion.p
                  key={i}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="text-sm leading-relaxed py-4 border-b"
                  style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
                >
                  {pub}
                </motion.p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
