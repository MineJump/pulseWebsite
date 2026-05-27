import { motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import StatusBadge from "./StatusBadge.jsx";

function LanguageToggleInline() {
  // Minimal inline toggle so we don't pull the full Header dependency just for the footer
  const { language, toggleLanguage } = useLang();
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="text-xs uppercase tracking-[0.14em] px-3 py-1 rounded-full material-thin focus-halo"
      style={{ color: "var(--ink)", fontFamily: "'IBM Plex Mono', monospace" }}
      aria-label={`Switch language. Current: ${language.toUpperCase()}`}
    >
      {language === "de" ? "EN" : "DE"}
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
          variant="elevated"
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
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
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
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
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
              fontFamily: "'IBM Plex Mono', monospace",
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
                fontFamily: "'IBM Plex Mono', monospace",
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
                fontFamily: "'IBM Plex Mono', monospace",
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
