"use client";

/**
 * @packageDocumentation
 * Full-screen intro overlay shown once on first load.
 *
 * @module components/WelcomeAnimation
 */

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Welcome splash (~2.2s): background panels, logo, localized title.
 * Auto-dismisses; uses {@link useLanguage} for `t.welcome`.
 *
 * @returns Intro overlay or `null` after exit
 */
export function WelcomeAnimation() {
  const { t } = useLanguage();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#0B0B0D]"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-[#1a1a22]"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.img
            src="/logo.svg"
            alt=""
            className="relative z-10 h-24 w-24 rounded-full shadow-gold md:h-28 md:w-28"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.45 }}
          />

          <motion.h1
            className="relative z-10 text-center text-2xl font-bold tracking-wide text-white md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {t.welcome}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
