import { motion } from "framer-motion";
import { Smartphone, Palette, LayoutDashboard, Download, ShieldCheck, Wrench, MapPin, Footprints, Activity, Waves, Volume2, BatteryMedium, Phone, Monitor, Keyboard, Heart, Watch, Wifi, Music, Headphones } from "lucide-react";

const pillarIcons = [Smartphone, Palette, LayoutDashboard, Download, ShieldCheck];
const pillarSpan = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "sm:col-span-2 lg:col-span-3",
];
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BlurOrbsField } from "../components/BlurOrbsField";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "../i18n";

const exportFormats = ["CSV", "R-Dataset (.rds)", "SPSS (.sav)", "JSON", "REST-API"];

const MODULE_ICONS: Record<string, React.ElementType> = {
  "Location Tracking": MapPin,
  "Pedometer": Footprints,
  "Activity Tracking": Activity,
  "Motion Sensor": Waves,
  "Ambient Sound & Light": Volume2,
  "Battery Monitoring": BatteryMedium,
  "Phone Call Events": Phone,
  "Screen Time & App Events": Monitor,
  "PULSE Keyboard": Keyboard,
  "Apple Health / Health Connect": Heart,
  "Garmin Smartwatch Integration": Watch,
  "Wi-Fi & Bluetooth": Wifi,
  "Music Tracking": Music,
  "Spotify History": Headphones,
};

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
  const mp = t.methodenPage;

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
              <span className="inline-block w-2 h-2 rounded-full pulse-dot-shift" aria-hidden="true" />
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
              {mp.platformTag}
            </motion.p>
            <motion.h2
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-12 max-w-[780px]"
            >
              {mp.platformHeading}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mp.pillars.map((pillar, i) => {
                const Icon = pillarIcons[i];
                const isWide = i === 0 || i === 3;
                const isFull = i === 4;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={initial}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className={`liquid-glass rounded-2xl flex ${isFull ? "flex-col md:flex-row md:items-center gap-8 md:gap-12" : "flex-col gap-4"} ${isWide || isFull ? "p-8 md:p-10" : "p-6 md:p-7"} ${pillarSpan[i]}`}
                    style={isFull ? { backgroundColor: "var(--brand-blue)" } : {}}
                  >
                    <div className={`flex ${isFull ? "flex-col gap-4 md:min-w-[260px]" : "flex-col gap-4"}`}>
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: isFull ? "rgba(255,255,255,0.12)" : "rgba(13,35,66,0.08)" }}
                      >
                        <Icon size={20} style={{ color: isFull ? "rgba(255,255,255,0.9)" : "var(--brand-blue)" }} strokeWidth={1.5} />
                      </div>
                      <h3
                        className={isWide || isFull ? "text-xl" : "text-base"}
                        style={{ color: isFull ? "#fff" : "var(--ink)" }}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: isFull ? "rgba(255,255,255,0.6)" : "var(--text-muted)" }}
                    >
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Passive Sensing */}
        <section id="beobachten" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <SectionTag>Passive Sensing</SectionTag>
            <h2 className="mb-4">{mp.sensingHeading}</h2>
            <p className="mb-12 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {mp.sensingBody}
            </p>
            <h3 className="mb-2">{mp.sensingModulesHeading}</h3>
            <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
              {mp.sensingModulesNote}
            </p>
            <div className="mb-14">
              {mp.sensingCategories.map((cat, i) => {
                const colors = ["#FF9242", "#43C6AC", "#4B6BFB", "#8B5CF6", "#0D9488"];
                const color = colors[i % colors.length];
                return (
                  <motion.div
                    key={cat.name}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="py-4"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      <p
                        className="text-xs uppercase tracking-[0.2em]"
                        style={{ color, fontFamily: "'IBM Plex Mono', monospace" }}
                      >
                        {cat.name}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.modules.map((m, mi) => (
                        <motion.span
                          key={m}
                          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.07 + mi * 0.05 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                          style={{
                            backgroundColor: `${color}12`,
                            color: "var(--ink)",
                            border: `1px solid ${color}30`,
                          }}
                        >
                          {(() => { const Icon = MODULE_ICONS[m]; return Icon ? <Icon size={11} style={{ color, flexShrink: 0 }} strokeWidth={1.8} /> : null; })()}
                          {m}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <h3 className="mb-4">{mp.sensingPrivacyHeading}</h3>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {mp.sensingPrivacyBody}
            </p>
            <div className="flex flex-col gap-4">
              {mp.sensingPrivacyPoints.map((point, i) => (
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

        {/* ESM / EMA */}
        <section id="befragen" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="max-w-[900px] mx-auto">
            <SectionTag>ESM / EMA</SectionTag>
            <h2 className="mb-4">{mp.esmHeading}</h2>
            <p className="mb-12 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {mp.esmBody}
            </p>
            <h3 className="mb-4">{mp.esmQaHeading}</h3>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {mp.esmQaBody}
            </p>
            <div className="flex flex-col gap-3">
              {mp.esmQaItems.map((item, i) => (
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

        {/* Interventions */}
        <section id="intervenieren" className="w-full px-6 md:px-12 lg:px-16 py-20 md:py-28" style={{ backgroundColor: "var(--bg-elev)" }}>
          <div className="max-w-[900px] mx-auto">
            <SectionTag>{mp.interventionsTag}</SectionTag>
            <h2 className="mb-4">{mp.interventionsHeading}</h2>
            <p className="mb-12 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {mp.interventionsBody}
            </p>
            <h3 className="mb-6">{mp.interventionTypesHeading}</h3>
            <div className="flex flex-col gap-3 mb-14">
              {mp.interventionTypes.map((item, i) => (
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
            <h3 className="mb-6">{mp.interventionStudyHeading}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mp.studyDesigns.map((design, i) => (
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

        {/* Analysis */}
        <section id="auswerten" className="w-full px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-12">
          <div className="max-w-[900px] mx-auto">
            <SectionTag>{mp.analysisTag}</SectionTag>
            <h2 className="mb-4">{mp.analysisHeading}</h2>
            <p className="mb-12 text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {mp.analysisBody}
            </p>
            <h3 className="mb-6">{mp.computationsHeading}</h3>
            <div className="flex flex-col gap-3 mb-14">
              {mp.computations.map((item, i) => (
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
            <h3 className="mb-4">{mp.vizHeading}</h3>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {mp.vizBody}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {mp.visualizations.map((viz, i) => (
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
            <motion.div
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Left: dark card */}
              <div
                className="relative rounded-2xl p-10 md:p-12 flex flex-col justify-between gap-10 overflow-hidden min-h-[280px]"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                {/* Background icon */}
                <Wrench
                  size={180}
                  strokeWidth={1}
                  className="absolute -top-6 -right-6 pointer-events-none select-none"
                  style={{ color: "rgba(255,255,255,0.07)" }}
                  aria-hidden="true"
                />
                <h2
                  className="relative z-10 leading-tight"
                  style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)" }}
                >
                  {mp.exportHeading}
                </h2>
                <p className="relative z-10 text-sm leading-relaxed max-w-[360px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {mp.exportBody}
                </p>
              </div>

              {/* Right: light card with accent border */}
              <div
                className="rounded-2xl p-10 md:p-12 flex flex-col justify-center gap-6"
                style={{ border: "1px solid var(--accent)", backgroundColor: "var(--bg)" }}
              >
                <p
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]"
                  style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                  Export-Formate
                </p>
                <div className="flex flex-wrap gap-2">
                  {exportFormats.map((fmt) => (
                    <span
                      key={fmt}
                      className="px-3 py-1.5 rounded-full text-xs"
                      style={{
                        border: "1px solid var(--border-strong)",
                        color: "var(--ink)",
                        fontFamily: "'IBM Plex Mono', monospace",
                        backgroundColor: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {mp.exportFormatsNote}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
