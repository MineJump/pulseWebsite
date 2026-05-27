import { AnimatePresence } from "framer-motion";
import { LangProvider } from "./lib/i18n.jsx";
import { LinkInterceptor, MiniRouterProvider, useRoute } from "./lib/router.jsx";
import PageTransition from "./components/PageTransition.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import MethodenPage from "./pages/MethodenPage.jsx";
import MethodDetailPage from "./pages/MethodDetailPage.jsx";
import PlattformPage from "./pages/PlattformPage.jsx";
import AppPage from "./pages/AppPage.jsx";
import AnwendungenPage from "./pages/AnwendungenPage.jsx";
import PreisePage from "./pages/PreisePage.jsx";
import UeberUnsPage from "./pages/UeberUnsPage.jsx";
import ImpressumPage from "./pages/ImpressumPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import PublikationenPage from "./pages/PublikationenPage.jsx";

const METHOD_SLUGS = ["befragen", "beobachten", "intervenieren", "auswerten"];

function pageForPath(path) {
  if (path === "/impressum") return { key: "impressum", element: <ImpressumPage /> };
  if (path === "/privacy") return { key: "privacy", element: <PrivacyPage /> };
  if (path === "/methoden") return { key: "methoden", element: <MethodenPage /> };
  const m = path.match(/^\/methoden\/([^/]+)\/?$/);
  if (m) {
    const slug = m[1];
    if (METHOD_SLUGS.includes(slug)) {
      return { key: `methoden-${slug}`, element: <MethodDetailPage slug={slug} /> };
    }
  }
  if (path === "/plattform") return { key: "plattform", element: <PlattformPage /> };
  if (path === "/app") return { key: "app", element: <AppPage /> };
  if (path === "/anwendungen") return { key: "anwendungen", element: <AnwendungenPage /> };
  if (path === "/preise") return { key: "preise", element: <PreisePage /> };
  if (path === "/ueber-uns") return { key: "ueber-uns", element: <UeberUnsPage /> };
  if (path === "/publikationen") return { key: "publikationen", element: <PublikationenPage /> };
  return { key: "home", element: <HomePage /> };
}

function AppRoutes() {
  const { path } = useRoute();
  const { key, element } = pageForPath(path);
  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={key}>{element}</PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LangProvider>
      <MiniRouterProvider>
        <LinkInterceptor />
        <Header />
        <AppRoutes />
      </MiniRouterProvider>
    </LangProvider>
  );
}
