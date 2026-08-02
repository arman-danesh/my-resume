"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations } from "./data";
import type { Locale, Translations } from "./types";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  isRTL: boolean;
  isSwitching: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [isSwitching, setIsSwitching] = useState(false);

  const toggleLanguage = useCallback(() => {
    if (isSwitching) return;
    setIsSwitching(true);
    // Short fade-out, then swap language, then fade-in is handled by CSS/motion
    setTimeout(() => {
      setLocale((prev) => (prev === "en" ? "fa" : "en"));
      setTimeout(() => setIsSwitching(false), 280);
    }, 180);
  }, [isSwitching]);

  const value: LanguageContextValue = {
    locale,
    t: translations[locale],
    isRTL: locale === "fa",
    isSwitching,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
