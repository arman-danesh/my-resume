"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import { WelcomeAnimation } from "@/components/WelcomeAnimation";

export default function HomePage() {
  const { isRTL, isSwitching, locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = isRTL ? "fa" : "en";
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return (
    <>
      <WelcomeAnimation />

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,11,13,0.72), rgba(11,11,13,0.72)), url('/images/image/bg_image.svg')",
        }}
      >
        <motion.main
          key={locale}
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: isSwitching ? 0.35 : 1,
            y: isSwitching ? 4 : 0,
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:items-start lg:px-6 lg:py-8"
        >
          <Sidebar />
          <MainContent />
        </motion.main>
      </div>
    </>
  );
}
