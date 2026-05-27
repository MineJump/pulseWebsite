import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { useRoute } from "../lib/router.jsx";
import Logo from "./Logo.jsx";

const LOGIN_HREF = "https://pulse.2chub.com";

function NavLink({ href, label, currentPath, onClick }) {
  const active = currentPath === href || currentPath.startsWith(href + "/");
  return (
    <a
      href={href}
      onClick={onClick}
      className="transition-opacity hover:opacity-70"
      style={{
        color: active ? "var(--ink)" : "var(--text-muted)",
        fontWeight: active ? 500 : undefined,
      }}
    >
      {label}
    </a>
  );
}

function NavDropdown({ label, items, currentPath }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimer = useRef(null);

  const active = items.some(
    (it) => currentPath === it.href || currentPath.startsWith(it.href + "/")
  );

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const lit = active || hovered || open;

  return (
    <div
      ref={wrapperRef}
      className="relative inline-flex"
      onMouseEnter={() => {
        cancelClose();
        setHovered(true);
        setOpen(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        scheduleClose();
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70 focus-halo rounded-sm"
        style={{
          color: lit ? "var(--ink)" : "var(--text-muted)",
          fontWeight: active ? 500 : undefined,
        }}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{label}</span>
        <svg
          width="9"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 180ms ease",
          }}
          aria-hidden="true"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 overflow-hidden"
          style={{
            minWidth: 320,
            borderRadius: 16,
            backgroundColor: "#ffffff",
            border: "1px solid rgba(15, 13, 41, 0.08)",
            boxShadow:
              "0 18px 48px -16px rgba(15, 13, 41, 0.22), 0 4px 12px -4px rgba(15, 13, 41, 0.08)",
          }}
        >
          <ul className="p-2">
            {items.map((it) => {
              const itemActive =
                currentPath === it.href || currentPath.startsWith(it.href + "/");
              return (
                <li key={it.href}>
                  <a
                    role="menuitem"
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg transition-colors focus-halo"
                    style={{
                      backgroundColor: itemActive
                        ? "rgba(15, 13, 41, 0.04)"
                        : "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(15, 13, 41, 0.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = itemActive
                        ? "rgba(15, 13, 41, 0.04)"
                        : "transparent")
                    }
                  >
                    <p
                      className="text-sm leading-tight"
                      style={{
                        color: "var(--ink)",
                        fontWeight: 500,
                      }}
                    >
                      {it.label}
                    </p>
                    {it.description && (
                      <p
                        className="text-xs mt-0.5 leading-snug"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {it.description}
                      </p>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileMenuOverlay({ open, onClose, navItems, pulseItems, t, language, toggleLanguage, currentPath }) {
  const [pulseExpanded, setPulseExpanded] = useState(true);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
          style={{
            background: "rgba(250, 250, 247, 0.97)",
            WebkitBackdropFilter: "blur(28px) saturate(190%)",
            backdropFilter: "blur(28px) saturate(190%)",
          }}
        >
          {/* Top bar with logo + close button — matches header height */}
          <div className="flex items-center justify-between px-6 h-14 md:h-16 flex-shrink-0">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Menü schließen"
              className="relative w-10 h-10 flex items-center justify-center -mr-2 focus-halo rounded-full"
            >
              <span
                className="absolute w-6 h-[2px] rounded-full"
                style={{
                  backgroundColor: "var(--ink)",
                  transform: "rotate(45deg)",
                }}
              />
              <span
                className="absolute w-6 h-[2px] rounded-full"
                style={{
                  backgroundColor: "var(--ink)",
                  transform: "rotate(-45deg)",
                }}
              />
            </button>
          </div>

          {/* Scrollable nav body */}
          <motion.nav
            className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.06, duration: 0.26, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {/* PULSE Environment with expandable sub-items */}
            <div className="border-b" style={{ borderColor: "var(--border)" }}>
              <button
                type="button"
                onClick={() => setPulseExpanded((v) => !v)}
                className="w-full flex items-center justify-between py-4 text-left focus-halo rounded-md"
                aria-expanded={pulseExpanded}
              >
                <span
                  className="text-2xl"
                  style={{
                    color: "var(--ink)",
                    fontWeight: 500,
                  }}
                >
                  {t.nav.platform}
                </span>
                <motion.svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  animate={{ rotate: pulseExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="var(--text-muted)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {pulseExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 pl-3 flex flex-col gap-3">
                      {pulseItems.map((it) => (
                        <a
                          key={it.href}
                          href={it.href}
                          onClick={onClose}
                          className="block py-1 focus-halo rounded-md"
                        >
                          <span
                            className="block text-base"
                            style={{
                              color: "var(--ink)",
                            }}
                          >
                            {it.label}
                          </span>
                          {it.description && (
                            <span
                              className="block text-xs mt-0.5"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {it.description}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other top-level nav items */}
            {navItems.map((it) => {
              const active = currentPath === it.href || currentPath.startsWith(it.href + "/");
              return (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={onClose}
                  className="py-4 border-b focus-halo rounded-md"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-2xl"
                    style={{
                      color: "var(--ink)",
                      fontWeight: active ? 500 : undefined,
                    }}
                  >
                    {it.label}
                  </span>
                </a>
              );
            })}
          </motion.nav>

          {/* Bottom bar: lang toggle + login */}
          <motion.div
            className="flex-shrink-0 px-6 pt-4 pb-8 flex items-center justify-between gap-4 border-t"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.26, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ borderColor: "var(--border)" }}
          >
            <button
              onClick={toggleLanguage}
              className="text-sm uppercase tracking-[0.14em] py-2 transition-opacity hover:opacity-70 focus-halo rounded-md"
              style={{
                color: "var(--text-dim)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
              aria-label="Sprache wechseln"
            >
              <span style={{ opacity: language === "de" ? 1 : 0.4, color: language === "de" ? "var(--ink)" : undefined }}>DE</span>
              <span className="mx-1" style={{ opacity: 0.4 }}>/</span>
              <span style={{ opacity: language === "en" ? 1 : 0.4, color: language === "en" ? "var(--ink)" : undefined }}>EN</span>
            </button>
            <a
              href={LOGIN_HREF}
              onClick={onClose}
              className="text-sm uppercase tracking-[0.12em] px-6 py-3 rounded-full transition-opacity hover:opacity-88 focus-halo"
              style={{
                backgroundColor: "#2563eb",
                color: "#fff",
              }}
            >
              {t.nav.login}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const { t, language, toggleLanguage } = useLang();
  const { path } = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pulseItems = t.nav.pulseEnvironment?.items || [];
  const navItemsForMobile = [
    { href: "/anwendungen", label: t.nav.applications },
    { href: "/anwendungen/publikationen", label: t.nav.publications },
    { href: "/preise", label: t.nav.pricing },
    { href: "/ueber-uns", label: t.nav.about },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(250, 250, 247, 0.62)"
            : "rgba(250, 250, 247, 0.38)",
          WebkitBackdropFilter: scrolled
            ? "blur(28px) saturate(190%)"
            : "blur(22px) saturate(180%)",
          backdropFilter: scrolled
            ? "blur(28px) saturate(190%)"
            : "blur(22px) saturate(180%)",
          borderBottom: scrolled
            ? "1px solid rgba(15, 13, 41, 0.08)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 1px 24px -8px rgba(15, 13, 41, 0.08)"
            : "inset 0 1px 0 rgba(255, 255, 255, 0.45)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 h-14 md:h-16 flex items-center justify-between gap-8">
          <Logo />

          {/* Desktop nav — visible from lg (1024px+) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm flex-1 justify-center">
            <NavDropdown
              label={t.nav.platform}
              items={pulseItems}
              currentPath={path}
            />
            <NavLink
              href="/anwendungen"
              label={t.nav.applications}
              currentPath={path}
            />
            <NavLink href="/preise" label={t.nav.pricing} currentPath={path} />
            <NavLink href="/ueber-uns" label={t.nav.about} currentPath={path} />
          </nav>

          {/* Right side: language + login — visible from lg */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm uppercase tracking-[0.1em] py-2 transition-opacity duration-200 hover:opacity-70"
              style={{
                color: "var(--text-dim)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
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

            <a
              href={LOGIN_HREF}
              className="text-sm uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-opacity hover:opacity-88"
              style={{
                backgroundColor: "#2563eb",
                color: "#fff",
              }}
            >
              {t.nav.login}
            </a>
          </div>

          {/* Mobile hamburger — visible up to lg */}
          <button
            type="button"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center -mr-2 focus-halo rounded-full"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={mobileOpen}
          >
            <span
              className="absolute w-6 h-[2px] rounded-full"
              style={{ backgroundColor: "var(--ink)", top: "13px" }}
            />
            <span
              className="absolute w-6 h-[2px] rounded-full"
              style={{ backgroundColor: "var(--ink)", top: "19px" }}
            />
            <span
              className="absolute w-6 h-[2px] rounded-full"
              style={{ backgroundColor: "var(--ink)", top: "25px" }}
            />
          </button>
        </div>
      </header>

      <MobileMenuOverlay
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItemsForMobile}
        pulseItems={pulseItems}
        t={t}
        language={language}
        toggleLanguage={() => {
          toggleLanguage();
        }}
        currentPath={path}
      />
    </>
  );
}
