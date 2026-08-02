"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCarouselProps {
  projects: Project[];
  title: string;
}

export function ProjectCarousel({ projects, title }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  }, [projects.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
  }, [projects.length]);

  // Show 3 items on desktop conceptually, but simple centered carousel for reliability
  const visible = [
    projects[(current - 1 + projects.length) % projects.length],
    projects[current],
    projects[(current + 1) % projects.length],
  ];

  return (
    <section className="mt-10">
      <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-white md:text-2xl">
        <span className="text-gold">&lt;</span>
        {title}
        <span className="text-gold">/&gt;</span>
      </h2>

      <div className="relative">
        <div className="flex items-center gap-3 overflow-hidden">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface text-gold transition hover:bg-gold/20"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <motion.button
                key={`${project.title}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightbox(project.image)}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-surface shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  i === 1 ? "ring-1 ring-gold/40" : "opacity-80"
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{project.title}</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-medium text-gold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next project"
            className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface text-gold transition hover:bg-gold/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-6 bg-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Project preview"
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
