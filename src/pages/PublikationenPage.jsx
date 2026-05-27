import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, fadeUpScale, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import Card from "../components/Card.jsx";
import { PUBLICATIONS } from "../data/publications.js";

function PublicationCard({ pub, variants }) {
  return (
    <motion.div variants={variants}>
      <Card variant="material" className="p-6 md:p-7 h-full flex flex-col gap-4">
        {/* Year + journal row */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span
            className="text-xs uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "var(--bg-elev)",
              color: "var(--accent)",
              fontFamily: "'IBM Plex Mono', monospace",
              border: "1px solid var(--border)",
            }}
          >
            {pub.year}
          </span>
          <span
            className="text-xs leading-relaxed text-right max-w-[60%]"
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {pub.journal}
          </span>
        </div>

        {/* Title */}
        {pub.doi ? (
          <a
            href={pub.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 focus-halo rounded-sm"
          >
            <h3
              className="text-base md:text-[1.05rem] leading-snug font-semibold transition-colors"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--ink)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
            >
              {pub.title}
            </h3>
          </a>
        ) : (
          <h3
            className="flex-1 text-base md:text-[1.05rem] leading-snug font-semibold"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--ink)" }}
          >
            {pub.title}
          </h3>
        )}

        {/* Authors + volume */}
        <div className="mt-auto pt-3" style={{ borderTop: "1px solid var(--border)" }}>
          <p
            className="text-xs leading-relaxed mb-2"
            style={{ color: "var(--text-muted)" }}
          >
            {pub.authors}
          </p>
          <div className="flex items-center justify-between gap-3">
            <span
              className="text-xs"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {pub.volume}
            </span>
            {pub.doi && (
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] transition-opacity focus-halo rounded-sm"
                style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                DOI →
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function PublikationenPage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const card = reduced
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
    : fadeUpScale;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);

  const p = t.publikationen;

  // Group by year descending
  const years = [...new Set(PUBLICATIONS.map((pub) => pub.year))].sort((a, b) => b - a);

  return (
    <PageScaffold>
      <main>
        <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1280px] mx-auto">

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-8 mb-16 -mt-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {p.stats.map((s) => (
                <motion.div key={s.label} variants={item} className="flex flex-col">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-[0.16em] mt-1"
                    style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Publications grouped by year */}
            {years.map((year) => (
              <div key={year} className="mb-16">
                <motion.p
                  className="text-xs uppercase tracking-[0.22em] mb-6 inline-flex items-center gap-2.5"
                  style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                >
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {year}
                </motion.p>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {PUBLICATIONS.filter((pub) => pub.year === year).map((pub) => (
                    <PublicationCard key={pub.id} pub={pub} variants={card} />
                  ))}
                </motion.div>
              </div>
            ))}

            {/* Note */}
            <motion.p
              className="text-sm leading-relaxed max-w-[640px] mt-4"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {p.note}
            </motion.p>
          </div>
        </section>
      </main>
    </PageScaffold>
  );
}
