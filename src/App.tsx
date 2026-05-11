import { LanguageProvider, useTranslation } from "./i18n";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/sections/Hero";
import { USPs } from "./components/sections/USPs";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Impressum } from "./components/sections/Impressum";
import { Privacy } from "./components/sections/Privacy";
import { MethodenPage } from "./pages/MethodenPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { UeberUnsPage } from "./pages/UeberUnsPage";

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
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
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
            style={{ color: "var(--text-dim)", fontFamily: "'IBM Plex Mono', monospace" }}
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
        <USPs />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, "") || "/" : "/";

  return (
    <LanguageProvider>
      {path === "/impressum" ? (
        <ImpressumPage />
      ) : path === "/privacy" ? (
        <PrivacyPage />
      ) : path === "/methoden" ? (
        <MethodenPage />
      ) : path === "/features" ? (
        <FeaturesPage />
      ) : path === "/ueber-uns" ? (
        <UeberUnsPage />
      ) : (
        <HomePage />
      )}
    </LanguageProvider>
  );
}

export default App;
