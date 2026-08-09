"use client";

/**
 * CircularProgress
 * ----------------
 * SVG ring + counting % label for “Focus Areas” in the sidebar.
 * Stroke and number both animate when the element enters the viewport.
 */

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface CircularProgressProps {
  label: string;
  level: number; // 0–100
  delay?: number;
}

export function CircularProgress({
  label,
  level,
  delay = 0,
}: CircularProgressProps) {
  // Animated counter for the center label
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

  // Circle geometry (r = 36 inside an 80×80 viewBox)
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-20 w-20">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
          {/* Track */}
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          {/* Progress arc */}
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

        {/* Center % */}
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gold">
          {display}%
        </span>
      </div>

      <span className="text-xs font-medium text-white/80">{label}</span>
    </div>
  );
}
