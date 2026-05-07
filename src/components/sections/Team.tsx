import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useTranslation } from "../../i18n";
import { SectionHeader } from "../SectionHeader";
import { BlurOrbsField } from "../BlurOrbsField";

export function Team() {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <section
      id="team"
      className="relative w-full px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <BlurOrbsField intensity="subtle" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <SectionHeader eyebrow={t.team.eyebrow} heading={t.team.heading} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-14">
          {t.team.members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="border-t pt-8"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="mb-2">{member.name}</h3>
              <p
                className="text-sm uppercase tracking-[0.12em] mb-4"
                style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {member.role}
              </p>
              <p className="leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                {member.background}
              </p>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-block text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: "var(--ink)",
                    fontFamily: "'IBM Plex Mono', monospace",
                    borderBottom: "1px solid var(--border-strong)",
                    paddingBottom: "1px",
                  }}
                >
                  {member.email}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
