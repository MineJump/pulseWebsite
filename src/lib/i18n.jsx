import { createContext, useCallback, useContext, useState } from "react";
import { translations } from "../i18n/translations.js";

const STORAGE_KEY = "2chub-lang";

function getInitialLanguage() {
  if (typeof window === "undefined") return "de";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "de" || stored === "en") return stored;
  return (navigator.language || "").startsWith("de") ? "de" : "en";
}

const LangContext = createContext({
  language: "de",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export function LangProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((next) => {
    setLanguageState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "de" ? "en" : "de");
  }, [language, setLanguage]);

  return (
    <LangContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const { language, setLanguage, toggleLanguage } = useContext(LangContext);
  return {
    t: translations[language],
    language,
    setLanguage,
    toggleLanguage,
  };
}
