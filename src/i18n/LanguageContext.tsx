import { createContext, useCallback, useState, type ReactNode } from "react";
import type { Language } from "./types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

function detectLanguage(): Language {
  if (typeof window === "undefined") return "de";
  const saved = localStorage.getItem("2chub-lang");
  if (saved === "de" || saved === "en") return saved;
  const browserLang = navigator.language || "";
  return browserLang.startsWith("de") ? "de" : "en";
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("2chub-lang", lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "de" ? "en" : "de");
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
