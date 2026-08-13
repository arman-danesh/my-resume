"use client";

/**
 * Sidebar
 * -------
 * Left column (sticky on md+):
 * - Language toggle
 * - Profile photo + name + roles
 * - About, Information, Education
 * - Focus-area circular progress
 * - Contact links + social icons
 */

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
} from "react-icons/fa6";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { CircularProgress } from "./CircularProgress";

export function Sidebar() {
  const { t, isRTL, toggleLanguage, isSwitching } = useLanguage();

  return (
    <motion.aside
      initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative top-4 flex h-fit w-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface shadow-soft md:sticky lg:w-[320px] lg:shrink-0"
    >
      {/* ---- Header: lang button, avatar, name, roles ---- */}
      <div className="relative border-b border-white/5 bg-gradient-to-b from-gold/10 to-transparent p-6 text-center">
        <button
          onClick={toggleLanguage}
          disabled={isSwitching}
          className="absolute left-4 top-4 rounded-lg bg-gold px-2.5 py-1 text-xs font-bold text-surface-dark transition hover:bg-gold-light disabled:opacity-60"
          aria-label="Switch language"
        >
          {t.languageButton}
        </button>

        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full ring-2 ring-gold/60 ring-offset-2 ring-offset-surface-dark">
          <Image
            src="/profile-image.jpg"
            alt="Arman Danesh"
            width={80}
            height={80}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <h1 className="font-display text-xl font-bold tracking-wide text-white">
          {t.name}
        </h1>
        <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-sm text-gold">
          {t.roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </div>

      {/* ---- Body sections ---- */}
      <div className="flex flex-1 flex-col gap-5 p-5">
        {/* About */}
        <section>
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-gold">
            {t.about.title}
          </h2>
          <p className="text-sm leading-relaxed text-white/70 h-10 overflow-y-auto">{t.about.description}</p>
        </section>

        <hr className="border-white/5" />

        {/* Information (location, languages, email) */}
        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gold">
            {t.information.title}
          </h2>
          <dl className="space-y-2.5">
            {t.information.items.map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between gap-3 text-sm"
              >
                <dt className="shrink-0 text-white/50">{item.label}</dt>
                <dd className="break-all text-end text-white/90">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className="border-white/5" />

        {/* Education */}
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold">
            <FaGraduationCap size={14} />
            {t.education.title}
          </h2>
          <p className="text-sm font-medium text-white/90">{t.education.degree}</p>
          <p className="mt-0.5 text-xs text-white/55">{t.education.university}</p>
        </section>

        <hr className="border-white/5" />

        {/* Focus areas (circular progress) */}
        <section>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gold">
            {t.learning.title}
          </h2>
          <div className="flex justify-around">
            {t.learning.items.map((item, i) => (
              <CircularProgress
                key={item.label}
                label={item.label}
                level={item.level}
                delay={0.35 + i * 0.12}
              />
            ))}
          </div>
        </section>

        <hr className="border-white/5" />

        {/* Contact */}
        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-gold">
            {t.contact.title}
          </h2>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="tel:+989911537923"
                className="flex items-center gap-2.5 text-white/80 transition hover:text-gold"
              >
                <FaPhone size={14} className="shrink-0 text-gold" />
                {t.contact.phone}
              </a>
            </li>
            <li>
              <a
                href="https://t.me/ArmanDaneshWork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/80 transition hover:text-gold"
              >
                <FaTelegram size={15} className="shrink-0 text-gold" />
                {t.contact.telegram}
              </a>
            </li>
            <li>
              <a
                href="mailto:armandaneshwork@gmail.com"
                className="flex items-center gap-2.5 text-white/80 transition hover:text-gold"
              >
                <FaEnvelope size={14} className="shrink-0 text-gold" />
                {t.contact.email}
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* ---- Social footer ---- */}
      <div className="flex items-center justify-center gap-4 border-t border-white/5 py-4">
        <a
          href="https://www.linkedin.com/in/arman-danesh-a6aaab2bb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white/50 transition hover:text-gold"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://t.me/ArmanDaneshWork"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="text-white/50 transition hover:text-gold"
        >
          <FaTelegram size={20} />
        </a>
        <a
          href="https://github.com/arman-danesh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white/50 transition hover:text-gold"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </motion.aside>
  );
}
