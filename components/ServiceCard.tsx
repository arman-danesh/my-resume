"use client";

/**
 * ServiceCard
 * -----------
 * One “What I Offer” card: icon + title + short description.
 * Fades/slides in on scroll; lifts slightly on hover.
 */

import { motion } from "framer-motion";
import { FaCode, FaPalette, FaPenNib, FaSearchengin } from "react-icons/fa6";
import type { Service } from "@/lib/types";
import type { IconType } from "react-icons";

/** Map service.icon key → react-icons component */

const icons: Record<Service["icon"], IconType> = {
  code: FaCode,
  palette: FaPalette,
  pen: FaPenNib,
  search: FaSearchengin,
};

interface ServiceCardProps {
  service: Service;
  /** Used for staggered entrance delay */
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = icons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group flex flex-1 flex-col rounded-2xl border border-white/5 bg-surface p-5 shadow-soft transition-shadow hover:shadow-gold"
    >
      
      {/* Icon badge */}

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
        <Icon size={22} />
      </div>

      <h3 className="mb-2 text-base font-bold text-white">{service.title}</h3>
      <p className="text-sm leading-relaxed text-white/65">{service.description}</p>
    </motion.div>
  );
}
