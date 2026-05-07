import { LanguageProvider, useTranslation } from "./i18n";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { Hero } from "./components/sections/Hero";
import { Research } from "./components/sections/Research";
import { Platform } from "./components/sections/Platform";
import { Team } from "./components/sections/Team";
import { Impressum } from "./components/sections/Impressum";
import { Privacy } from "./components/sections/Privacy";

function MarqueeContent() {
  const { language } = useTranslation();
  const items =
    language === "de"
      ? [
          "Experience Sampling",
          "Passive Sensing",
          "Ecological Momentary Assessment",
          "Mobile Research",
          "Clinical Studies",
          "Behavioural Science",
        ]
      : [
          "Experience Sampling",
          "Passive Sensing",
          "Ecological Momentary Assessment",
          "Mobile Research",
          "Clinical Studies",
          "Behavioural Science",
        ];
  return <MarqueeStrip items={items} />;
}

function ImpressumPage() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-20">
        <div className="max-w-[820px] mx-auto">
          <a
            href="/"
            className="text-sm uppercase tracking-[0.18em] mb-12 inline-block py-2 transition-opacity hover:opacity-70"
            style={{
              color: "var(--text-dim)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            &larr; {t.footer.backLink}
          </a>
          <Impressum />
        </div>
      </main>
      <Footer />
    </>
  );
}

function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="min-h-screen px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-20">
        <div className="max-w-[820px] mx-auto">
          <a
            href="/"
            className="text-sm uppercase tracking-[0.18em] mb-12 inline-block py-2 transition-opacity hover:opacity-70"
            style={{
              color: "var(--text-dim)",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            &larr; {t.footer.backLink}
          </a>
          <Privacy />
        </div>
      </main>
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeContent />
        <Research />
        <Platform />
        <Team />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <LanguageProvider>
      {path === "/impressum" ? (
        <ImpressumPage />
      ) : path === "/privacy" ? (
        <PrivacyPage />
      ) : (
        <HomePage />
      )}
    </LanguageProvider>
  );
}

export default App;
