import { useLang } from "../lib/i18n.jsx";
import { usePrefersReducedMotion } from "../lib/hooks.js";
import { fadeUp, fadeUpScale, stagger } from "../lib/motion.js";
import PageScaffold from "../components/PageScaffold.jsx";
import PageHero from "../components/PageHero.jsx";
import CatalogSection from "../components/CatalogSection.jsx";

export default function FeaturesPage() {
  const { t } = useLang();
  const reduced = usePrefersReducedMotion();
  const item = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;
  const cardReveal = reduced
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
    : fadeUpScale;
  const container = reduced ? { hidden: {}, show: {} } : stagger(0.06, 0.05);

  return (
    <PageScaffold>
      <main>
        <PageHero
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          intro={t.features.intro}
        />
        <CatalogSection
          content={t.features.itemTypes}
          item={item}
          container={container}
          cardReveal={cardReveal}
        />
        <div
          style={{
            height: 1,
            background: "var(--border-soft)",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        />
        <CatalogSection
          content={t.features.sensors}
          item={item}
          container={container}
          cardReveal={cardReveal}
        />
      </main>
    </PageScaffold>
  );
}
