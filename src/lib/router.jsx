import { createContext, useCallback, useContext, useEffect, useState } from "react";

const RouteContext = createContext(null);

export function MiniRouterProvider({ children }) {
  const [path, setPath] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to) => {
    if (typeof window === "undefined") return;
    const url = new URL(to, window.location.origin);
    if (url.origin !== window.location.origin) {
      window.location.href = to;
      return;
    }
    if (url.pathname === window.location.pathname) {
      if (url.hash) window.location.hash = url.hash;
      return;
    }
    window.history.pushState(null, "", url.pathname + url.search + url.hash);
    setPath(url.pathname);
    if (!url.hash) window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <RouteContext.Provider value={{ path, navigate }}>{children}</RouteContext.Provider>
  );
}

export function useRoute() {
  const ctx = useContext(RouteContext);
  if (!ctx) throw new Error("useRoute must be used within MiniRouterProvider");
  return ctx;
}

export function LinkInterceptor() {
  const { navigate } = useRoute();
  useEffect(() => {
    const onClick = (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const anchor = e.target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (
        !href ||
        (anchor.target && anchor.target !== "_self") ||
        anchor.hasAttribute("download") ||
        anchor.getAttribute("rel")?.includes("external") ||
        !href.startsWith("/") ||
        href.startsWith("//")
      ) {
        return;
      }
      const url = new URL(href, window.location.origin);
      if (
        url.origin === window.location.origin &&
        url.pathname !== window.location.pathname
      ) {
        e.preventDefault();
        navigate(url.pathname + url.search + url.hash);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);
  return null;
}
