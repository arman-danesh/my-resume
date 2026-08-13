"use client";

/**
 * @packageDocumentation
 * Horizontal skill progress bar with scroll-triggered width animation.
 *
 * @module components/SkillBar
 */

import { motion } from "framer-motion";

/**
 * Props for {@link SkillBar}.
 */
export interface SkillBarProps {
  /** Skill label (e.g. `"React.js"`). */
  name: string;
  /** Proficiency percentage (`0`–`100`). */
  level: number;
  /** Entrance stagger delay in seconds. @defaultValue 0 */
  delay?: number;
}

/**
 * Renders a labeled progress bar that animates from `0` to {@link SkillBarProps.level}%
 * when scrolled into view (once).
 *
 * @param props - Component props
 * @returns Skill bar element
 */
export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="mb-3">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-white/90">{name}</span>
        <span className="text-gold text-xs font-semibold">{level}%</span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}
