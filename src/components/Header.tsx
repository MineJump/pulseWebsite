import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useTranslation } from "../i18n";

export function Header() {
  const { t, language, toggleLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(250, 250, 247, 0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 h-20 md:h-28 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#research"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            {t.nav.research}
          </a>
          <a
            href="#platform"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            {t.nav.platform}
          </a>
          <a
            href="#team"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            {t.nav.team}
          </a>
          <a
            href="#contact"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            {t.nav.contact}
          </a>
        </nav>

        <button
          onClick={toggleLanguage}
          className="text-sm uppercase tracking-[0.1em] py-2 transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
          aria-label="Toggle language"
        >
          <span
            style={{
              opacity: language === "de" ? 1 : 0.4,
              color: language === "de" ? "var(--ink)" : undefined,
            }}
          >
            DE
          </span>
          <span className="mx-1" style={{ opacity: 0.4 }}>
            /
          </span>
          <span
            style={{
              opacity: language === "en" ? 1 : 0.4,
              color: language === "en" ? "var(--ink)" : undefined,
            }}
          >
            EN
          </span>
        </button>
      </div>
    </header>
  );
}
