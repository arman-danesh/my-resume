"use client";

/**
 * @packageDocumentation
 * Circular SVG progress ring for sidebar “Focus Areas”.
 *
 * @module components/CircularProgress
 */

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Props for {@link CircularProgress}.
 */
export interface CircularProgressProps {
  /** Label under the ring (e.g. `"TypeScript"`). */
  label: string;
  /** Target percentage `0`–`100`. */
  level: number;
  /** Animation start delay in seconds. @defaultValue 0 */
  delay?: number;
}

/**
 * SVG ring + counting percent label.
 * Stroke and number both animate when the element enters the viewport.
 *
 * @param props - Component props
 * @returns Circular progress element
 */
export function CircularProgress({
  label,
  level,
  delay = 0,
}: CircularProgressProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, level, {
      duration: 1.4,
      delay,
      ease: "easeOut",
    });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [level, delay, count, rounded]);

  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-20 w-20">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="#DBA507"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay, ease: "easeOut" }}
          />
        </svg>

        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gold">
          {display}%
        </span>
      </div>

      <span className="text-xs font-medium text-white/80">{label}</span>
    </div>
  );
}
