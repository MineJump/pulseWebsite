import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import { PUBLICATIONS } from "../data/publications.js";

const MONO = { fontFamily: "'IBM Plex Mono', monospace" };

const ALL = "all";

function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark
        style={{
          backgroundColor: "var(--accent)",
          color: "#fff",
          borderRadius: 2,
          padding: "0 1px",
        }}
      >
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function TableRow({ pub, query, index, reduced }) {
  const [hover, setHover] = useState(false);

  const rowVariants = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { duration: 0.18, delay: index * 0.04 } } };

  return (
    <motion.tr
      variants={rowVariants}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.12 } }}
      layout
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? "var(--bg-elev)" : "transparent",
        transition: "background-color 0.15s ease",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Year */}
      <td
        className="py-4 pr-5 align-top whitespace-nowrap text-xs"
        style={{ color: "var(--accent)", ...MONO, width: "4rem" }}
      >
        {pub.year}
      </td>

      {/* Title + Authors */}
      <td className="py-4 pr-5 align-top">
        {pub.doi ? (
          <a
            href={pub.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-halo rounded-sm"
            style={{ display: "block" }}
          >
            <span
              className="text-sm font-semibold leading-snug block mb-1"
              style={{
                ...MONO,
                color: hover ? "var(--accent)" : "var(--ink)",
                transition: "color 0.15s ease",
              }}
            >
              {highlight(pub.title, query)}
            </span>
          </a>
        ) : (
          <span
            className="text-sm font-semibold leading-snug block mb-1"
            style={{ ...MONO, color: "var(--ink)" }}
          >
            {highlight(pub.title, query)}
          </span>
        )}
        <span
          className="text-xs leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {highlight(pub.authors, query)}
        </span>
      </td>

      {/* Journal — hidden on small screens */}
      <td
        className="hidden md:table-cell py-4 pr-5 align-top text-xs leading-relaxed"
        style={{ color: "var(--text-dim)", ...MONO, maxWidth: "16rem" }}
      >
        <span className="block">{highlight(pub.journal, query)}</span>
        <span style={{ color: "var(--border)", marginTop: 2, display: "block" }}>
          {pub.volume}
        </span>
      </td>

      {/* DOI link */}
      <td className="py-4 align-top whitespace-nowrap text-right" style={{ width: "4rem" }}>
        {pub.doi ? (
          <a
            href={pub.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.14em] focus-halo rounded-sm transition-opacity hover:opacity-60"
            style={{ color: "var(--accent)", ...MONO }}
          >
            DOI →
          </a>
        ) : (
          <span className="text-xs" style={{ color: "var(--border)", ...MONO }}>—</span>
        )}
      </td>
    </motion.tr>
  );
}

export default function PublikationenPage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);

  const p = t.publikationen;

  const years = useMemo(
    () => [...new Set(PUBLICATIONS.map((pub) => pub.year))].sort((a, b) => b - a),
    []
  );

  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PUBLICATIONS.filter((pub) => {
      if (yearFilter !== ALL && pub.year !== yearFilter) return false;
      if (!q) return true;
      return (
        pub.title.toLowerCase().includes(q) ||
        pub.authors.toLowerCase().includes(q) ||
        pub.journal.toLowerCase().includes(q)
      );
    });
  }, [query, yearFilter]);

  return (
    <PageScaffold>
      <main>
        <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
          <div className="max-w-[1280px] mx-auto">

            {/* ── Toolbar ── */}
            <motion.div
              className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {/* Search */}
              <motion.div variants={item} className="relative flex-1 w-full sm:max-w-sm">
                <span
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none select-none"
                  style={{ color: "var(--text-dim)", ...MONO }}
                  aria-hidden="true"
                >
                  ⌕
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={p.searchPlaceholder}
                  className="w-full pl-8 pr-4 py-2.5 text-sm rounded-lg focus-halo"
                  style={{
                    ...MONO,
                    background: "var(--bg-elev)",
                    border: "1px solid var(--border)",
                    color: "var(--ink)",
                    outline: "none",
                  }}
                />
              </motion.div>

              {/* Year filters */}
              <motion.div variants={item} className="flex flex-wrap gap-2">
                <button
                  onClick={() => setYearFilter(ALL)}
                  className="text-xs uppercase tracking-[0.14em] px-3 py-1.5 rounded-full transition-colors focus-halo"
                  style={{
                    ...MONO,
                    backgroundColor: yearFilter === ALL ? "var(--accent)" : "var(--bg-elev)",
                    color: yearFilter === ALL ? "#fff" : "var(--text-dim)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {p.filterAll}
                </button>
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setYearFilter(y)}
                    className="text-xs uppercase tracking-[0.14em] px-3 py-1.5 rounded-full transition-colors focus-halo"
                    style={{
                      ...MONO,
                      backgroundColor: yearFilter === y ? "var(--accent)" : "var(--bg-elev)",
                      color: yearFilter === y ? "#fff" : "var(--text-dim)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {y}
                  </button>
                ))}
              </motion.div>

              {/* Result count */}
              <motion.span
                variants={item}
                className="text-xs sm:ml-auto whitespace-nowrap"
                style={{ color: "var(--text-dim)", ...MONO }}
              >
                {filtered.length} / {PUBLICATIONS.length} {p.entries}
              </motion.span>
            </motion.div>

            {/* ── Table ── */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-elev)" }}>
                    <th
                      className="py-3 px-0 pr-5 text-left text-xs uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-dim)", ...MONO, paddingLeft: "1.25rem" }}
                    >
                      {p.colYear}
                    </th>
                    <th
                      className="py-3 pr-5 text-left text-xs uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-dim)", ...MONO }}
                    >
                      {p.colTitle}
                    </th>
                    <th
                      className="hidden md:table-cell py-3 pr-5 text-left text-xs uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-dim)", ...MONO }}
                    >
                      {p.colJournal}
                    </th>
                    <th className="py-3 pr-5 text-right text-xs uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-dim)", ...MONO }}
                    >
                      {p.colDoi}
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{ background: "var(--bg)" }}
                >
                  <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? (
                      filtered.map((pub, i) => (
                        <TableRow
                          key={pub.id}
                          pub={pub}
                          query={query.trim()}
                          index={i}
                          reduced={reduced}
                        />
                      ))
                    ) : (
                      <motion.tr
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <td
                          colSpan={4}
                          className="py-12 text-center text-sm"
                          style={{ color: "var(--text-dim)", ...MONO }}
                        >
                          {p.noResults}
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* Note */}
            <motion.p
              className="text-xs leading-relaxed max-w-[640px] mt-6"
              style={{ color: "var(--text-dim)", ...MONO }}
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
