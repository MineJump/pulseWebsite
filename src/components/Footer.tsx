import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTranslation } from "../i18n";
import { BlurOrbsField } from "./BlurOrbsField";

export function Footer() {
  const { t, language, toggleLanguage } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };

  return (
    <footer
      id="contact"
      className="relative w-full px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-10 overflow-hidden"
    >
      <BlurOrbsField intensity="subtle" />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div
          className="border-t pt-14 md:pt-20 mb-16 md:mb-24"
          style={{ borderColor: "var(--border)" }}
        >
          <motion.h2
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[780px]"
          >
            {t.contact.heading}
          </motion.h2>
          <motion.p
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 max-w-[560px] text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {t.contact.subheading}
          </motion.p>
          <motion.div
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm uppercase tracking-[0.12em] transition-opacity rounded-full"
              style={{
                backgroundColor: "var(--btn-primary-bg)",
                color: "var(--btn-primary-fg)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t.contact.cta}
              <span className="ml-2">→</span>
            </a>
            <div
              className="flex flex-col gap-1 text-sm"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              <a
                href={`mailto:${t.contact.email}`}
                className="transition-opacity hover:opacity-70"
                style={{ color: "var(--ink)" }}
              >
                {t.contact.email}
              </a>
              <span style={{ color: "var(--text-dim)" }}>{t.contact.location}</span>
            </div>
          </motion.div>
        </div>

        <div
          className="border-t pt-5 pb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-sm"
            style={{
              color: "var(--text-dim)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            © {new Date().getFullYear()} {t.footer.legalName}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${t.contact.email}`}
              className="text-sm py-1 transition-opacity duration-200 hover:opacity-70"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {t.footer.contact}
            </a>
            <a
              href="/impressum"
              className="text-sm py-1 transition-opacity duration-200 hover:opacity-70"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {t.footer.imprint}
            </a>
            <a
              href="/privacy"
              className="text-sm py-1 transition-opacity duration-200 hover:opacity-70"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {t.footer.privacy}
            </a>
            <a
              href="https://2chub.de"
              className="text-sm py-1 transition-opacity duration-200 hover:opacity-70"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              2chub
            </a>
            <button
              onClick={toggleLanguage}
              className="text-sm uppercase tracking-[0.1em] py-1 transition-opacity duration-200 hover:opacity-70"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
              aria-label="Toggle language"
            >
              <span style={{ opacity: language === "de" ? 1 : 0.4, color: language === "de" ? "var(--ink)" : undefined }}>DE</span>
              <span className="mx-1" style={{ opacity: 0.4 }}>/</span>
              <span style={{ opacity: language === "en" ? 1 : 0.4, color: language === "en" ? "var(--ink)" : undefined }}>EN</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
