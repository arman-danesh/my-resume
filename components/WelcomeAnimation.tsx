"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

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
          className="fixed inset-0 z-[100] flex items-center justify-center"
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
          <motion.h1
            className="relative z-10 text-center text-2xl font-bold tracking-wide text-white md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {t.welcome}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
