"use client";

/**
 * @packageDocumentation
 * “What I Offer” service card with icon, title, and description.
 *
 * @module components/ServiceCard
 */

import { motion } from "framer-motion";
import { FaCode, FaPalette, FaPenNib, FaSearchengin } from "react-icons/fa6";
import type { Service } from "@/lib/types";
import type { IconType } from "react-icons";

/** Maps {@link Service.icon} keys to react-icons components. */
const icons: Record<Service["icon"], IconType> = {
  code: FaCode,
  palette: FaPalette,
  pen: FaPenNib,
  search: FaSearchengin,
};

/**
 * Props for {@link ServiceCard}.
 */
export interface ServiceCardProps {
  /** Service content from translations. */
  service: Service;
  /** Index used for staggered entrance delay. */
  index: number;
}

/**
 * One service card: icon badge, title, description.
 * Fades/slides in on scroll; lifts slightly on hover.
 *
 * @param props - Component props
 * @returns Service card element
 */
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
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
        <Icon size={22} />
      </div>

      <h3 className="mb-2 text-base font-bold text-white">{service.title}</h3>
      <p className="text-sm leading-relaxed text-white/65">{service.description}</p>
    </motion.div>
  );
}
