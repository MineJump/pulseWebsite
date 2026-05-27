import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import TimelineDiagram from "../components/diagrams/TimelineDiagram.jsx";

export default function UeberUnsPage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);

  const u = t.ueberUns;
  const team = t.team;

  return (
    <PageScaffold>
      <main>
        <PageHero eyebrow={u.eyebrow} title={u.title} intro={u.subtitle} />
        <section className="relative z-10 w-full -mt-12 md:-mt-16 mb-12 md:mb-16">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
            <motion.p
              variants={item}
              initial={reduced ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="text-base md:text-lg leading-relaxed max-w-[820px]"
              style={{ color: "var(--text-muted)" }}
            >
              {u.intro}
            </motion.p>
          </div>
        </section>
        <section className="relative w-full px-6 md:px-12 lg:px-16 pb-20 overflow-hidden">
          <div className="relative z-10 max-w-[1100px] mx-auto">

          {u.timeline && (
            <motion.section
              id="team"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-16"
            >
              <motion.p
                variants={item}
                className="text-xs uppercase tracking-[0.22em] mb-3"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {u.timeline.eyebrow}
              </motion.p>
              <motion.h2 variants={item} className="mb-5">
                {u.timeline.title}
              </motion.h2>
              <motion.p
                variants={item}
                className="text-base md:text-lg leading-relaxed max-w-[820px] mb-10"
                style={{ color: "var(--text-muted)" }}
              >
                {u.timeline.intro}
              </motion.p>
              <motion.div variants={item} className="mt-4">
                <TimelineDiagram />
              </motion.div>
            </motion.section>
          )}

          {team && team.members && (
            <motion.section
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-20"
            >
              <motion.p
                variants={item}
                className="text-xs uppercase tracking-[0.22em] mb-3"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {team.eyebrow}
              </motion.p>
              <motion.h2 variants={item} className="mb-10">
                {team.heading}
              </motion.h2>
              <motion.div
                variants={item}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
              >
                {team.members.map((m, i) => (
                  <Card
                    key={m.name}
                    variant="material"
                    className="p-5 flex flex-col h-full"
                  >
                    <div
                      className="w-full aspect-square rounded-xl overflow-hidden mb-5"
                      style={{ backgroundColor: "var(--bg-elev)" }}
                    >
                      <img
                        src={`/Person${i + 1}.jpg`}
                        alt={m.name}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3
                        className="text-base leading-tight mb-1.5"
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontWeight: 500,
                          color: "var(--ink)",
                        }}
                      >
                        {m.name}
                      </h3>
                      <p
                        className="text-xs min-h-[2.5rem]"
                        style={{
                          color: "var(--accent)",
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {m.role}
                      </p>
                      <p
                        className="text-sm mt-3 leading-relaxed flex-1"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {m.background}
                      </p>
                      {m.email && (
                        <a
                          href={`mailto:${m.email}`}
                          className="text-xs mt-3 transition-opacity hover:opacity-70 focus-halo rounded-sm"
                          style={{
                            color: "var(--text-dim)",
                            fontFamily: "'IBM Plex Mono', monospace",
                          }}
                        >
                          {m.email}
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </motion.div>
            </motion.section>
          )}

          {u.mehrAlsSaas && (
            <motion.section
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-20"
            >
              <motion.p
                variants={item}
                className="text-xs uppercase tracking-[0.22em] mb-3"
                style={{
                  color: "var(--accent)",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {u.mehrAlsSaas.eyebrow}
              </motion.p>
              <motion.h2 variants={item} className="mb-5">
                {u.mehrAlsSaas.title}
              </motion.h2>
              <motion.p
                variants={item}
                className="text-base md:text-lg leading-relaxed max-w-[820px] mb-10"
                style={{ color: "var(--text-muted)" }}
              >
                {u.mehrAlsSaas.body}
              </motion.p>
              <motion.div
                variants={item}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                {u.mehrAlsSaas.services.map((s) => (
                  <Card key={s.title} variant="material" className="p-6">
                    <h3
                      className="text-lg mb-2"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {s.description}
                    </p>
                  </Card>
                ))}
              </motion.div>
              <motion.div variants={item}>
                <Button
                  href="mailto:info@2chub.com?subject=PULSE%20Anfrage"
                  variant="primary"
                  iconRight={<span>→</span>}
                >
                  {u.mehrAlsSaas.cta}
                </Button>
              </motion.div>
            </motion.section>
          )}
          </div>
        </section>
      </main>
    </PageScaffold>
  );
}
