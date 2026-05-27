import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import StatusBadge from "./StatusBadge.jsx";

function LanguageToggleInline() {
  const { language, toggleLanguage } = useLang();
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="text-sm uppercase tracking-[0.1em] py-2 transition-opacity duration-200 hover:opacity-70 focus-halo rounded-sm"
      style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
      aria-label="Toggle language"
    >
      <span style={{ opacity: language === "de" ? 1 : 0.4, color: language === "de" ? "var(--ink)" : undefined }}>DE</span>
      <span className="mx-1" style={{ opacity: 0.4 }}>/</span>
      <span style={{ opacity: language === "en" ? 1 : 0.4, color: language === "en" ? "var(--ink)" : undefined }}>EN</span>
    </button>
  );
}

export default function Footer() {
  const { t, language } = useLang();
  const reduced = usePrefersReducedMotion();

  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;

  return (
    <footer
      id="contact"
      className="relative w-full px-6 md:px-12 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-10 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <Card
          variant="material"
          className="relative overflow-hidden px-6 md:px-10 py-8 md:py-10 mb-12 md:mb-16"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 md:items-center"
          >
            <div className="md:col-span-7">
              <motion.h3
                variants={item}
                className="text-2xl md:text-[1.65rem] leading-tight mb-3"
              >
                {t.contact.heading}
              </motion.h3>
              <motion.p
                variants={item}
                className="text-sm md:text-base leading-relaxed max-w-[540px]"
                style={{ color: "var(--text-muted)" }}
              >
                {t.contact.subheading}
              </motion.p>
            </div>
            <motion.div
              variants={item}
              className="md:col-span-5 flex flex-col items-start md:items-end gap-6"
            >
              <div className="flex flex-col items-center gap-3">
                <Button
                  href={`mailto:${t.contact.email}`}
                  variant="primary"
                  iconRight={<span>→</span>}
                >
                  {t.contact.cta}
                </Button>
                <div
                  className="flex flex-row gap-3 items-baseline text-xs"
                >
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="focus-halo rounded-sm transition-colors"
                    style={{ color: "var(--ink)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink)")}
                  >
                    {t.contact.email}
                  </a>
                  <span aria-hidden="true" style={{ color: "var(--text-dim)" }}>·</span>
                  <span style={{ color: "var(--text-dim)" }}>{t.contact.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Card>

        <div className="hairline-mask mb-5" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2">
          <p
            className="text-sm"
            style={{
              color: "var(--text-dim)",
            }}
          >
            © {new Date().getFullYear()} {t.footer.legalName}
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <StatusBadge />
            <a
              href="/impressum"
              className="text-sm py-2 focus-halo rounded-sm transition-colors"
              style={{
                color: "var(--text-dim)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              {t.footer.imprint}
            </a>
            <a
              href="/privacy"
              className="text-sm py-2 focus-halo rounded-sm transition-colors"
              style={{
                color: "var(--text-dim)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              {language === "de" ? "Datenschutz" : "Privacy"}
            </a>
            <LanguageToggleInline />
          </div>
        </div>
      </div>
    </footer>
  );
}
