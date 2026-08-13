/**
 * @packageDocumentation
 * Shared TypeScript types for the Arman Danesh portfolio.
 *
 * All UI copy and structured content shapes live here so components stay typed
 * and TypeDoc can generate a clear data-model reference.
 *
 * @module lib/types
 */

/**
 * Supported UI languages.
 *
 * - `"en"` — English (LTR)
 * - `"fa"` — Persian / Farsi (RTL)
 */
export type Locale = "en" | "fa";

/**
 * Single skill entry shown in skill bars or soft-skill lists.
 */
export interface Skill {
  /** Display name (e.g. `"React.js"`). */
  name: string;
  /** Proficiency percentage in the range `0`–`100`. */
  level: number;
}

/**
 * Service / “what I offer” card data.
 */
export interface Service {
  /** Card title. */
  title: string;
  /** Short description of the service. */
  description: string;
  /**
   * Key used by {@link ServiceCard} to pick an icon.
   * @see components/ServiceCard
   */
  icon: "code" | "palette" | "pen" | "search";
}

/**
 * Featured project card shown in the main content grid.
 */
export interface Project {
  /** Project title. */
  title: string;
  /** One-line or short paragraph summary. */
  description: string;
  /** Optional full-size image path. */
  image?: string;
  /** Optional thumbnail path. */
  thumbnail?: string;
  /** Tech tags rendered as chips. */
  technologies: string[];
  /** Public live URL, if any. */
  liveUrl?: string;
  /** Source repository URL, if any. */
  githubUrl?: string;
}

/**
 * One job entry in the experience timeline.
 */
export interface ExperienceItem {
  /** Company or project name. */
  company: string;
  /** Job title / role. */
  role: string;
  /** Human-readable period (e.g. `"Dec 2025 – Present"`). */
  period: string;
  /** Optional city or remote label. */
  location?: string;
  /** Bullet points describing impact and stack. */
  bullets: string[];
}

/**
 * Quick external link chip under “Live Projects”.
 */
export interface LiveProject {
  /** Label on the chip. */
  name: string;
  /** Absolute HTTPS URL. */
  url: string;
}

/**
 * Full translation tree for one locale.
 *
 * Mirrors the structure of `lib/data.ts`. Every user-visible string for a
 * language lives under this shape so components only read `t.*`.
 */
export interface Translations {
  /** Label for the language toggle button (e.g. `"FA"` / `"EN"`). */
  languageButton: string;
  /** Person name in the sidebar header. */
  name: string;
  /** Two role lines under the name. */
  roles: [string, string];
  about: {
    title: string;
    description: string;
  };
  information: {
    title: string;
    items: { label: string; value: string }[];
  };
  education: {
    title: string;
    degree: string;
    university: string;
  };
  learning: {
    title: string;
    items: { label: string; level: number }[];
  };
  contact: {
    title: string;
    phone: string;
    telegram: string;
    email: string;
  };
  skills: {
    title: string;
    softTitle: string;
    technical: Skill[];
    soft: Skill[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  services: {
    title: string;
    items: Service[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  liveProjects: {
    title: string;
    items: LiveProject[];
  };
  /** Footer copyright line. */
  footer: string;
  /** Welcome overlay title. */
  welcome: string;
}
