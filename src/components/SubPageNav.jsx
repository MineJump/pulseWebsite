import { useRoute } from "../lib/router.jsx";
import { useLang } from "../lib/i18n.jsx";

function buildCrumbs(path, t) {
  if (path === "/" || !path) return [];

  const [seg0, seg1] = path.split("/").filter(Boolean);
  const home = { label: "Home", href: "/" };

  if (seg0 === "plattform") {
    return [home, { label: t.nav.pulseEnvironment?.items?.[0]?.label || "Plattform", href: "/plattform" }];
  }
  if (seg0 === "app") {
    return [home, { label: t.nav.pulseEnvironment?.items?.[1]?.label || "Mobile App", href: "/app" }];
  }
  if (seg0 === "methoden") {
    const base = [home, { label: t.nav.methods || "Methoden", href: "/methoden" }];
    if (seg1) {
      const method = t.methods?.items?.find((m) => m.slug === seg1);
      if (method) base.push({ label: method.title, href: `/methoden/${seg1}` });
    }
    return base;
  }
  if (seg0 === "features") {
    return [home, { label: t.features?.eyebrow || "Features", href: "/features" }];
  }
  if (seg0 === "anwendungen") {
    const base = [home, { label: t.nav.applications, href: "/anwendungen" }];
    if (seg1 === "publikationen") {
      base.push({ label: t.nav.publications, href: "/anwendungen/publikationen" });
    }
    return base;
  }
  if (seg0 === "preise") return [home, { label: t.nav.pricing, href: "/preise" }];
  if (seg0 === "ueber-uns") return [home, { label: t.nav.about, href: "/ueber-uns" }];
  if (seg0 === "impressum") return [home, { label: "Impressum", href: "/impressum" }];
  if (seg0 === "privacy") return [home, { label: t.footer?.privacy || "Privacy", href: "/privacy" }];

  return [];
}

export default function SubPageNav() {
  const { path } = useRoute();
  const { t } = useLang();

  const crumbs = buildCrumbs(path, t);
  if (crumbs.length < 2) return null;

  return (
    <div
      className="sticky top-14 md:top-16 z-40 w-full"
      style={{
        backgroundColor: "rgba(250, 250, 247, 0.82)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        backdropFilter: "blur(16px) saturate(180%)",
        borderBottom: "1px solid var(--border-hair)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 h-9 flex items-center">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center">
            {crumbs.map((crumb, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={crumb.href} className="flex items-center">
                  {i > 0 && (
                    <span
                      className="mx-2 text-xs select-none"
                      aria-hidden="true"
                      style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      /
                    </span>
                  )}
                  {isLast ? (
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)", fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <a
                      href={crumb.href}
                      className="text-xs focus-halo rounded-sm transition-colors"
                      style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
                    >
                      {crumb.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
