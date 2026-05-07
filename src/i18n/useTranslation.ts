import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

export function useTranslation() {
  const { language, setLanguage, toggleLanguage } = useContext(LanguageContext);
  return {
    t: translations[language],
    language,
    setLanguage,
    toggleLanguage,
  };
}
