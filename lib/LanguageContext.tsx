"use client";

/**
 * @packageDocumentation
 * Global EN/FA language state for the portfolio UI.
 *
 * Provides locale, translations, RTL flag, crossfade flag, and a safe toggle.
 *
 * @module lib/LanguageContext
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

/**
 * Public shape of the language context value.
 */
export interface LanguageContextValue {
  /** Active language code. */
  locale: Locale;
  /** Full translation object for {@link locale}. */
  t: Translations;
  /** `true` when Persian is active (drives `dir` / `lang` on `<html>`). */
  isRTL: boolean;
  /** `true` during the short opacity crossfade between languages. */
  isSwitching: boolean;
  /**
   * Animated EN ↔ FA switch.
   *
   * 1. Sets {@link isSwitching} so the page can dim.
   * 2. After ~180ms flips {@link locale}.
   * 3. After another ~280ms clears {@link isSwitching}.
   *
   * Double-taps while switching are ignored.
   */
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Props for {@link LanguageProvider}.
 */
export interface LanguageProviderProps {
  /** App tree that may call {@link useLanguage}. */
  children: ReactNode;
}

/**
 * Wraps the app and supplies language state.
 *
 * Default locale is English (`"en"`).
 *
 * @param props - Provider props
 * @returns Context provider element
 */
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>("en");
  const [isSwitching, setIsSwitching] = useState(false);

  const toggleLanguage = useCallback(() => {
    if (isSwitching) return;
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

/**
 * Access the language context.
 *
 * Must be used under {@link LanguageProvider}.
 *
 * @returns Current {@link LanguageContextValue}
 * @throws Error if called outside the provider
 */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
