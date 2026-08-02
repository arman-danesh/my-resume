"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { SkillBar } from "./SkillBar";
import { ServiceCard } from "./ServiceCard";
import { ProjectCarousel } from "./ProjectCarousel";

export function MainContent() {
  const { t, locale } = useLanguage();

  const mid = Math.ceil(t.skills.technical.length / 2);
  const leftSkills = t.skills.technical.slice(0, mid);
  const rightSkills = t.skills.technical.slice(mid);

  const softTitle = locale === "fa" ? "مهارت‌های نرم" : "Personal Skills";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
      className="min-w-0 flex-1 rounded-2xl border border-white/5 bg-surface p-5 shadow-soft md:p-8"
    >
      {/* Professional Skills */}
      <section>
        <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
          <span className="text-gold">&lt;</span>
          {t.skills.title}
          <span className="text-gold">/&gt;</span>
        </h2>
        <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
          <div>
            {leftSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
            ))}
          </div>
          <div>
            {rightSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mt-10">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
          <span className="text-gold">&lt;</span>
          {t.services.title}
          <span className="text-gold">/&gt;</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.services.items.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Projects Carousel */}
      <ProjectCarousel projects={t.projects.items} title={t.projects.title} />

      {/* Soft Skills */}
      <section className="mt-10">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
          <span className="text-gold">&lt;</span>
          {softTitle}
          <span className="text-gold">/&gt;</span>
        </h2>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {t.skills.soft.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-white/5 pt-5 text-center text-xs text-white/40">
        {t.footer}
      </footer>
    </motion.article>
  );
}
