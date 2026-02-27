/**
 * LanguageContext.tsx
 * 
 * Handles switching between English and Dutch across the entire site.
 * The selected language is saved in localStorage so it sticks between visits.
 */
import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  /** Grab the right translation string based on current language */
  t: (translationEntry: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "smlnet-lang";

/** Check localStorage for a previously chosen language, default to English */
function getSavedLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "nl" || saved === "en") return saved;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getSavedLanguage);

  function setLang(newLang: Language) {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  }

  /** Look up the translation for the active language, fall back to English */
  function t(entry: Record<string, string>): string {
    return entry[lang] || entry["en"] || "";
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook to access the language and translation helper from any component */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a <LanguageProvider>");
  }
  return context;
}
