"use client";

/**
 * LanguageContext
 * ---------------
 * Global EN/FA state for the portfolio.
 * - `locale`     → current language
 * - `t`          → translation object for that language
 * - `isRTL`      → true when Persian (drives dir/lang on <html>)
 * - `isSwitching`→ true during the short crossfade
 * - `toggleLanguage` → animated EN ↔ FA switch
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations } from "./data";
import type { Locale, Translations } from "./types";

// ---------------------------------------------------------------------------
// Context shape
// ---------------------------------------------------------------------------

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  isRTL: boolean;
  isSwitching: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [isSwitching, setIsSwitching] = useState(false);

  /**
   * Crossfade language switch:
   * 1) mark switching (page dims via motion)
   * 2) after 180ms swap locale
   * 3) after another 280ms clear switching flag
   */
  const toggleLanguage = useCallback(() => {
    if (isSwitching) return; // ignore double-taps
    setIsSwitching(true);

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

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/** Must be used under <LanguageProvider> */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
