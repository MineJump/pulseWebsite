import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";

// Web3Forms public access key. Safe to expose client-side (per Web3Forms docs);
// the only attack surface is spam, which we mitigate via honeypot + the domain
// allowlist that should be configured in the Web3Forms dashboard.
const WEB3FORMS_KEY = "4175eab3-578a-41cf-9010-ebb980406bd0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function PricingRequestModal({ open, onClose, plan }) {
  const { t } = useLang();
  const m = t.preise?.requestModal;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setEmail("");
      setMessage("");
      setBotcheck("");
      setSubmitting(false);
      setSent(false);
      setError(null);
      const tm = window.setTimeout(() => inputRef.current?.focus(), 140);
      return () => window.clearTimeout(tm);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && !submitting && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [open, onClose, submitting]);

  if (!m || !plan) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    // Honeypot — if a bot filled this hidden field, drop the submission
    // silently (pretend it worked so the bot doesn't retry).
    if (botcheck) {
      setSent(true);
      return;
    }

    setSubmitting(true);
    setError(null);
    const priceLine = plan.period ? `${plan.price} ${plan.period}` : plan.price;
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `${m.subjectPrefix}: ${plan.name}`,
      from_name: "2chub.com — Pricing-Anfrage",
      email: email,
      name: email,
      paket: plan.name,
      preis: priceLine,
      nachricht: message.trim() || "(keine)",
      // Web3Forms hidden honeypot key — empty value confirms a human
      botcheck: "",
    };

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) {
        setSent(true);
      } else {
        setError(data?.message || "request_failed");
      }
    } catch (err) {
      setError("network_error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={() => !submitting && onClose()}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: "rgba(15, 13, 41, 0.42)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pricing-modal-title"
            className="relative w-full max-w-[520px] bg-white"
            style={{
              borderRadius: 20,
              boxShadow:
                "0 24px 56px -16px rgba(15,13,41,0.32), 0 6px 14px -4px rgba(15,13,41,0.14)",
            }}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              aria-label={m.closeAria}
              className="absolute top-4 right-4 w-9 h-9 inline-flex items-center justify-center rounded-full focus-halo transition-opacity hover:opacity-60 disabled:opacity-30"
              style={{ color: "var(--text-dim)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 2l10 10M12 2L2 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {!sent ? (
              <form onSubmit={handleSubmit} className="p-7 md:p-8">
                {plan.highlight && (
                  <span
                    className="inline-block mb-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em]"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "#fff",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {t.preise.badge}
                  </span>
                )}
                <h3
                  id="pricing-modal-title"
                  className="text-xl md:text-2xl mb-1"
                  style={{
                    color: "var(--ink)",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-5"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {plan.price}
                  {plan.period ? ` ${plan.period}` : ""}
                </p>

                {plan.tagline && (
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {plan.tagline}
                  </p>
                )}

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {m.intro}
                </p>

                <div className="mb-3">
                  <label
                    htmlFor="pricing-modal-email"
                    className="block text-xs uppercase tracking-[0.16em] mb-2"
                    style={{
                      color: "var(--text-dim)",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {m.emailLabel}
                  </label>
                  <input
                    ref={inputRef}
                    id="pricing-modal-email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={submitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={m.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg text-sm focus-halo disabled:opacity-50"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--ink)",
                      backgroundColor: "var(--bg)",
                    }}
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="pricing-modal-message"
                    className="block text-xs uppercase tracking-[0.16em] mb-2"
                    style={{
                      color: "var(--text-dim)",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {m.messageLabel}
                  </label>
                  <textarea
                    id="pricing-modal-message"
                    rows={3}
                    disabled={submitting}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={m.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-lg text-sm focus-halo resize-none disabled:opacity-50"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--ink)",
                      backgroundColor: "var(--bg)",
                    }}
                  />
                </div>

                {/* Honeypot — visually hidden, only bots fill it */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-10000px",
                    width: 1,
                    height: 1,
                    opacity: 0,
                  }}
                />

                <p
                  className="text-xs leading-relaxed mb-4"
                  style={{ color: "var(--text-dim)" }}
                >
                  {m.contactNote}
                </p>

                {error && (
                  <p
                    className="text-xs mb-4"
                    style={{ color: "#dc2626" }}
                    role="alert"
                  >
                    {m.error}
                  </p>
                )}

                <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={submitting}
                    className="px-5 py-3 rounded-full text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-70 focus-halo disabled:opacity-30"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {m.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={submitting || !email}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-85 focus-halo disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--ink)",
                      color: "#fff",
                    }}
                  >
                    {submitting && (
                      <span
                        className="inline-block w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    {submitting ? m.sending : m.submit}
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-7 md:p-8 text-center">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{ backgroundColor: "var(--accent-soft)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M4 11l5 5 9-11"
                      stroke="var(--accent)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{
                    color: "var(--ink)",
                  }}
                >
                  {m.successTitle}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {m.successBody}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-full text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-85 focus-halo"
                  style={{
                    backgroundColor: "var(--ink)",
                    color: "#fff",
                  }}
                >
                  {m.successCta}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
