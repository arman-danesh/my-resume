"use client";

/**
 * MainContent
 * -----------
 * Right column — main portfolio body:
 * 1. Professional skills (two-column bars)
 * 2. Experience timeline
 * 3. Services grid
 * 4. Featured projects
 * 5. Live project chips
 * 6. Soft skills
 * 7. Footer
 */

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { SkillBar } from "./SkillBar";
import { ServiceCard } from "./ServiceCard";

export function MainContent() {
  const { t } = useLanguage();

  // Split technical skills into two balanced columns
  const mid = Math.ceil(t.skills.technical.length / 2);
  const leftSkills = t.skills.technical.slice(0, mid);
  const rightSkills = t.skills.technical.slice(mid);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="min-w-0 flex-1 rounded-2xl border border-white/5 bg-surface p-5 shadow-soft md:p-8"
    >
      {/* ========== Professional Skills ========== */}
      <section>
        <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
          <span className="text-gold">&lt;</span>
          {t.skills.title}
          <span className="text-gold">/&gt;</span>
        </h2>
        <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
          <div>
            {leftSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={i * 0.04}
              />
            ))}
          </div>
          <div>
            {rightSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== Experience ========== */}
      <section className="mt-10">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
          <span className="text-gold">&lt;</span>
          {t.experience.title}
          <span className="text-gold">/&gt;</span>
        </h2>
        <div className="space-y-6">
          {t.experience.items.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-white/5 bg-white/[0.03] p-4 md:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-white">{job.company}</h3>
                <span className="text-xs font-medium text-gold">{job.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-white/60">
                {job.role}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm leading-relaxed text-white/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== Services ========== */}
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

      {/* ========== Featured Projects ========== */}
      <section className="mt-10">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
          <span className="text-gold">&lt;</span>
          {t.projects.title}
          <span className="text-gold">/&gt;</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-gold/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-white">{project.title}</h3>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-gold/70 transition hover:text-gold"
                    aria-label={`Open ${project.title}`}
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
              <p className="mt-1.5 flex-1 text-sm text-white/60">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gold/15 px-2 py-0.5 text-[11px] font-medium text-gold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== Live Project Links ========== */}
      <section className="mt-10">
        <h2 className="mb-4 flex items-center justify-center gap-2 text-lg font-bold text-white">
          <span className="text-gold">&lt;</span>
          {t.liveProjects.title}
          <span className="text-gold">/&gt;</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {t.liveProjects.items.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80 transition hover:border-gold/40 hover:text-gold"
            >
              {p.name}
            </a>
          ))}
        </div>
      </section>

      {/* ========== Soft Skills ========== */}
      <section className="mt-10">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
          <span className="text-gold">&lt;</span>
          {t.skills.softTitle}
          <span className="text-gold">/&gt;</span>
        </h2>
        <div className="grid gap-x-8 sm:grid-cols-2">
          {t.skills.soft.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={i * 0.06}
            />
          ))}
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer className="mt-10 border-t border-white/5 pt-5 text-center text-xs text-white/40">
        {t.footer}
      </footer>
    </motion.article>
  );
}
