import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "../i18n";

export function UeberUnsPage() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const up = t.ueberUnsPage;

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
              {up.eyebrow}
            </motion.p>
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {up.heading}
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {up.body}
            </motion.p>
          </div>
        </section>

        {/* Timeline */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-12">{up.milestonesHeading}</h2>
            <div className="relative flex flex-col gap-0">
              <div
                className="absolute left-[3.5rem] top-0 bottom-0 w-px"
                style={{ backgroundColor: "var(--border)" }}
              />
              {up.timeline.map((item, i) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {t.team.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={initial}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: "var(--bg-elev)" }}>
                    <img
                      src={`/Person${i + 1}.png`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="font-medium" style={{ color: "var(--ink)" }}>{member.name}</p>
                    <p className="text-sm mt-1 min-h-[2.5rem]" style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}>
                      {member.role}
                    </p>
                    <p className="text-sm mt-3 leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                      {member.background}
                    </p>
                    <div className="mt-3 min-h-[1.25rem]">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-xs transition-opacity hover:opacity-70"
                          style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                        >
                          {member.email}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 2CHUB */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <h2 className="mb-6">{up.chubHeading}</h2>
            <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
              {up.chubBody}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
