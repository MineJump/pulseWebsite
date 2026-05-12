import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useTranslation } from "../i18n";

const currentPath =
  typeof window !== "undefined" ? window.location.pathname : "/";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const active = currentPath === href || currentPath.startsWith(href + "/");
  return (
    <a
      href={href}
      className="transition-opacity hover:opacity-70"
      style={{
        color: active ? "var(--ink)" : "var(--text-muted)",
        fontWeight: active ? 500 : undefined,
      }}
    >
      {children}
    </a>
  );
}

export function Header() {
  const { t, language, toggleLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        backgroundColor: scrolled ? "#FAFAF7" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 h-20 md:h-28 flex items-center justify-between gap-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm flex-1 justify-center">
          <NavLink href="/methoden">{t.nav.methoden}</NavLink>
          <NavLink href="/features">{t.nav.features}</NavLink>
          <NavLink href="/ueber-uns">{t.nav.ueber_uns}</NavLink>
        </nav>

        {/* Right side: language + login */}
        <div className="hidden md:flex items-center gap-4">
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
            <span className="mx-1" style={{ opacity: 0.4 }}>/</span>
            <span
              style={{
                opacity: language === "en" ? 1 : 0.4,
                color: language === "en" ? "var(--ink)" : undefined,
              }}
            >
              EN
            </span>
          </button>

          <a
            href="https://app.pulse-research.de"
            className="text-sm uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-opacity hover:opacity-88"
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {t.nav.login}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-transform duration-200"
            style={{
              backgroundColor: "var(--ink)",
              transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "",
            }}
          />
          <span
            className="block w-5 h-px transition-opacity duration-200"
            style={{
              backgroundColor: "var(--ink)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-transform duration-200"
            style={{
              backgroundColor: "var(--ink)",
              transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-4"
          style={{
            backgroundColor: "rgba(250,250,247,0.98)",
            borderColor: "var(--border)",
          }}
        >
          <a
            href="/methoden"
            className="text-sm py-1"
            style={{ color: "var(--ink)" }}
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.methoden}
          </a>
          <a
            href="/features"
            className="text-sm py-1"
            style={{ color: "var(--ink)" }}
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.features}
          </a>
          <a
            href="/ueber-uns"
            className="text-sm py-1"
            style={{ color: "var(--ink)" }}
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.ueber_uns}
          </a>
          <div
            className="pt-3 flex items-center justify-between border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <button
              onClick={() => {
                toggleLanguage();
                setMobileOpen(false);
              }}
              className="text-sm uppercase tracking-[0.1em]"
              style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {language === "de" ? "DE / EN" : "EN / DE"}
            </button>
            <a
              href="https://app.pulse-research.de"
              className="text-sm uppercase tracking-[0.1em] px-4 py-2 rounded-full"
              style={{
                backgroundColor: "#2563eb",
                color: "#fff",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {t.nav.login}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
